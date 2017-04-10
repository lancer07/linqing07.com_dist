// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// effect： alertModal;
// depends: jQuery 
// author:	Lancer;
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

if(typeof lancer !=='object') var lancer = {};	
lancer.alertModal = function(){
	var selectors ={
		modalLink : ".modalLink"	
	}
	
	
	this.onReady = function(e){
		$(selectors.modalLink).click(function(e){
			e.preventDefault();
			var thisModal= $(this).attr("href"),
				thisTitle = $(this).html();
			
			dialogOpts ={
				title : thisTitle,
				width : 500,
				modal : true,
				buttons : {
					"确定" : function(){
						$(this).find("form").submit()	
					},
					"取消" : function(){
						$(this).dialog("close"); 	
					}
					
					
				}
			}
			
			$(thisModal).dialog(dialogOpts);
		});
	}
}

$(function(){	
	(new lancer.alertModal).onReady();
});