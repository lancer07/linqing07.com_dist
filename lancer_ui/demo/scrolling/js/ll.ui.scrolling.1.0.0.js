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

ll.ui.scrolling = function( /*elementID,direction,speed*/ ){
	var speed = arguments[0].speed || 30, 
		tab = document.getElementById(arguments[0].elementID),
		tabMain = tab.getElementsByTagName("ul")[0],
		tabLeft = tab.getElementsByTagName("span")[0],
		tabRight = tab.getElementsByTagName("span")[1];

	function toLeft(){
		if (tabRight.offsetWidth - tab.scrollLeft <= 0)
			tab.scrollLeft -= tabMain.offsetWidth
		else {
			tab.scrollLeft++;
		}	
	}

	function toRight(){
		if(tab.scrollLeft <=0)
			tab.scrollLeft += tabRight.offsetWidth
		else{
			tab.scrollLeft--
		}
	}

	var ma;

	if(arguments[0].direction =="left"){
		tabRight.innerHTML = tabMain.innerHTML;
		ma = toLeft;
	}else if(arguments[0].direction =="right"){
		tabRight.innerHTML = tabMain.innerHTML;
 		tab.scrollLeft = -tab.scrollWidth;
		ma = toRight;
	}
	
	var myMar = setInterval(ma, speed);		

	tab.onmouseover = function() { 
		clearInterval(myMar) 
	};
	tab.onmouseout = function() { 
		myMar = setInterval(ma, speed) 
	};			
}