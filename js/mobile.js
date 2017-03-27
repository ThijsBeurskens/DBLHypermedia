$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    $(".hover").each(function(){
        if (viewportWidth < 600) {
            if($(this).hasClass("right")){
                $(this).removeClass("right").addClass("r");
            }
            $(this).css("height", 100px);
        } else {
            if($(this).hasClass("r")){
                $(this).addClass("right").removeClass("r");
            }
        }
    });
    $(".StudyBut").each(function(){
         if (viewportWidth < 600) {
            if($(this).hasClass("but-left-curve")){
                $(this).removeClass("but-left-curve").addClass("l");
            }
              if($(this).hasClass("but-right-curve")){
                $(this).removeClass("but-right-curve").addClass("r");
            }
        } else {
            if($(this).hasClass("l")){
                $(this).addClass("but-left-curve").removeClass("l");
            }
            if($(this).hasClass("r")){
                $(this).addClass("but-right-curve").removeClass("r");
            }
        }
    });
});
