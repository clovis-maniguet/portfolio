var Contact = function(){
    
    this.id = 'contact';
    
    this.dataPath = app.datas[this.id];
    
    this.template = {};
    
    this.init();
    
}

Contact.prototype.init = function(){

     this.template = templates.contact(this.dataPath);
    
}
