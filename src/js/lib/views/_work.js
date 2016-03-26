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