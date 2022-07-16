@echo off
chcp 65001 2>nul >nul

echo. beware, this will clean current profile..
pause
pause
pause
pause
::----------------------------------------

::first - kill firefox.exe
call "%windir%\System32\taskkill.exe" /F /T /IM "firefox.exe" 1>nul 2>nul

if ["%ErrorLevel%"] NEQ ["0"] ( 
  if ["%ErrorLevel%"] NEQ ["128"] ( 
    goto ERROR_STILL_RUNNING
  ) 
) 

::----------------------------------------

::this directory (8.3 name).
set "HOME=%~sdp0"
::remove '\' suffix.  
set "HOME=%HOME%##"
set "HOME=%HOME:\##=%"
set "HOME=%HOME:##=%"

set "PROFILE=%HOME%\profile"

del   /s /q /s "%PROFILE%\*"    1>nul 2>nul
rmdir /s /q    "%PROFILE%\*"    1>nul 2>nul
rmdir /s /q    "%PROFILE%\"     1>nul 2>nul
rmdir /s /q    "%PROFILE%"      1>nul 2>nul
mkdir "%PROFILE%\"              1>nul 2>nul

::sometimes rmdir/del I/O are slow and the mkdir won't work. so if there isn't a folder yet, try recreate it again...
if not exist %PROFILE%\NUL  ( 
  mkdir "%PROFILE%\"              1>nul 2>nul
) 


echo. >"%PROFILE%\.placeholder"

goto END


:ERROR_STILL_RUNNING
  echo firefox.exe is still running... 1>&2
  pause
  goto END

:END
  exit /b %ErrorLevel%
