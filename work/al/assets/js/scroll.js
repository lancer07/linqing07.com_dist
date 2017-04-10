// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// effect： scrollContent;
// depends: jQuery 
// author:	Lancer;
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

if(typeof lancer !=='object') var lancer = {};	
lancer.scrollContent = function(){
	function scrollContent(el){
		var timer = setInterval(mar, 50);
		$(el).find(".copy").get(0).innerHTML = $(el).find(".content").get(0).innerHTML;
		
		function mar(){
			 if ($(el).find(".copy").get(0).offsetTop <= $(el).get(0).scrollTop){
				$(el).get(0).scrollTop -= $(el).find(".content").get(0).offsetHeight;
			 }else{ 
				$(el).get(0).scrollTop +=1;
			 }
		}
		
		$(el).hover(function(){
			clearInterval(timer)
		},function(){
			timer = setInterval(mar,50)
		});
	}
	
	this.onReady = function(e){
		scrollContent(e);
	}
}

$(function(){	
	(new lancer.scrollContent).onReady(".scroll1");
	(new lancer.scrollContent).onReady(".scroll2");
});