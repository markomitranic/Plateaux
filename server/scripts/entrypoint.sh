#!/bin/sh

set -e

echo "[Operation] Symlink vscode-server"
mkdir -p /app/.tmp/.vscode-server \
    && ln -s /app/.tmp/.vscode-server /root/.vscode-server || true

echo "[Operation] Server deployment finished."
npm install

echo "[Operation] Dependencies installation"
npm install || true

echo "[Success] Container Running"
exec "$@"
