// Global object of the Application ** Object ** app
var App = function(){
    
    // DOM
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
    
    // Animation
    this.animation = new Animation();
    
};
var Animation = function(){
          
    $(document).ready(function() {
        $('#main').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['home', 'nextToSchool', 'gen', 'slimyBoy', 'eveningSuccess', 'dailyMasterpiece', 'contact'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Home', 'NextToSchool', 'GEN', 'SlimyBoy', 'EveningSuccess', 'DailyMasterpiece', 'Contact'],
            showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            scrollOverflow: false,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: false,
            verticalCentered: false,
            resize : false,
            sectionsColor : ['#1b1f28'],
            paddingTop: '0',
            paddingBottom: '0',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,

            //Custom selectors
            sectionSelector: '.view',
            slideSelector: '.slide',

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });
});
   
};
    
    

var ViewController = function(){
    
    this.views = {};
    
    this.init();
    
}

ViewController.prototype.init = function(){
    
    this.views = {
        
        'home': new Home(),
        'nextToSchool': new Work('nextToSchool'),
        'gen': new Work('gen'),
        'slimyBoy': new Work('slimyBoy'),
        'eveningSuccess': new Work('eveningSuccess'),
        'dailyMasterpiece': new Work('dailyMasterpiece'),
        'contact': new Contact()
        
    }
    
    this.pushViews();
    
}

ViewController.prototype.pushViews = function(){
   
    for(var view in this.views) { 
        
        $('#main').append(this.views[view].template);
       
    }
    
}
var Contact = function(){
    
    this.id = 'contact';
    
    this.dataPath = app.datas[this.id];
    
    this.template = {};
    
    this.init();
    
}

Contact.prototype.init = function(){

     this.template = templates.contact(this.dataPath);
    
}

var Home = function(){
    
    this.id = 'home';
    
    this.dataPath = app.datas[this.id];
    
    this.template = {};
    
    this.init();
    
}

Home.prototype.init = function(){

     this.template = templates.home(this.dataPath);
    
}

var Work = function(name){
    
    this.id = 'work';
    
    this.dataPath = app.datas[this.id][name];
    
    this.template = {};
    
    this.init();
    
}

Work.prototype.init = function(){
    
     this.template = templates.work(this.dataPath);
    
}
var Router = function(){

	// Create navigate event
	this._onNavigate = new signals.Signal();

	// Create routes
	this.createRoutes();

};

// Init router
Router.prototype.init = function() {

	var self = this;

	// Bind HistoryJS state change
	History.Adapter.bind(window, "statechange", function(e){

		self.onStateChange(e);

	});

	// Parse first token
	this.onStateChange();

};

// On state change
Router.prototype.onStateChange = function(e) {
	
	// Get token
	var token = this.getToken();

	// Parse token - test if it matches a route
	crossroads.parse( token );

};

// Create routes
Router.prototype.createRoutes = function() {

	var self = this;

	// Homepage
	crossroads.addRoute( '/', function(){
        
        

		// Dispatch navigate event
		self._onNavigate.dispatch({
			view: 'home'
		});

		console.log( '## Navigate view home' );

	});

	// Experience
	crossroads.addRoute( '/student-check' , function(){

		self._onNavigate.dispatch({
			view: 'work'
		});

		console.log( '## Navigate view experience' );

	});

};

// Navigate
Router.prototype.navigate = function( href ) {
	
	History.pushState(null, null, href);

};

// Get token from History hash
Router.prototype.getToken = function() {
	
	var token = History.getState().hash;

	if ( token.indexOf('?') != -1 ){

		var tokenSplit = token.split('?');
		return tokenSplit[0];

	} else {

		return token;

	}

};