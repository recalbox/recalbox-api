#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")

cd $currentDirectory
$currentDirectory/node_modules/.bin/pm2 stop ./scripts/pm2-process-production.json
