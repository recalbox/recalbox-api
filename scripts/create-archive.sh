#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")

cd $currentDirectory/..

tar cvf api.tar \
    package.json \
    start.sh \
    stop.sh \
    monitoring.sh \
    logs.sh \
    list-services.sh \
    LICENSE \
    scripts/ \
    config/config.js \
    config/routes.js \
    config/parameters.json.dist \
    config/recalboxDefaultValues.json \
    bundle/ \
    node_modules/.bin \
    node_modules/npm \
    node_modules/solfegejs \
    node_modules/solfegejs-cli \
    node_modules/solfegejs-server \
    node_modules/solfegejs-server-router \
    node_modules/ini \
    node_modules/file-size \
    node_modules/js2xmlparser \
    node_modules/mv \
    node_modules/pm2

xz --compress --verbose --extreme api.tar
