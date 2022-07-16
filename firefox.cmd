@echo off
chcp 65001 2>nul >nul

::this directory (8.3 name).
set "HOME=%~sdp0"
::remove '\' suffix.  
set "HOME=%HOME%##"
set "HOME=%HOME:\##=%"
set "HOME=%HOME:##=%"

set "PROFILE=%HOME%\profile"
set "RESOURCES=%HOME%\resources"

set "FIREFOX=%HOME%\firefox\firefox.exe"
set "LIBREWOLF=%HOME%\firefox\librewolf.exe"

if exist %LIBREWOLF% ( goto CONTINUE_WITH_LIBREWOLF  ) 
if exist %FIREFOX%   ( goto CONTINUE_WITH_FIREFOX    ) 

echo [ERROR] no firefox.exe found, no librewolf.exe found. 
pause
goto END


:CONTINUE_WITH_LIBREWOLF
set "FIREFOX=%LIBREWOLF%"

:CONTINUE_WITH_FIREFOX


::empty folder for profile.
if not exist %PROFILE% ( 
  mkdir "%PROFILE%\"               1>nul 2>nul
  echo. >"%PROFILE%\.placeholder"
) 



::creating target for (empty) custom CSS files.
mkdir "%PROFILE%\chrome"
echo. > "%PROFILE%\chrome\userChrome.css"
echo. > "%PROFILE%\chrome\userContent.css"

::custom CSS - icons. only works in English Firefox.
::type "%HOME%\_userChrome_for_icons.css_"    >> "%PROFILE%\chrome\userChrome.css"
::type "%HOME%\_userContent_for_icons.css_"   >> "%PROFILE%\chrome\userContent.css"
::mkdir "%PROFILE%\chrome\icons"
::copy /b /y "%HOME%\_icons_\*.svg"                "%PROFILE%\chrome\icons\."


::custom CSS - cleaning items from context menu. (works in all Languages)
type "%HOME%\_userChrome_for_cleanup.css_"    >> "%PROFILE%\chrome\userChrome.css"




::::copy dictionaries, language packs, extensions (needed to be manually enabled).
::mkdir "%PROFILE%\extensions"
::if not exist "%PROFILE%\extensions\english_united_states_dictionary-91.0.xpi" ( 
::  copy /b /y "%HOME%\_extensions_\english_united_states_dictionary-91.0.xpi" "%PROFILE%\extensions\."
::) 
::if not exist "%PROFILE%\extensions\he@dictionaries.addons.mozilla.org.xpi" ( 
::  copy /b /y "%HOME%\_extensions_\he@dictionaries.addons.mozilla.org.xpi" "%PROFILE%\extensions\."
::) 
::if not exist "%PROFILE%\extensions\hebrew_il_language_pack-101.0buildid20220505.190214-fx.xpi" ( 
::  copy /b /y "%HOME%\_extensions_\hebrew_il_language_pack-101.0buildid20220505.190214-fx.xpi" "%PROFILE%\extensions\."
::) 
::if not exist "%PROFILE%\extensions\sponsorBlocker@ajay.app.xpi" ( 
::  copy /b /y "%HOME%\_extensions_\sponsorBlocker@ajay.app.xpi" "%PROFILE%\extensions\."
::) 
::if not exist "%PROFILE%\extensions\uBlock0@raymondhill.net.xpi" ( 
::  copy /b /y "%HOME%\_extensions_\uBlock0@raymondhill.net.xpi" "%PROFILE%\extensions\."
::) 



