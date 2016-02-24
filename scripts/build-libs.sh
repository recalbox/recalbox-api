#!/bin/bash

currentDirectory=$(dirname "$PWD/$0")
projectDirectory=$(dirname "$currentDirectory")
libDirectory=$projectDirectory/libs

platform=$(node -e 'console.log(require("os").platform())')
arch=$(node -e 'console.log(require("os").arch())')

for sourcePath in $libDirectory/*.cpp
do

    fileName=$(basename $sourcePath)
    fileBaseName="${fileName%.*}"
    targetPath=$libDirectory/$fileBaseName-$platform-$arch

    echo "Build $targetPath ..."

    c++ $sourcePath \
        -lSDL2 \
        -o $targetPath
done
