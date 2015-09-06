#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")
target=/etc/init.d/S93pm2
pm2=$(realpath $currentDirectory/../node_modules/pm2/bin/pm2)

cp $currentDirectory/init.d-pm2 $target

sed -i -e "s/PM2=.*/PM2=$pm2/" $target

