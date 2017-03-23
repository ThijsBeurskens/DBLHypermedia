$(function() {
    $(".open").click(function() {
        document.getElementByClassName("sideMenu").style.width = "250px";
        document.getElementByClassName("main").style.marginLeft = "250px";
    });
});

$(function() {
    $(".close").click(function() {
        document.getElementByClassName("sideMenu").style.width = "0";
        document.getElementByClasName("information").style.marginLeft= "0";
        });
});
