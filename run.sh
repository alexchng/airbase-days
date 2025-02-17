#!/bin/bash

set -eu

port=${PORT:-8000}

python3 -m http.server $port
