#!/bin/sh

timeout 300s node dist/runner.js
if [ $? -eq 124 ]; then
  echo "Execution Timed Out"
fi
