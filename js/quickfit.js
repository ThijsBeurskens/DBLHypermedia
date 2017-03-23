$(window).on("load, resize", function() {
    $('.hover').textfill({
        minFontPixels: 2,
        maxFontPixels: 100,
        innerTag: 'span',
        widthOnly: false,
        explicitWidth: null,
        explicitHeight: null,
        debug: false,
        changeLineHeight: false
    });
});
