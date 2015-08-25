#!/bin/sh

zip -r api.zip \
    package.json \
    process.json \
    start.sh \
    stop.sh \
    LICENSE \
    bundle/ \
    node_modules/npm \
    node_modules/solfegejs \
    node_modules/solfegejs-server \
    node_modules/solfegejs-cli \
    node_modules/pm2
