import subprocess
import sys
import time
import os
import signal

# Redirect stdout/stderr to a dedicated log file
log_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), "dev_server.log")
log_file = open(log_path, "a", encoding="utf-8", buffering=1)
sys.stdout = log_file
sys.stderr = log_file

def start_backend(root_dir):
    print(f"[{time.strftime('%X')}] [ODYSSEY] Starting backend on http://127.0.0.1:8000...")
    python_exe = os.path.join(os.path.dirname(sys.executable), "python.exe")
    if not os.path.exists(python_exe):
        python_exe = sys.executable
    return subprocess.Popen(
        [
            python_exe,
            "-m",
            "uvicorn",
            "backend.main:app",
            "--host",
            "127.0.0.1",
            "--port",
            "8000",
        ],
        cwd=root_dir,
        stdout=log_file,
        stderr=log_file,
    )

def start_frontend(frontend_dir):
    print(f"[{time.strftime('%X')}] [ODYSSEY] Starting frontend on http://127.0.0.1:5173...")
    return subprocess.Popen(
        ["cmd.exe", "/c", "npm", "run", "dev"],
        cwd=frontend_dir,
        stdout=log_file,
        stderr=log_file,
    )

def main():
    try:
        signal.signal(signal.SIGINT, signal.SIG_IGN)
    except Exception:
        pass

    root_dir = os.path.abspath(os.path.dirname(__file__))
    frontend_dir = os.path.join(root_dir, "frontend")

    backend = start_backend(root_dir)
    frontend = start_frontend(frontend_dir)

    print(f"[{time.strftime('%X')}] [ODYSSEY] Supervisor active. Monitoring services...")
    while True:
        try:
            time.sleep(2)
            if backend.poll() is not None:
                print(f"[{time.strftime('%X')}] [ODYSSEY] Backend exited ({backend.poll()}). Auto-restarting...")
                backend = start_backend(root_dir)
            if frontend.poll() is not None:
                print(f"[{time.strftime('%X')}] [ODYSSEY] Frontend exited ({frontend.poll()}). Auto-restarting...")
                frontend = start_frontend(frontend_dir)
        except Exception as e:
            print(f"[{time.strftime('%X')}] [ODYSSEY] Supervisor exception: {e}")
            time.sleep(1)

if __name__ == "__main__":
    main()
