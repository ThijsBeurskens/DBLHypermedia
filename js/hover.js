$(function() {
   $('.hover').hover( function(){
       var target = $(this);
       var id = target.attr('target');
       var img = target.attr('src');
       var viewportWidth = $(window).width();
       if (viewportWidth > 767){
           document.getElementById(id).src=img;
       } else {
           document.getElementById(id).src="Images/none.png";
       }
   },
   function(){
       var target = $(this);
       var id = target.attr('target');
       document.getElementById(id).src="Images/none.png";
   });
});