::block analytics/update services
ren "%HOME%\firefox\crashreporter.exe"                "_crashreporter.exe_"                             1>nul 2>nul
ren "%HOME%\firefox\maintenanceservice.exe"           "_maintenanceservice.exe_"                        1>nul 2>nul
ren "%HOME%\firefox\maintenanceservice_installer.exe" "_maintenanceservice_installer.exe_"              1>nul 2>nul
ren "%HOME%\firefox\minidump-analyzer.exe"            "_minidump-analyzer.exe_"                         1>nul 2>nul
ren "%HOME%\firefox\pingsender.exe"                   "_pingsender.exe_"                                1>nul 2>nul
ren "%HOME%\firefox\updater.exe"                      "_updater.exe_"                                   1>nul 2>nul
::block experiments
ren "%HOME%\firefox\browser\features"                 "_features_"                                      1>nul 2>nul
::no need for uninstaller....
ren "%HOME%\firefox\uninstall"                        "_uninstall_"                                     1>nul 2>nul
::copy defaults (channel-prefs.js contain instruction on where to find mozilla.cfg --- in the programs-folder. mozilla.cfg contains all the "stuff" - preferences needed, instead of 'user_pref', they are 'pref' which is stronger).
copy /b /y "%HOME%\_channel-prefs.js_"                "%HOME%\firefox\defaults\pref\channel-prefs.js"   1>nul 2>nul
copy /b /y "%HOME%\_mozilla.cfg_"                     "%HOME%\firefox\mozilla.cfg"                      1>nul 2>nul
copy /b /y "%HOME%\_mozilla.cfg_"                     "%HOME%\firefox\librewolf.cfg"                    1>nul 2>nul


::additional forcing of some configurations using (newer) 'policies.json' placed under the installation folder, under a folder named 'distribution'.
mkdir "%HOME%\firefox\distribution"                                                                     1>nul 2>nul
copy /b /y "%HOME%\_policies.json_"                   "%HOME%\firefox\distribution\policies.json"       1>nul 2>nul


::clear cache
del   /s /q /s "%PROFILE%\cache2\*"                 1>nul 2>nul
rmdir /s /q    "%PROFILE%\cache2\*"                 1>nul 2>nul
del   /s /q /s "%PROFILE%\jumpListCache\*"          1>nul 2>nul
rmdir /s /q    "%PROFILE%\jumpListCache\*"          1>nul 2>nul
del   /s /q /s "%PROFILE%\shader-cache\*"           1>nul 2>nul
rmdir /s /q    "%PROFILE%\shader-cache\*"           1>nul 2>nul
del   /s /q /s "%PROFILE%\startupCache\*"           1>nul 2>nul
rmdir /s /q    "%PROFILE%\startupCache\*"           1>nul 2>nul

::clear telemetric/dumps/crashes/session info (Firefox will recreate the content anyway even it told not to..).
del   /s /q /s "%PROFILE%\crashes\*"                1>nul 2>nul
rmdir /s /q    "%PROFILE%\crashes\*"                1>nul 2>nul
del   /s /q /s "%PROFILE%\datareporting\*"          1>nul 2>nul
rmdir /s /q    "%PROFILE%\datareporting\*"          1>nul 2>nul
del   /s /q /s "%PROFILE%\minidumps\*"              1>nul 2>nul
rmdir /s /q    "%PROFILE%\minidumps\*"              1>nul 2>nul
del   /s /q /s "%PROFILE%\saved-telemetry-pings\*"  1>nul 2>nul
rmdir /s /q    "%PROFILE%\saved-telemetry-pings\*"  1>nul 2>nul
del   /s /q /s "%PROFILE%\sessionstore-backups\*"   1>nul 2>nul
rmdir /s /q    "%PROFILE%\sessionstore-backups\*"   1>nul 2>nul


::copy MANIFEST file from resources-folder. System must have a registry-patch to allow external-manifest to override the embedded-manifest resource inside 'firefox.exe'-itself.
::::::copy /b /y "%RESOURCES%\firefox.exe.manifest"    "%HOME%\firefox\firefox.exe.manifest"        1>nul 2>nul


:::::---------------disabled since it can override the "hard" blocking of 'mozilla.cfg' which is prefered.
:::::   ::copy defaults (a weaker option using 'user.js' in the profile folder - should be '~about same content as~' _mozilla.cfg).
:::::   copy /b /y "%HOME%\user.js"                           "%HOME%\profile\user.js"                          1>nul 2>nul

start /MAX /ABOVENORMAL "cmd /c "call %FIREFOX% -profile %PROFILE% -foreground -nosplash -purgecaches""

goto END


:END
  exit /b %ErrorLevel%
