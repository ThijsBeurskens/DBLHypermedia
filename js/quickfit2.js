jQuery(function(){
	var quickfitText=function() {
        var quickFitClass="quickfit";
        var quickFitSetClass="quickfitSet";

        var setMaxTextSize=function(jElement) {
            var height = jElement.height();
            var width = jElement.width();
            var fontSize = width / 24;
            if(jElement.hasClass(quickFitSetClass)){
                jElement.removeClass(quickFitSetClass);
            }

           var c = jElement.addClass(quickFitSetClass);
            c.css("font-size",""+fontSize+"px");
            c.css("height",""+height+"px");
		};

        jQuery("."+quickFitClass).each(function() {
			var jThis=$(this);
            setMaxTextSize(jThis);
			});
    };

    quickfitText();
	jQuery(window).on("resize orientationchange",function() { quickfitText(true); });
});
