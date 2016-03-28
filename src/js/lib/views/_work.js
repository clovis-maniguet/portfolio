var Work = function(name){
    
    this.id = 'work';
    
    this.dataPath = app.datas[this.id][name];
    
    this.template = {};
    
    this.init();
    
}

Work.prototype.init = function(){
    
     this.template = templates.work(this.dataPath);
    
}