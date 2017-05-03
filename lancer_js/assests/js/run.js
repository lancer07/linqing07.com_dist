if(typeof lancer !=='object') var lancer ={};	
lancer.run = function(){	

	this.onReady = function(){
		$("fieldset.eg span.word").each(function(index, element) {
			$(this).attr("contenteditable","true")
		});
		
		$("#run").bind('click',function(){
			var code = "";
			$(this).prev("fieldset").find("span.word").each(function(index, element) {
				code += $(this).text();
			});
			eval(code)
		});
	}
};
$(function(){(new lancer.run).onReady()});