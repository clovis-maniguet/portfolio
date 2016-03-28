var Home = function(){
    
    this.id = 'home';
    
    this.dataPath = app.datas[this.id];
    
    this.template = {};
    
    this.init();
    
}

Home.prototype.init = function(){

     this.template = templates.home(this.dataPath);
    
}
