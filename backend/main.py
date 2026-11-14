"""ODYSSEY Planetary Navigation & Terrain Intelligence System - Backend Server.
"""

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from backend.app.api.routes import router as api_router, get_sample_datasets

app = FastAPI(
    title="ODYSSEY Autonomous Mars Rover Navigation & Planetary Intelligence",
    description="Mission-grade planetary data ingestion, raster validation, and terrain intelligence engine.",
    version="1.0.0",
)

# Enable CORS for local Vite development and web dashboards
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files directory for generated previews, heightmaps, and textures
outputs_dir = os.path.abspath("outputs")
os.makedirs(outputs_dir, exist_ok=True)
app.mount("/outputs", StaticFiles(directory=outputs_dir), name="outputs")

# Mount API routes
app.include_router(api_router, prefix="/api")

@app.on_event("startup")
def startup_event():
    """Ensure sample datasets and outputs directory are primed upon startup."""
    os.makedirs("outputs", exist_ok=True)
    os.makedirs("datasets/raw", exist_ok=True)
    os.makedirs("datasets/processed", exist_ok=True)
    os.makedirs("datasets/sample", exist_ok=True)
    try:
        get_sample_datasets()
        print("[ODYSSEY] Planetary sample datasets primed and registered.")
    except Exception as e:
        print(f"[ODYSSEY] Warning during sample priming: {e}")


# Mount built frontend dist for full standalone production serving
frontend_dist = os.path.abspath("frontend/dist")
if os.path.exists(frontend_dist):
    app.mount("/", StaticFiles(directory=frontend_dist, html=True), name="frontend")
else:
    @app.get("/")
    def root():
        return {
            "system": "ODYSSEY Planetary Terrain Intelligence",
            "version": "1.0.0",
            "status": "OPERATIONAL",
            "api_docs": "/docs",
        }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
