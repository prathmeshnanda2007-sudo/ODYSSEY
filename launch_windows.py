import subprocess
import sys
import os

CREATE_NEW_CONSOLE = 0x00000010

root_dir = os.path.abspath(os.path.dirname(__file__))
frontend_dir = os.path.join(root_dir, "frontend")

backend_p = subprocess.Popen(
    [sys.executable, "-m", "uvicorn", "backend.main:app", "--host", "127.0.0.1", "--port", "8000"],
    cwd=root_dir,
    creationflags=CREATE_NEW_CONSOLE,
)
print(f"Backend started in new console PID={backend_p.pid}")

frontend_p = subprocess.Popen(
    ["cmd.exe", "/k", "npm", "run", "dev"],
    cwd=frontend_dir,
    creationflags=CREATE_NEW_CONSOLE,
)
print(f"Frontend started in new console PID={frontend_p.pid}")
