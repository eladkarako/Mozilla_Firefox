@echo off
chcp 65001 2>nul >nul

::this directory (8.3 name).
set "HOME=%~sdp0"
::remove '\' suffix.  
set "HOME=%HOME%##"
set "HOME=%HOME:\##=%"
set "HOME=%HOME:##=%"

set "FIREFOX=%HOME%\firefox\firefox.exe"

start /MAX /ABOVENORMAL "cmd /c "call %FIREFOX% -profilemanager ""

goto END


:END
  exit /b %ErrorLevel%
