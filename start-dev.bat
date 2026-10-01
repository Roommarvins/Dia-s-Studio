@echo off
cd /d "%~dp0"
echo Starting Dia's Nail Studio dev server...
echo.
if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 exit /b 1
)
call npm run dev
pause
