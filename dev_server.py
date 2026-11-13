import subprocess
import sys
import time
import os
import signal

def main():
    root_dir = os.path.abspath(os.path.dirname(__file__))
    frontend_dir = os.path.join(root_dir, "frontend")

    print("[ODYSSEY DEV] Starting backend on http://127.0.0.1:8000...")
    backend = subprocess.Popen(
        [sys.executable, "-m", "uvicorn", "backend.main:app", "--host", "127.0.0.1", "--port", "8000", "--reload"],
        cwd=root_dir
    )

    print("[ODYSSEY DEV] Starting frontend on http://127.0.0.1:5173...")
    frontend = subprocess.Popen(
        ["cmd.exe", "/c", "npm", "run", "dev"],
        cwd=frontend_dir,
        stdin=subprocess.PIPE
    )

    try:
        while True:
            time.sleep(1)
            b_code = backend.poll()
            f_code = frontend.poll()
            if b_code is not None:
                print(f"[ODYSSEY DEV] Backend exited with code {b_code}")
                break
            if f_code is not None:
                print(f"[ODYSSEY DEV] Frontend exited with code {f_code}")
                break
    except KeyboardInterrupt:
        print("[ODYSSEY DEV] Shutting down...")
    finally:
        if backend.poll() is None:
            backend.terminate()
        if frontend.poll() is None:
            frontend.terminate()

if __name__ == "__main__":
    main()
