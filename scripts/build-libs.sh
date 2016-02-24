#!/bin/bash

currentDirectory=$(dirname "$PWD/$0")
projectDirectory=$(dirname "$currentDirectory")
libDirectory=$projectDirectory/libs

for sourcePath in $libDirectory/*.cpp
do
    echo "Build $sourcePath ..."

    fileName=$(basename $sourcePath)
    fileBaseName="${fileName%.*}"

    c++ $sourcePath \
        -lSDL2 \
        -o $libDirectory/$fileBaseName
done
