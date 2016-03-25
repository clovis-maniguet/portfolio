$(function(){
    
    app = new App();

	crossroads.addRoute('/', function(){
		
		if ( app.currentPage != null ) app.currentPage.hide();

		app.pages.home.show();

		app.currentPage = app.pages.home;

	});

	crossroads.addRoute('/student-check', function(){

		if ( app.currentPage != null ) app.currentPage.hide();

		app.pages.theMovie.show();

		app.currentPage = app.pages.theMovie;

	});
    
});