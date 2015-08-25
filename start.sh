#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")

node $currentDirectory/node_modules/.bin/npm start
