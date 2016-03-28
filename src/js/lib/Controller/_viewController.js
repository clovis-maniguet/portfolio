var ViewController = function(){
    
    this.views = {};
    
    this.init();
    
}

ViewController.prototype.init = function(){
    
    this.views = {
        
        'home': new Home(),
        'studentCheck': new Work('studentCheck')
        
    }
    
    this.pushViews();
    
}

ViewController.prototype.pushViews = function(){
   
    for(var view in this.views) { 
        
        $('#main').append(this.views[view].template);
       
    }
    
}