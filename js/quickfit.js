$('.hover').textfill({
        minFontPixels: 2,
        maxFontPixels: 100,
        innerTag: 'span',
        widthOnly: false,
        explicitWidth: window.getComputedStyle(this, null).getPropertyValue("width"),
        explicitHeight: null,
        debug: false,
        changeLineHeight: false
    });

