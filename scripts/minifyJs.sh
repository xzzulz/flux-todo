#!/bin/bash

# minify js
# minifies creates a minified bundle.js file.
# Takes as input already transpiled ES6 files from the compJs folder.

# make the dir where the script is the current dir, then up one directory.
cd "$(dirname "$0")/.."


webpack app/js/compJs/Todo.js app/js/bundle.min.js --optimize-minimize
