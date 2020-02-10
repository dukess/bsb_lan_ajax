# AJAX web interface for <A HREF="https://github.com/fredlcore/bsb_lan/">BSB_lan</A> project

## Benefits:
- Saving flash memory for future features and functions (more than 39kB for German language and more than 150 kB for multi-byte alphabets). You do not need Arduino Due now.
- Modern interface (Oh, yeah)
- More comfort expirience on mobile device.
- Easy for customization and expansion.

## Disadvantages:
- *First* run will be slower because SD card and network interface throughput is low (50~70kB/s for Mega and LAN 5100).
- Need more RAM (~20MB per interface instance). But category caching can be disabled.

## Requirements
- Hardware: same as for BSB_lan project. SD card needed.
- Software: modern browser with JavaScript, CSS2(3?) support

## How to install/run.
- Patch BSB_lan.ino by patch.
- Copy langtoajax.pl to "localization" directory.
- Run langtoajax.pl. This script creating these files:
1. LANG_C.h - language-independed text resources definitions.
2. UNDEF_LANG_C.h
3. lang_\*.js - JavaScript files with localizations.
4. lang_\*.js.gz - gzipped JavaScript files with localizations (need gzip).
- Edit BSB_lan_config.h:
1. add or uncomment this string #define WEBSERVER
2. change LANG from DE to C
- Build sketch and flash it into Arduino.
- Copy ajax.html, languages.js, settings.js to SD card.
- Copy lang_\*.js and lang_\*.js.gz files to SD card.
- Insert SD card into Arduino and start it.
- Open http://yourbsblandeviceaddress/ajax.html in your browser. Note: you can rename ajax.html to index.html and just type http://yourbsblandeviceaddress/ to start interface.
   
## Features:
### Webserver:
- Allowed to content caching (Send Cache-Control, Last-Modified, Content-Length headers, HEAD request support)
- Allowed to send gzipped content (for throughput increasing more than 3 times)
- Save ~8 kB when define USEEXTERNALINTERFACE (disable /D and /DG command because /D is equal /datalog.txt and /DG included into ajax.html)
### Interface:
- Pure JavaScript (excl. D3 library for charts drawing).
- Language autodetection.
- Language switching on the fly.
- Asynchronous data loading/updating.
- Switching between categories without page reloading.
- D3 library can be placed on SD card for standalone installations (without connection to Internet).
