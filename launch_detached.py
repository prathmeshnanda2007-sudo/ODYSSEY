import subprocess
import sys
import os

DETACHED_PROCESS = 0x00000008
CREATE_NEW_PROCESS_GROUP = 0x00000200
flags = DETACHED_PROCESS | CREATE_NEW_PROCESS_GROUP

root_dir = os.path.abspath(os.path.dirname(__file__))
frontend_dir = os.path.join(root_dir, "frontend")

# Launch backend
backend_log = open(os.path.join(root_dir, "backend_out.log"), "a")
backend_p = subprocess.Popen(
    [sys.executable, "-m", "uvicorn", "backend.main:app", "--host", "127.0.0.1", "--port", "8000"],
    cwd=root_dir,
    creationflags=flags,
    stdout=backend_log,
    stderr=backend_log,
    close_fds=True
)
print(f"Backend started detached PID={backend_p.pid}")

# Launch frontend
frontend_log = open(os.path.join(root_dir, "frontend_out.log"), "a")
frontend_p = subprocess.Popen(
    ["cmd.exe", "/c", "npm", "run", "dev"],
    cwd=frontend_dir,
    creationflags=flags,
    stdout=frontend_log,
    stderr=frontend_log,
    stdin=subprocess.PIPE,
    close_fds=False
)
print(f"Frontend started detached PID={frontend_p.pid}")
