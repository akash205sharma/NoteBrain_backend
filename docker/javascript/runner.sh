#!/bin/sh

timeout 2s node runner.js
if [ $? -eq 124 ]; then
  echo "Execution Timed Out"
fi
