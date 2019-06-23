#!/bin/sh

cd /application/client/
npm install

echo "[Operation] Client build finished. Starting Watch."
gulp watch