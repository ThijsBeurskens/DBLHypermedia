$('.hover').textfill({
        minFontPixels: 2,
        maxFontPixels: 100,
        innerTag: 'span',
        widthOnly: false,
        explicitWidth: window.getComputedStyle(document.getElementByClass("hover"), null).getPropertyValue("width"),
        explicitHeight: null,
        debug: false,
        changeLineHeight: false
    });

