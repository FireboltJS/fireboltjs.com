@echo off

php --version >nul 2>&1 && (
  START "Local PHP Server" /MIN php -S localhost:8000
  START http://localhost:8000
) || python --version >nul 2>&1 && (
  START "Local Python Server" /MIN python -m SimpleHTTPServer
  START http://localhost:8000
) || (
  echo Could not find a program for starting a local HTTP server!
  echo Please install either PHP or Python and make sure the binary is in your PATH.
  pause
)
