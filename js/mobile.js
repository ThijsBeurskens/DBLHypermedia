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
});
