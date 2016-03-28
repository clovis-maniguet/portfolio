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