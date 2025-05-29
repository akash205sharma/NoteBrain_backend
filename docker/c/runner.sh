#!/bin/bash

timeout 300s ./runner
if [ $? -eq 124 ]; then
  echo "Execution Timed Out"
fi
