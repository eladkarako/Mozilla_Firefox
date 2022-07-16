@echo off
chcp 65001 2>nul >nul

call "%~sdp0resources\sort_pref\index.cmd" %*

pause