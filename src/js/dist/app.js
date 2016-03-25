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
app.prototype.init = function(){
    
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
var loader = function(){
    
    this.data = {};
    
    this.url = '../../assets/data.json';
    
    this.init();
    
}

loader.prototype.init = function(){
    
    this.load();
    
}

loader.prototype.load = function(){
    
    var self = this;
    
    $.getJSON( this.url , function( data ) {
        
        self.data = data;
        
        
        
    });
    
}
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

var home = function(){
    
    this.id = 'home';
    
    this.data = {};
    
    this.template = {};
    
    this.url = '../../assets/data.json';
    
    this.init();
    
}

home.prototype.init = function(){
    
     $.getJSON( this.url , function( data ) {
        
        self.data = data;
        
        self.template = templates.home(self.data.home);
        
        $('body').html(self.template);
        
        console.log(self.data);
        
    });
    
}

// var loader = new loader();
var app = new app();
