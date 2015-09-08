#!/bin/bash

# compiles js
# es6 files on js/src are compiled into js/compJs
# then bundled into js/bundle.js with browserify

# make the dir where the script is the current dir, then up one directory.
cd "$(dirname "$0")/.."

babel --watch app/js/src --out-dir app/js/compJs &
watchify app/js/compJs/Todo.js -o app/js/bundle.js
