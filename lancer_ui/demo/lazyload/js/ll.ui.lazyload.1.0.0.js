// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// The file is an easy-to-use javascript ui library.
// Version: 1.0.0
// Author: Lancer Lin
// Website: www.linqing07.com/lancer_ui/catalog/index.html
// Email: lancer07@139.com , lancer07@126.com
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
if(typeof ll !== 'object'){ 
	var ll = {};
	ll.ui = {};
}
ll.ui.lazyLoad = function() {
	var el = $(".ll_lazyload"),
		input = el.find("input.ll_lazy_input");
	window.onscroll = function(e){
		if( el[0].offsetTop<window.pageYOffset + window.screen.availHeight){
			input.each(function(){
				$(this).parent().html($(this).val())
			});
		}	
	}
}
$(function(){ll.ui.lazyLoad()});