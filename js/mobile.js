$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    $(".hover").each(function(){
        if (viewportWidth < 600) {
            if($(this).hasClass("right")){
                $(this).removeClass("right").addClass("r");
            }
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

    var largeScreen = "col-md-4";
    var mediumScreen = "col-sm-4";
    var smallScreen = "col-xs-4";

    $(".st").each(function(){
         if (viewportWidth < 992 && viewportWidth >= 767) {
            if($(this).hasClass(largeScreen)){
                $(this).removeClass(largeScreen).addClass(mediumScreen);
            }
             if($(this).hasClass(smallScreen)){
                $(this).removeClass(smallScreen).addClass(mediumScreen);
            }
        } else if(viewportWidth < 767){
            if($(this).hasClass(largeScreen)){
                $(this).removeClass(largeScreen).addClass(smallScreen);
            } else if($(this).hasClass(mediumScreen)){
                 $(this).removeClass(mediumScreen).addClass(smallScreen);
            }
        } else {
            if($(this).hasClass(smallScreen)){
                $(this).addClass(largeScreen).removeClass(mediumScreen);
            }
            if($(this).hasClass(smallScreen)){
                $(this).addClass(largeScreen).removeClass(mediumScreen);
            }
        }
    });
});
