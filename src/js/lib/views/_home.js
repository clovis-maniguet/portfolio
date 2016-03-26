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