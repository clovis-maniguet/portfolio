// Global object of the Application ** Object ** app
var app = function(){
   
	// Empty object to stock our pages
	this.pages = {};

    // Current page null 
	this.currentPage = null;

	// Initialization
	this.init();
    
}

// Initialization
app.prototype.init = funtion(){
    
    // Initialization Home page
    this.pages.home = new home();
    
    // Initialization works pages
    // this.pages.works.studentCheck = new work();
    
    // this.pages.works.gen = new work();
    
    // this.pages.works.slimyBoy = new work();
    
    // this.pages.works.eveningSuccess = new work();
    
    // this.pages.works.dailymasterpieces = new work();
    
    // // Initialization contact page
    // this.pages.contact = new contact();
    
}

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

var home = function(){
    
    this.init();
    
}

home.prototype.init = function(){
    
}
