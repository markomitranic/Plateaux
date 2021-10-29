#!/bin/sh

set -e

echo "[Operation] Symlink vscode-server"
mkdir -p /app/.tmp/.vscode-server \
    && ln -s /app/.tmp/.vscode-server /root/.vscode-server || true

echo "[Operation] Dependencies installation"
npm install || true
gulp build || true

echo "[Success] Container Running"
node /app/src/server.js