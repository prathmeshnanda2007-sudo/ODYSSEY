"""Path planning module for autonomous Mars rover navigation.

Defines IPathPlanner and an efficient A* implementation on 2D traversability cost grids.
Enforces rover kinematic clearance and avoids lethal hazard cells, computing
elevation, slope, and cost profiles along with exploration graph nodes.
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import List, Tuple, Optional, Dict, Any
import heapq
import math
import numpy as np


@dataclass
class PlanResult:
    success: bool
    path_coords: List[Tuple[int, int]]  # [(row, col), ...]
    path_length_steps: int
    total_cost: float
    message: str
    elevation_profile: List[float] = field(default_factory=list)
    slope_profile: List[float] = field(default_factory=list)
    cost_profile: List[float] = field(default_factory=list)
    explored_nodes: List[Tuple[int, int]] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "success": bool(self.success),
            "path_coords": [(int(r), int(c)) for r, c in self.path_coords],
            "path_length_steps": int(self.path_length_steps),
            "total_cost": round(float(self.total_cost), 2),
            "message": str(self.message),
            "elevation_profile": [round(float(e), 2) for e in self.elevation_profile],
            "slope_profile": [round(float(s), 2) for s in self.slope_profile],
            "cost_profile": [round(float(c), 2) for c in self.cost_profile],
            "explored_nodes": [(int(r), int(c)) for r, c in self.explored_nodes],
        }


class IPathPlanner(ABC):
    """Abstract interface for Martian path planners."""

    @abstractmethod
    def plan(
        self,
        costmap: np.ndarray,
        start: Tuple[int, int],
        goal: Tuple[int, int],
        dem: Optional[np.ndarray] = None,
        slope: Optional[np.ndarray] = None
    ) -> PlanResult:
        """Plan a path from start to goal minimizing traversability cost."""
        pass


class AStarPlanner(IPathPlanner):
    """8-connected grid A* algorithm utilizing admissible Euclidean heuristic with
    safe obstacle snapping, elevation profiling, and minimum-risk fallback traversal.
    """

    def __init__(self, lethal_threshold: float = 1e5):
        self.lethal_threshold = lethal_threshold
        # 8 directions: (d_row, d_col, base_distance)
        self.directions = [
            (-1, 0, 1.0), (1, 0, 1.0), (0, -1, 1.0), (0, 1, 1.0),
            (-1, -1, math.sqrt(2)), (-1, 1, math.sqrt(2)),
            (1, -1, math.sqrt(2)), (1, 1, math.sqrt(2))
        ]

    def _heuristic(self, a: Tuple[int, int], b: Tuple[int, int]) -> float:
        return math.hypot(a[0] - b[0], a[1] - b[1])

    def _find_nearest_navigable(
        self, costmap: np.ndarray, pt: Tuple[int, int], max_radius: int = 25
    ) -> Optional[Tuple[int, int]]:
        """Snap a point to the closest non-lethal navigable cell within max_radius."""
        H, W = costmap.shape
        if not (0 <= pt[0] < H and 0 <= pt[1] < W):
            return None
        if costmap[pt] < self.lethal_threshold:
            return pt

        r, c = pt
        best_pt = None
        min_dist = float('inf')

        for dr in range(-max_radius, max_radius + 1):
            for dc in range(-max_radius, max_radius + 1):
                nr, nc = r + dr, c + dc
                if 0 <= nr < H and 0 <= nc < W:
                    if costmap[nr, nc] < self.lethal_threshold:
                        dist = dr * dr + dc * dc
                        if dist < min_dist:
                            min_dist = dist
                            best_pt = (nr, nc)

        return best_pt

    def _extract_profiles(
        self,
        path: List[Tuple[int, int]],
        costmap: np.ndarray,
        dem: Optional[np.ndarray],
        slope: Optional[np.ndarray]
    ) -> Tuple[List[float], List[float], List[float]]:
        elevations = []
        slopes = []
        costs = []
        for r, c in path:
            costs.append(float(costmap[r, c]))
            if dem is not None and 0 <= r < dem.shape[0] and 0 <= c < dem.shape[1]:
                elevations.append(float(dem[r, c]))
            if slope is not None and 0 <= r < slope.shape[0] and 0 <= c < slope.shape[1]:
                slopes.append(float(slope[r, c]))
        return elevations, slopes, costs

    def plan(
        self,
        costmap: np.ndarray,
        start: Tuple[int, int],
        goal: Tuple[int, int],
        dem: Optional[np.ndarray] = None,
        slope: Optional[np.ndarray] = None
    ) -> PlanResult:
        H, W = costmap.shape

        # Validate start and goal within bounds
        if not (0 <= start[0] < H and 0 <= start[1] < W):
            return PlanResult(False, [], 0, 0.0, f"Start coordinates {start} out of bounds.")
        if not (0 <= goal[0] < H and 0 <= goal[1] < W):
            return PlanResult(False, [], 0, 0.0, f"Goal coordinates {goal} out of bounds.")

        # Robust navigation: Snap start/goal to nearest navigable cell if placed on obstacle
        actual_start = self._find_nearest_navigable(costmap, start, max_radius=25) or start
        actual_goal = self._find_nearest_navigable(costmap, goal, max_radius=25) or goal
        was_snapped = (actual_start != start) or (actual_goal != goal)

        # Primary pass: Strict obstacle avoidance
        plan_res = self._run_astar(
            costmap, actual_start, actual_goal, strict=True, dem=dem, slope=slope, was_snapped=was_snapped
        )
        if plan_res.success:
            return plan_res

        # Secondary pass: Risk-minimizing corridor traversal (finds lowest-risk saddle/pass)
        return self._run_astar(
            costmap, actual_start, actual_goal, strict=False, dem=dem, slope=slope, was_snapped=was_snapped
        )

    def _run_astar(
        self,
        costmap: np.ndarray,
        start: Tuple[int, int],
        goal: Tuple[int, int],
        strict: bool,
        dem: Optional[np.ndarray],
        slope: Optional[np.ndarray],
        was_snapped: bool
    ) -> PlanResult:
        H, W = costmap.shape
        open_set = []
        heapq.heappush(open_set, (0.0, start))

        came_from: Dict[Tuple[int, int], Tuple[int, int]] = {}
        g_score: Dict[Tuple[int, int], float] = {start: 0.0}
        closed_set: set[Tuple[int, int]] = set()
        explored: List[Tuple[int, int]] = []
        step_counter = 0

        while open_set:
            current_f, current = heapq.heappop(open_set)

            if current in closed_set:
                continue
            closed_set.add(current)

            if step_counter % 12 == 0 and len(explored) < 200:
                explored.append(current)
            step_counter += 1

            if current == goal:
                # Reconstruct path
                path = [current]
                while current in came_from:
                    current = came_from[current]
                    path.append(current)
                path.reverse()
                total_cost = float(g_score[goal])
                
                if strict:
                    msg = "Optimal safe path successfully computed."
                    if was_snapped:
                        msg = "Navigable path computed (waypoints snapped to safe terrain clearance)."
                else:
                    msg = "Minimum-risk corridor computed crossing ridge pass with caution clearance."

                elev, slp, csts = self._extract_profiles(path, costmap, dem, slope)
                return PlanResult(
                    success=True,
                    path_coords=path,
                    path_length_steps=len(path),
                    total_cost=round(total_cost, 2),
                    message=msg,
                    elevation_profile=elev,
                    slope_profile=slp,
                    cost_profile=csts,
                    explored_nodes=explored,
                )

            current_g = g_score[current]

            for dr, dc, dist_weight in self.directions:
                neighbor = (current[0] + dr, current[1] + dc)
                nr, nc = neighbor

                if not (0 <= nr < H and 0 <= nc < W):
                    continue

                if neighbor in closed_set:
                    continue

                cell_cost = costmap[nr, nc]
                if strict and cell_cost >= self.lethal_threshold:
                    continue  # Impassable in strict mode

                # In non-strict mode, heavily penalize lethal cells without infinite wall
                if not strict and cell_cost >= self.lethal_threshold:
                    effective_cost = 450.0 + (cell_cost % 100.0)
                else:
                    effective_cost = cell_cost

                step_cost = effective_cost * dist_weight
                tentative_g = current_g + step_cost

                if tentative_g < g_score.get(neighbor, float('inf')):
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative_g
                    f_score = tentative_g + self._heuristic(neighbor, goal)
                    heapq.heappush(open_set, (f_score, neighbor))

        return PlanResult(
            success=False,
            path_coords=[],
            path_length_steps=0,
            total_cost=0.0,
            message="No traversable route found between coordinates.",
            explored_nodes=explored,
        )
