$(function() {
   $('.hover').hover( function(){
       var target = $(this);
       var id = target.attr('target');
       var img = target.attr('src');
       document.getElementById(id).src=img;
   },
   function(){
       var target = $(this);
       var id = target.attr('target');
       document.getElementById(id).src="";
   });
});
