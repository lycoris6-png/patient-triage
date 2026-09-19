@echo off
cd /d "%~dp0"
start "" "http://127.0.0.1:4179/coach-editor.html"
node coach-workshop-server.cjs
pause
