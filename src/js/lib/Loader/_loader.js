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