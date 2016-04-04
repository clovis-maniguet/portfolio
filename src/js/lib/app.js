// Global object of the Application ** Object ** app
var App = function(){
    
    this.window = $(window);
   
	// Empty object to stock our pages
	this.pages = {};

    // Current page null 
	this.currentPage = null;
    
    this.mainContainer = $('body');
    
    // Datas path
    this.datasPath = '../../assets/data.json';

	// Initialization
	this.init();
    
}

// Initialization
App.prototype.init = function(){
    
    // Load datas
	this.loadDatas();
    
}

// Load datas
App.prototype.loadDatas = function(){
    
    // Save context
	var self = this;

	// Get datas
	$.getJSON( this.datasPath, function(response){

		// Save datas
		self.datas = response;

		// Once datas are loaded
		self.onDatasLoaded();

	});
    
}

// Once datas are loaded
App.prototype.onDatasLoaded = function() {

	// Create router
	this.router = new Router();

	// Create viewController
	this.viewController = new ViewController();
    
    this.resizer();
    
};

App.prototype.resizer = function(){
    
    console.log(this.window.width());
    
    if( this.window.width() >= 992 ){
        
        // Add Animation
        this.animation = new Animation();
        
    }
    
    
    
    
}