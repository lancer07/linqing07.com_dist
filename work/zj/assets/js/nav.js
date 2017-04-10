// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// effect： nav menu;
// depends: jQuery 
// author:	Lancer;
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

if(typeof lancer !=='object') var lancer = {};	
lancer.navMenu = function(){	
	var selectors = {
		nav : ".nav",
		navLi : ".nav>li",
		navLiA : ".nav>li>a",
		subNav : ".subNav"	
	}

	function showSubNav(e){
		var content = $(e).children("div").html();
		$(selectors.subNav).html(content);
		$(selectors.navLiA).removeClass("cur");
		$(e).children("a").addClass("cur");
	}
	
	function hideSubNav(){
		$(selectors.subNav).html("");
		$(selectors.navLiA).removeClass("cur");
	}

	this.onReady = function(){
		
		$(selectors.navLi).bind('mouseover',function() {
			showSubNav(this);
		});
		  
		 
		$(selectors.navLi).eq(1).bind('mouseover',function() {
			$(selectors.subNav).css("padding-left","120px")
		});
		
		$(selectors.navLi).eq(2).bind('mouseover',function() {
			$(selectors.subNav).css("padding-left","208px")
		});
		
		$(selectors.navLi).eq(3).bind('mouseover',function() {
			$(selectors.subNav).css("padding-left","296px")
		});
		
		$(selectors.navLi).eq(4).bind('mouseover',function() {
			$(selectors.subNav).css("padding-left","384px")
		});
		
		$(selectors.navLi).eq(5).bind('mouseover',function() {
			$(selectors.subNav).css("padding-left","472px")
		});
		
		$(selectors.navLi).eq(6).bind('mouseover',function() {
			$(selectors.subNav).css("padding-left","560px")
		});
		
		$(selectors.navLi).eq(7).bind('mouseover',function() {
			$(selectors.subNav).css("padding-left","648px")
		});
		
		$(selectors.navLi).eq(8).bind('mouseover',function() {
			$(selectors.subNav).css("padding-left","590px")
		});
		
		$(selectors.navLi).eq(9).bind('mouseover',function() {
			$(selectors.subNav).css("padding-left","400px")
		});
	  
		$(selectors.subNav).bind('mouseleave',function() {
			hideSubNav();
		}
	);	
	
	}
};
$(function(){(new lancer.navMenu).onReady()});