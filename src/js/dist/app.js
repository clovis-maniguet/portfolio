$(function(){
   
   var context = {title: "My New Post", body: "This is my first post!"};
   var html    = templates.home(context);
    
    $('body').append(html);
    
})