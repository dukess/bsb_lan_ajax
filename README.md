# AJAX web interface for BSB_lan project

Goals:
- Save flash memory for future functions (more than 39kB for German language and more than 150 kB for multi-byte alphabets). You do not need Arduino Due now.
- Modern interface (Oh, yeah)
- More comfort expirience on mobile device.
- Easy for customization, expansion.

Fails:
- *First* run will be slower because SD card and network inteeface throughput is low (50~70kB/s for Mega and LAN 5100).

How to install/run.
- Patch BSB_lan.ino by patch.
- Copy langtoajax.pl to "localization" directory.
- Run langtoajax.pl. This script creating these files:

   LANG_C.h - language-independed text resources definitions.
   
   UNDEF_LANG_C.h
   
   lang_\*.js - JavaScript files with localizations.
   
- Edit BSB_lan_config.h:

   add or uncomment this string #define WEBSERVER
   
   change LANG from DE to C
   
- Build sketch and flash it to Arduino.
- Copy ajax.html, languages.js, ajax.css to SD card.
- Copy lang_*.js files to SD card.
- Insert SD card into Arduino and start it.
- Open http://yourbsblandeviceaddress/ajax.html in your browser.

   Note: you can rename ajax.html to index.html and just type http://yourbsblandeviceaddress/ to start interface.
   
