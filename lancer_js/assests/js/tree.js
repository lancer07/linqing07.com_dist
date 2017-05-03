if(typeof lancer !=='object') var lancer ={};	
lancer.tree = function(){	

	this.onReady = function(){
		
		var nowpage = $("#crumbs strong").text(),
			nowblock = $("#crumbs span").text(),
			$nowblock = $("#tree dl dt:contains('" + nowblock + "')").parent("dl"),
			$nowpage = "";
		
		if(nowpage){
		
			$nowblock.find("dd a").each(function(index, element) {
				if($(this).text() == nowpage){
					$nowpage = $(this).parent("dd");	
				}
			});
				
			$nowpage.addClass("cur");
			$nowblock.addClass("open"); 
		}
		
		
		$("#tree dt").click(function(){
			$(this).parent("dl").toggleClass("open").siblings("dl").removeClass("open")
		});
		
		$("#tree dd a").hover(function(e){
			e.preventDefault();
			thisHtml = $(this).html(); 
			if($(this).attr("alt")){
				$(this).html($(this).attr("alt"));
			}
		},function(){
			$(this).html(thisHtml);
		});
	}
};
$(function(){(new lancer.tree).onReady()});