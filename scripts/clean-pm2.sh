#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")
pm2=$(realpath $currentDirectory/../node_modules/pm2/bin/pm2)

$pm2 delete api
