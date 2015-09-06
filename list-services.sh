#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")

cd $currentDirectory
node $currentDirectory/node_modules/.bin/npm run services
