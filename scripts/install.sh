#!/bin/bash

version=1.0.2

wget https://github.com/neolao/recalbox-api/releases/download/$version/recalbox-api-$version.tar.xz

mkdir api
xz -c -d recalbox-api-$version.tar.xz | tar -x -v -C api -f -

cd api
./scripts/clean-pm2.sh
./scripts/install-startup.sh
./start.sh

