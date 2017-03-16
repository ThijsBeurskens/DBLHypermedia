$(function() {
   $('.hover').hover( function(ev){
       var target = $(ev.target);
       var img = target.attr('src');
       document.getElementById("imageid").src=img;
   },
   function(){
       document.getElementById("imageid").src="";
   });
});
