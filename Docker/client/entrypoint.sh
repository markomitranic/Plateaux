#!/bin/sh

cd /application/client/
npm install
gulp build

echo "[Operation] Client build finished. Leaving container open."
tail -f /dev/null