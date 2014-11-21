#!/bin/sh

if (command -v php >/dev/null 2>&1); then
  php -S localhost:8000 &
  PID=$!
  echo PHP server running with PID: $PID
  x-www-browser http://localhost:8000
  kill $PID
elif (command -v python >/dev/null 2>&1); then
  python -m SimpleHTTPServer 8000 &
  PID=$!
  echo Python server running with PID: $PID
  x-www-browser http://localhost:8000
  kill $PID
else
  echo Could not find a program for starting a local HTTP server!
  echo Please install either PHP or Python and make sure the binary is in your PATH.
fi
