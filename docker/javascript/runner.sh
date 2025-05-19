#!/bin/sh

timeout 2s node runner.js
exit_code=$?

if [ $exit_code -eq 124 ]; then
  echo "Execution Timed Out"
  exit 124
elif [ $exit_code -ne 0 ]; then
  echo "Execution Failed"
  exit $exit_code
fi
