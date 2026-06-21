#!/usr/bin/env bash
# Local dev server for the prep app
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${1:-8080}"
echo "Serving app/ at http://localhost:${PORT}"
cd "$ROOT/app"
exec python3 -m http.server "$PORT"
