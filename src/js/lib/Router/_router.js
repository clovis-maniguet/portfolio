// Routing file

// Route : /
// Page  : home
crossroads.addRoute('/', function(){
    
    // Check if a page is loaded
    if ( app.currentPage != null ) app.currentPage.hide();

    // We show the home page
    app.pages.home.show();

    // Save the page as currentPage
    app.currentPage = app.pages.home;

});


// // Route : /student-check
// // Page  : studentCheck
// crossroads.addRoute('/student-check', function(){

//     // Check if a page is loaded
//     if ( app.currentPage != null ) app.currentPage.hide();

//     // We show the studentCheck page
//     app.pages.works.studentCheck.show();

//     // Save the page as currentPage
//     app.currentPage = app.pages.works.studentCheck;

// });