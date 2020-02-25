# AJAX web interface for <A HREF="https://github.com/fredlcore/bsb_lan/">BSB_lan</A> project

## Benefits:
- Saving flash memory for future features and functions (more than 39kB for German language and more than 150kB for multi-byte alphabets). You do not need Arduino Due now.
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
- <s>Patch BSB_lan.ino by patch.</s>
- <s>Copy langtoajax.pl to "localization" directory.</s>
- <s>Run langtoajax.pl. This script creating these files:</s>
1. <s>LANG_C.h - language-independed text resources definitions.</s>
2. <s>UNDEF_LANG_C.h</s>
3. <s>lang_\*.js - JavaScript files with localizations.</s>
4. <s>lang_\*.js.gz - gzipped JavaScript files with localizations (need gzip).</s>

All above was included in project, so you do not need do anything.

- Edit BSB_lan_config.h:
1. add or uncomment this string #define WEBSERVER
2. change LANG from DE to C
- Build sketch and flash it into Arduino.
- Copy ajax.html, settings.js to root of SD card.
- Copy languages.js to root of SD card.
- Copy from BSB-lan project localization\www\lang_\*.js and localization\www\lang_\*.js.gz files to root of SD card.
- Copy from BSB-lan project src/d3.v3.min.js to root of SD card.
- Insert SD card into Arduino and start it.
- Open http://yourbsblandeviceaddress/ajax.html in your browser. Note: you can rename ajax.html to index.html and just type http://yourbsblandeviceaddress/ to start interface.
   
## Features:
### Webserver:
- Allowed to content caching (Send Cache-Control, Last-Modified, Content-Length, ETag headers, HEAD request support)
- Allowed to send gzipped content (for throughput increasing more than 3 times)
- <s>Save ~8 kB when define USEEXTERNALINTERFACE (disable /D and /DG command because /D is equal /datalog.txt and /DG included into ajax.html)</s>. Temporary not available.
### Interface:
- Pure JavaScript (excl. D3 library for charts drawing).
- Language autodetection.
- Language switching on the fly.
- Asynchronous data loading/updating.
- Switching between categories without page reloading.
- D3 library can be placed on SD card for standalone installations (without connection to Internet).

At this point time interface looks highly similar original bsb_lan.

<img src="https://github.com/dukess/bsb_lan_ajax/blob/master/blobs/mainpage.png" size="50%">

<img src="https://github.com/dukess/bsb_lan_ajax/blob/master/blobs/settings.png" size="50%">

<img src="https://github.com/dukess/bsb_lan_ajax/blob/master/blobs/datalog.png" size="50%">

<img src="https://github.com/dukess/bsb_lan_ajax/blob/master/blobs/functions.png" size="50%">
