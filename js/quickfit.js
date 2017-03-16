jQuery(function(){
	var quickfitText=function(reset) {
		var quickFitClass="quickfit";				//Base class of elements to adapt
		var quickFitGroupClass="quickfitGroup";		//Elements in a group will all have the same size
		var quickFitIndependantClass="quickfitIndependant";	//Elements with this class won't be taken for quickfitGroup (they will be independant)
		var quickFitSetClass="quickfitSet";			//Elements with size set will get this class
		var quickFitFontSizeData="quickfit-font-size";
		//Set the font-size property of your element to the MINIMUM size you want for your content

		if(reset)
		{ jQuery("."+quickFitSetClass).removeClass(quickFitSetClass); }

		//The magic happens here
		var setMaxTextSize=function(jElement) {
			//Get and set the font size into data for reuse upon resize
			var fontSize=parseInt(jElement.data(quickFitFontSizeData)) || parseInt(jElement.css("font-size"));
			jElement.data(quickFitFontSizeData,fontSize);

			//Gradually increase font size unti the element gets a big increase in height (ie line break)
			var i=0;
			var previousHeight;
			do
			{
				previousHeight=jElement.height();
				jElement.css("font-size",""+(++fontSize)+"px");
			}
			while(i++<300 && jElement.height()-previousHeight<fontSize/2)

			//Finally, go back before the increase in height and set the element as resized by adding quickFitSetClass
			fontSize-=1;
			jElement.addClass(quickFitSetClass).css("font-size",""+fontSize+"px");

			return fontSize;
		};
		jQuery("."+quickFitClass).each(function() {
			var jThis=$(this);

			if(!jThis.hasClass(quickFitSetClass))
			{
				var jFitGroup=jThis.closest("."+quickFitGroupClass);
				if(!jThis.hasClass(quickFitIndependantClass) && jFitGroup.length>0)
				{
					//We are in a group, set the max fit size for all
					var minFontSize=1000;
					jFitGroup.find("."+quickFitClass+":not(."+quickFitIndependantClass+")").each(function(i,item) {
						minFontSize=Math.min(minFontSize,setMaxTextSize($(item)));
					}).css("font-size",""+minFontSize+"px");
				}
				else
				{ setMaxTextSize(jThis); }
			}
		});
	};
	quickfitText();	//Run once...
	jQuery(window).on("resize orientationchange",function() { quickfitText(true); });
});
