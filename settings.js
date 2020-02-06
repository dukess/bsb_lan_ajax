externaldevelop = true; //true - develop on external web server (apache); false - production on arduino web server
defaultLanguage = 'ru'; // This var overrides automatic language detection
    defaultLanguage = ''; // Enable autodetection
JSONOptionsPerRequest = 10; //1 - 200. Less: more responsive (interactive), but slower. More: faster, but less responsive
warnAboutExitWithoutSave = 3; //Warnings before exit from category and discard changes
onCacheCategoriesInRAM = true; //Freeing RAM after exit from category
functionsListOnFrontPage = [8700, 8741, 8740, 8830, 9005, 8310, 8311, 8314, 8316]; //List of functions for displaying on front (home) page
monitorUpdateInterval = 60000; //Update values of functions for displaying on front (home) page every ... ms.
