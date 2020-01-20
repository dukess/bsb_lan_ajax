How to install/run.
1. Patch BSB_lan.ino by patch.
2. Copy langtoajax.pl to "localization" directory.
3. Run langtoajax.pl. This script creating these files:
   LANG_C.h - language-independed text resources definitions.
   UNDEF_LANG_C.h
   lang_*.js - JavaScript files with localizations.
4. Edit BSB_lan_config.h: 
   add or uncomment this string #define WEBSERVER
   replace language from DE to C
5. Build sketch and flash it to Arduino.
6. Copy ajax.html, languages.js, ajax.css to SD card.
7. Copy lang_*.js files to SD card.
8. Insert SD card into Arduino and start it.
9. Open http://yourbsblandeviceaddress/ajax.html in your browser.
   Note: you can rename ajax.html to index.html and just type http://yourbsblandeviceaddress/ to start interface.
   
