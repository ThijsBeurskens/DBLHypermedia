$(document).on('ready, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var page1 = $(".page1");
    var page2 = $(".page2");
    var page3 = $(".page3");
    var page4 = $(".page4");
    var footer = $(".footer");

    $(".hover").each(function(){
        if (viewportWidth < 767) {
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
    var smallScreen = "col-xs-9";

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

    var smallSize = "35px";
    var largeSize = "45px";
    var threeLineSize = "75px";

    $(".bachelorbuts").each(function(){
        if(viewportWidth < 767){
            $(this).css("height", smallSize);
            if(viewportHeight < 1100 && viewportHeight >= 890){
                page2.css("height", "120%");
                page3.css("top", "220%");
            } else if(viewportHeight < 890 && viewportHeight >= 785){
                page2.css("height", "140%");
                page3.css("top", "240%");
            } else if(viewportHeight < 785 && viewportHeight >= 700){
                page2.css("height", "160%");
                page3.css("top", "260%");
            } else if(viewportHeight < 700 && viewportHeight >= 600){
                page2.css("height", "170%");
                page3.css("top", "270%");
            } else if(viewportHeight < 600 && viewportHeight >= 530){
                page2.css("height", "200%");
                page3.css("top", "300%");
            } else if(viewportHeight < 530 && viewportHeight >= 440){
                page2.css("height", "250%");
                page3.css("top", "350%");
            } else if(viewportHeight < 440){
                page2.css("height", "300%");
                page3.css("top", "400%");
            } else {
                page2.css("height", "120%");
                page3.css("top", "220%");
            }
        } else {
            $(this).css("height", largeSize);
            if(viewportHeight < 700 && viewportHeight >= 520){
                page2.css("height", "150%");
                page3.css("top", "250%");
            } else if(viewportHeight < 520){
                page2.css("height", "250%");
                page3.css("top", "350%");
            } else {
                page2.css("height", "120%");
                page3.css("top", "220%");
            }
        }
    });

    $(".premasterbuts").each(function(){
        if(viewportWidth < 767){
            $(this).css("height", smallSize);
            if(viewportHeight < 1100 && viewportHeight >= 1030){
                page3.css("height", "130%");
                page4.css("top", "350%");
                page4.css("height", "130%");
                footer.css("top", "480%");
            } else if(viewportHeight < 1030 && viewportHeight >= 950){
                page3.css("height", "140%");
                page4.css("top", "360%");
                page4.css("height", "140%");
                footer.css("top", "500%");
            } else if(viewportHeight < 950 && viewportHeight >= 890){
                page3.css("height", "150%");
                page4.css("top", "370%");
                page4.css("height", "150%");
                footer.css("top", "520%");
            } else if(viewportHeight < 890 && viewportHeight >= 785){
                page3.css("height", "170%");
                page4.css("top", "410%");
                page4.css("height", "170%");
                footer.css("top", "590%");
            } else if(viewportHeight < 750 && viewportHeight >= 700){
                page3.css("height", "190%");
                page4.css("top", "450%");
                page4.css("height", "190%");
                footer.css("top", "640%");
            } else if(viewportHeight < 700 && viewportHeight >= 600){
                page3.css("height", "220%");
                page4.css("top", "490%");
                page4.css("height", "220%");
                footer.css("top", "710%");
            } else if(viewportHeight < 600 && viewportHeight >= 530){
                page3.css("height", "250%");
                page4.css("top", "550%");
                page4.css("height", "250%");
                footer.css("top", "800%");
            } else if(viewportHeight < 530 && viewportHeight >= 440){
                page3.css("height", "300%");
                page4.css("top", "650%");
                page4.css("height", "300%");
                footer.css("top", "950%");
            } else if(viewportHeight < 440){
                page3.css("height", "400%");
                page4.css("top", "800%");
                page4.css("height", "400%");
                footer.css("top", "1200%");
            } else {
                page3.css("height", "120%");
                page4.css("top", "340%");
                page4.css("height", "120%");
                footer.css("top", "460%");
            }
        } else {
            $(this).css("height", largeSize);
            if(viewportHeight < 760 && viewportHeight >= 700){
                page3.css("height", "130%");
                page4.css("top", "350%");
                page4.css("height", "130%");
                footer.css("top", "480%");
            } else if(viewportHeight < 700 && viewportHeight >= 520) {
                page3.css("height", "180%");
                page4.css("top", "430%");
                page4.css("height", "180%");
                footer.css("top", "610%");
            } else if(viewportHeight < 520) {
                page3.css("height", "280%");
                page4.css("top", "630%");
                page4.css("height", "280%");
                footer.css("top", "910%");
            } else {
                page3.css("height", "120%");
                page4.css("top", "340%");
                page4.css("height", "120%");
                footer.css("top", "460%");
            }
        }
    });
});
