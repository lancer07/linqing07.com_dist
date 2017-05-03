if(typeof lancer !=='object') var lancer = {};
lancer.codeColor = function(){
	var keyword = ["break",	"case","catch","continue","default","delete","do","else","finally","for","function","if","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","with","abstract","boolean","byte","char","class","const","debugger","double","e","enum","event","export","extends","final","float","goto","implements","import","int","interface","long","native","package","private","protected","public","short","static","super","synchronized","throws","transient","volatile","Array","Function","Date","undefined","null","true","false","arguments"];
	
	var sign = ["&gt;","&lt;","=","==","===","&gt;=","&lt;==","!=",">>","<<","||","&amp;&amp;",",",".","!","(",")","{","}","[","]","--","++","+=","-=",";","+","-","*","/","%","?",":"];
	
	var values = /^("|').*("|')$/,
		note = /^\/\/.*/,
		blockNote = /^(\/\*).*(\*\/)$/,
		num = /^[0-9]*$/;
		
	this.onReady = function(){	
		var $word = $("span.word");
		$word.each(function(index, element) {
			var newString = "",
				word = $(this).html().split(" ");

			for(var i = 0; i < word.length; i++){
				
				for(var j = 0; j < keyword.length; j++){
					if(word[i] == keyword[j] ){
						word[i] = "<b class='keyword'>" + word[i] + "</b>";
					}
						
				}
				
				for(var s = 0; s < keyword.length; s++){
					if(word[i] == sign[s] ){
						word[i] = "<b class='sign'>" + word[i] + "</b>";
					}
						
				}
				
				for(var n = 0; n < keyword.length; n++){
					if(note.test(word[i])){
						word[i] = "<b class='note'>" + word[i] + "</b>";	
					}	
				}
				
				for(var bn = 0; bn < keyword.length; bn++){
					if(blockNote.test(word[i])){
						word[i] = "<b class='note'>" + word[i] + "</b>";	
					}	
				}

				for(var v = 0; v < keyword.length; v++){
					if(values.test(word[i])){
						word[i] = "<b class='values'>" + word[i] + "</b>";	
					}	
				}
				
				for(var d = 0; d < keyword.length; d++){
					if(num.test(word[i])){
						word[i] = "<b class='num'>" + word[i] + "</b>";	
					}	
				}
				newString += word[i]
			}
		
			$(this).html(newString);
		});	
		
		$("fieldset.code").each(function() {
			$(this).find("p:even").addClass("even")
			$(this).find("p").prepend(function(index,html){
				var index = index < 10 ? "0" + index : index ;
				return "<em>" + index + "</em>"	
			})
		});
		
	}
}
$(function() {
	(new lancer.codeColor).onReady()
});