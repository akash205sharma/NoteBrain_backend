#!/bin/bash

timeout 2s python3 runner.py
if [ $? -eq 124 ]; then
  echo "Execution Timed Out"
fi
