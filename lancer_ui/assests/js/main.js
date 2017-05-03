if(typeof lancer !=='object') var lancer = {};
lancer.demoList = function(){
	var $uiList = $("#demo-list"),
		$uiListLi = $("#demo-list li"),
		$navA = $("#nav").find("a");
	var that = this;

	this.waterFall = function(){
		$uiList.gridalicious({
			width: 226,
			gutter: 20,
			selector: 'li:not(":hidden")',
			animate: true,
			animationOptions: {
				queue: true,
				speed: 200,
				duration: 300,
				effect: 'fadeInOnAppear'
			}
		});
		$uiList.find("div:empty").remove();
	};

	this.fliter = function(){
		$navA.click(function(e){
			e.preventDefault();
			var me = $(this);
			var filterOptions = me.attr("href").slice(1);
			me.parent("li").addClass("cur").siblings("li").removeClass("cur")
			if (filterOptions == "all"){
				$uiListLi.show();
			}else{
				$("div.galcolumn").children("li").hide().unwrap();
				$uiList.find("li."+filterOptions).show();
			}
			that.waterFall();
			return false
		});
	}
};

$(function(){
	(new lancer.demoList).waterFall();
	(new lancer.demoList).fliter();
});
