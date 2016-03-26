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


// Route : /student-check
// Page  : studentCheck
crossroads.addRoute('/student-check', function(){

    // Check if a page is loaded
    if ( app.currentPage != null ) app.currentPage.hide();

    // We show the studentCheck page
    app.pages.works.studentCheck.show();

    // Save the page as currentPage
    app.currentPage = app.pages.works.studentCheck;

});

var home = function(){
    
    this.id = 'home';
    
    this.domElmt = $('#' + this.id);
    
    this.template = {};
    
    this.init();
    
}

home.prototype.init = function(){
    
    console.log(myApp);
    
    if(myApp.data != undefined){
        this.template = templates.home(myApp.data.home);
        
     $('body').html(this.template);
    }else{
         $.getJSON( this.url , function( data ) {
        
        myApp.data = data;
        
        his.template = templates.home(myApp.data.home);
        
     $('body').html(this.template);
        
    });
    }
   
    
}

home.prototype.hide = function(){
    
    TweenMax.to(this.domElmt, 2, {display: none});
    
}

home.prototype.show = function(){
    
    TweenMax.to(this.domElmt, 2, {display: show});
    
}
var work = function(id){
    
    this.id = id;
    
    this.domElmt = $('#' + this.id);
    
    this.template = {};
    
    this.init();
    
}

work.prototype.init = function(){
    
     this.template = templates.work(myApp.data.works.this.id);
        
     $('body').html(this.template);
    
}

work.prototype.hide = function(){
    
    TweenMax.to(this.domElmt, 2, {display: none});
    
}

work.prototype.show = function(){
    
    TweenMax.to(this.domElmt, 2, {display: show});
    
}

var myApp = new app();