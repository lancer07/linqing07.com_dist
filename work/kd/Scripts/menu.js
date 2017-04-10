$(document).ready(function(){

$(".subscribe").load('subscribe.asp');
$(".subscribe").hide();
<!--menu按钮hover样式-->	
$(".menu1").hover(
	function(){
	$(this).addClass('menu1_hover')
    },
	function(){
	$(this).removeClass('menu1_hover');	
	});
							
$(".menu2").hover(
	function(){
	$(this).addClass('menu2_hover')
    },
	function(){
	$(this).removeClass('menu2_hover');	
	});

$(".menu3").hover(
	function(){
	$(this).addClass('menu3_hover')
    },
	function(){
	$(this).removeClass('menu3_hover');	
	});

$(".menu4").hover(
	function(){
	$(this).addClass('menu4_hover')
    },
	function(){
	$(this).removeClass('menu4_hover');	
	});

$(".menu5").hover(
	function(){
	$(this).addClass('menu5_hover')
    },
	function(){
	$(this).removeClass('menu5_hover');	
	});

$(".menu6").hover(
	function(){
	$(this).addClass('menu6_hover')
    },
	function(){
	$(this).removeClass('menu6_hover');	
	});

$(".menu7").hover(
	function(){
	$(this).addClass('menu7_hover')
    },
	function(){
	$(this).removeClass('menu7_hover');	
	});


						
});
       
	   
	   
	   
	   
<!--menu按钮链接-->		   
	    function menu1(){
		$(".l_n").show();
		$(".footer1").show();		
		$(".intro").hide();		
		$(".surrounding").hide();
		$(".year").hide();
		$(".tercel").hide();
		$(".counselor").hide();
		$(".teacher").hide();
        $(".eidos").hide();	
		$(".feature").hide();
		$(".subscribe").hide();
		}	
		
	    function menu2(){
		$(".intro").show("normal");
		$(".l_n").hide();
		$(".surrounding").hide("naomal");
		$(".year").hide("naomal");
		$(".tercel").hide("naomal");
		$(".counselor").hide("naomal");
		$(".teacher").hide("naomal");
		$(".eidos").hide("normal");	
		$(".feature").hide("naomal");
		$(".subscribe").hide("normal");
		$(".footer1").hide();
		}		
		function menu3(){
		$(".year").show("naomal");	
		$(".l_n").hide();
		$(".surrounding").hide("naomal");
		$(".intro").hide("naomal");
		$(".tercel").hide("naomal");
		$(".counselor").hide("naomal");
		$(".teacher").hide("naomal");		
		$(".eidos").hide("normal");
		$(".feature").hide("naomal");
		$(".subscribe").hide("normal");
		$(".footer1").hide();
		}	
		
		function menu4(){
		$(".counselor").show("naomal");	
		$(".l_n").hide();
		$(".surrounding").hide("naomal");
		$(".intro").hide("naomal");
		$(".year").hide("naomal");
		$(".tercel").hide("naomal");
		
		$(".teacher").hide("naomal");
		$(".eidos").hide("normal");	
		$(".feature").hide("naomal");
		$(".subscribe").hide("normal");
		$(".footer1").hide();
		}			
		
		
		function menu5(){
		window.open("http://www.kaidun180.com/bbs/index.php");	
			
		}
		
		function menu6(){
		$(".eidos").show("naomal");	
		$(".counselor").hide("naomal");	
		$(".l_n").hide();
		$(".surrounding").hide("naomal");
		$(".intro").hide("naomal");
		$(".year").hide("naomal");
		$(".tercel").hide("naomal");
		$(".teacher").hide("naomal");
		$(".feature").hide("naomal");
		$(".subscribe").hide("normal");
		$(".footer1").hide();
		}	
		
		function menu7(){
		$(".subscribe").show("normal");
		
		$(".eidos").hide("naomal");	
		$(".counselor").hide("naomal");	
		$(".l_n").hide();
		$(".surrounding").hide("naomal");
		$(".intro").hide("naomal");
		$(".year").hide("naomal");
		$(".tercel").hide("naomal");
		$(".teacher").hide("naomal");
		$(".feature").hide("naomal");
		$(".footer1").hide();
		}			
		
		
		
		
		
		
		
		
		
<!--其余按钮-->	
	    function jxhj3(){
		$(".surrounding").show();
		$(".intro").hide();
		}	
		
	    function bjjs3(){
		$(".surrounding").hide();
		$(".intro").show();
		}			
		
	    function ndb3(){
		$(".tercel").hide();
		$(".year").show();
		}		
		
	    function tsb3(){
		$(".year").hide();
		$(".tercel").show();
		}
		
	    function gwtd3(){
		$(".teacher").hide();
		$(".counselor").show();
		}		
		
	    function sztd3(){
		$(".counselor").hide();
		$(".teacher").show();
		}		
		
	    function ln3(){
		$(".feature").hide();
		$(".eidos").show();
		}		

	    function ts3(){
		$(".feature").show();
		$(".eidos").hide();
		}	
		
		
	
	    function intro_more(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=4";
		}			
		function surrounding_more(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=5";
		}
		
		function go_abc(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=53";
		}
		function go_la(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=59";
		}
		function go_hhh(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=161";
		}
		function go_esl(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=162";
		}
		
		function go_sc(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=164";
		}
		function go_pmc(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=163";
		}
		function go_rh(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=165";
		}		
        
		function counselor_more(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=10";
		}
		
		function teacher_more(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=9";
		}
		
		function gw1(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=10";	
		}

		function gw2(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=10";	
		}
		
		function gw3(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=10";	
		}
		
		function gw4(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=10";	
		}


		function sz1(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=9";	
		}

		function sz2(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=9";	
		}

		function sz3(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=9";	
		}

		function sz4(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=9";	
		}

        function eidos_more(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=7";	
		}

        function feature_more(){
		window.location.href="http://www.kaidun180.com/bbs/viewthread.php?tid=6";	
		}