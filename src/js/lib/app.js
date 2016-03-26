// Global object of the Application ** Object ** app
var app = function(){
   
	// Empty object to stock our pages
	this.pages = {};

    // Current page null 
	this.currentPage = null;
    
    // Data of the application
    this.data = {};

	// Initialization
	this.init();
    
}

// Initialization
app.prototype.init = function(){
    
    // Initialization Home page
    this.pages.home = new home();
    
    // Initialization works pages
    this.pages.works.studentCheck = new work();
    
    // this.pages.works.gen = new work();
    
    // this.pages.works.slimyBoy = new work();
    
    // this.pages.works.eveningSuccess = new work();
    
    // this.pages.works.dailymasterpieces = new work();
    
    // // Initialization contact page
    // this.pages.contact = new contact();
    
}


$(function(){
    
    $.getJSON( this.url , function( data ) {
        
        myApp.data = data;
        
    });
    
});