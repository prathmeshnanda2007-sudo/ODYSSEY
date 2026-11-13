"""Path planning module for autonomous Mars rover navigation.

Defines IPathPlanner and an efficient A* implementation on 2D traversability cost grids.
Enforces rover kinematic clearance and avoids lethal hazard cells.
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, asdict
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

    def to_dict(self) -> Dict[str, Any]:
        return {
            "success": bool(self.success),
            "path_coords": [(int(r), int(c)) for r, c in self.path_coords],
            "path_length_steps": int(self.path_length_steps),
            "total_cost": round(float(self.total_cost), 2),
            "message": str(self.message),
        }


class IPathPlanner(ABC):
    """Abstract interface for Martian path planners."""

    @abstractmethod
    def plan(
        self,
        costmap: np.ndarray,
        start: Tuple[int, int],
        goal: Tuple[int, int]
    ) -> PlanResult:
        """Plan a path from start to goal minimizing traversability cost."""
        pass


class AStarPlanner(IPathPlanner):
    """8-connected grid A* algorithm utilizing admissible Euclidean heuristic."""

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
        self, costmap: np.ndarray, pt: Tuple[int, int], max_radius: int = 15
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

    def plan(
        self,
        costmap: np.ndarray,
        start: Tuple[int, int],
        goal: Tuple[int, int]
    ) -> PlanResult:
        H, W = costmap.shape

        # Validate start and goal within bounds
        if not (0 <= start[0] < H and 0 <= start[1] < W):
            return PlanResult(False, [], 0, 0.0, f"Start coordinates {start} out of bounds.")
        if not (0 <= goal[0] < H and 0 <= goal[1] < W):
            return PlanResult(False, [], 0, 0.0, f"Goal coordinates {goal} out of bounds.")

        # Robust navigation: Snap start/goal to nearest navigable cell if placed on obstacle
        actual_start = self._find_nearest_navigable(costmap, start, max_radius=15)
        if actual_start is None:
            return PlanResult(False, [], 0, 0.0, "Start coordinate is within deep impassable hazard zone.")

        actual_goal = self._find_nearest_navigable(costmap, goal, max_radius=15)
        if actual_goal is None:
            return PlanResult(False, [], 0, 0.0, "Goal coordinate is within deep impassable hazard zone.")

        was_snapped = (actual_start != start) or (actual_goal != goal)

        open_set = []
        heapq.heappush(open_set, (0.0, actual_start))

        came_from: Dict[Tuple[int, int], Tuple[int, int]] = {}
        g_score: Dict[Tuple[int, int], float] = {actual_start: 0.0}

        while open_set:
            current_f, current = heapq.heappop(open_set)

            if current == actual_goal:
                # Reconstruct path
                path = [current]
                while current in came_from:
                    current = came_from[current]
                    path.append(current)
                path.reverse()
                total_cost = float(g_score[actual_goal])
                msg = "Optimal safe path successfully computed."
                if was_snapped:
                    msg = "Navigable path computed (waypoints snapped to safe terrain clearance)."
                return PlanResult(
                    success=True,
                    path_coords=path,
                    path_length_steps=len(path),
                    total_cost=round(total_cost, 2),
                    message=msg
                )

            current_g = g_score[current]

            for dr, dc, dist_weight in self.directions:
                neighbor = (current[0] + dr, current[1] + dc)
                nr, nc = neighbor

                if not (0 <= nr < H and 0 <= nc < W):
                    continue

                cell_cost = costmap[nr, nc]
                if cell_cost >= self.lethal_threshold:
                    continue  # Impassable hazard

                step_cost = cell_cost * dist_weight
                tentative_g = current_g + step_cost

                if tentative_g < g_score.get(neighbor, float('inf')):
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative_g
                    f_score = tentative_g + self._heuristic(neighbor, actual_goal)
                    heapq.heappush(open_set, (f_score, neighbor))

        return PlanResult(
            success=False,
            path_coords=[],
            path_length_steps=0,
            total_cost=0.0,
            message="No navigable path found between start and goal avoiding lethal hazards."
        )
