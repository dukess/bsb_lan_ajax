externaldevelop = false; //true - develop on external web server (apache, handler.php required); false - production on arduino web server (default)
defaultLanguage = ''; // defaultLanguage = 'ru' - this var overrides automatic language detection (use ISO 639-1 codes).  defaultLanguage = ''- Enable autodetection (default).
JSONOptionsPerRequest = 10; //1 - 200. Less: more responsive (interactive), but slower. More: faster, but less responsive
warnAboutExitWithoutSave = 3; //Warnings before exit from category and discard changes
CacheCategoriesInRAM = true; //true - cache categories data in RAM (default). false - freeing RAM after exit from category
functionsListOnFrontPage = [8700, 8741, 8740, 8830, 9005, 8310, 8311, 8314, 8316]; //List of functions for displaying on front (home) page. Default - empty.
monitorUpdateInterval = 60000; //Update values of functions for displaying on front (home) page every ... ms. Default - 60000 ms.
quickManageFunctionsList = [700, 1600, 1601]; //Quick access to manage these functions.
displayWelcomeText = true; //Display short review about program functions on start page
