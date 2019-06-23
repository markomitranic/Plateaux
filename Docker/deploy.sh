#!/bin/sh

set -e

docker-compose down
docker-compose build
docker-compose up -d