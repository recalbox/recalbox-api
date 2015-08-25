#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")

cd $currentDirectory/..

zip -r api.zip \
    package.json \
    start.sh \
    stop.sh \
    LICENSE \
    scripts/ \
    config/ \
    bundle/ \
    node_modules/.bin \
    node_modules/npm \
    node_modules/solfegejs \
    node_modules/solfegejs-server \
    node_modules/solfegejs-cli \
    node_modules/pm2
