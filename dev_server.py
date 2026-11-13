import subprocess
import sys
import time
import os

def start_backend(root_dir):
    print("[ODYSSEY] Starting backend on http://127.0.0.1:8000...")
    return subprocess.Popen(
        [
            sys.executable,
            "-m",
            "uvicorn",
            "backend.main:app",
            "--host",
            "127.0.0.1",
            "--port",
            "8000",
            "--reload",
        ],
        cwd=root_dir,
    )

def start_frontend(frontend_dir):
    print("[ODYSSEY] Starting frontend on http://127.0.0.1:5173...")
    return subprocess.Popen(
        ["cmd.exe", "/c", "npm", "run", "dev"],
        cwd=frontend_dir,
        stdin=subprocess.PIPE,
    )

def main():
    root_dir = os.path.abspath(os.path.dirname(__file__))
    frontend_dir = os.path.join(root_dir, "frontend")

    backend = start_backend(root_dir)
    frontend = start_frontend(frontend_dir)

    print("[ODYSSEY] Supervisor active. Monitoring services...")
    try:
        while True:
            time.sleep(2)
            if backend.poll() is not None:
                print(f"[ODYSSEY] Backend exited ({backend.poll()}). Auto-restarting...")
                backend = start_backend(root_dir)
            if frontend.poll() is not None:
                print(f"[ODYSSEY] Frontend exited ({frontend.poll()}). Auto-restarting...")
                frontend = start_frontend(frontend_dir)
    except KeyboardInterrupt:
        print("[ODYSSEY] Shutting down supervisor...")
    finally:
        if backend and backend.poll() is None:
            backend.terminate()
        if frontend and frontend.poll() is None:
            frontend.terminate()

if __name__ == "__main__":
    main()
