#!/bin/sh

cd /application/server/
npm install

echo "[Operation] Server deployment finished."
node plateaux.js