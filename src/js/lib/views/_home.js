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