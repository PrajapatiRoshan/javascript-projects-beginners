@echo off
setlocal enabledelayedexpansion

REM Loop through all folders in the current directory
for /f "tokens=*" %%i in ('dir /b /ad') do (
    set "foldername=%%i"
    set "newfoldername=!foldername: =!"
    
    REM Rename the folder if the name has changed
    if not "!foldername!"=="!newfoldername!" ren "%%i" "!newfoldername!"
)

echo All folder names have been processed.
pause
