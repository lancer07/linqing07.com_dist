// JavaScript Document

$(document).ready(function () {

$(".left_menu ul li a").click(function(){
$(this).removeClass("just1");
$(this).addClass("now1");
$(".left_menu ul li a").not(this).removeClass("now1");
$(".left_menu ul li a").not(this).addClass("just1");								   
});


$(".xx_top").click(function(){
$(".left_menu ul li a").not(".xxzx").removeClass("now1");
$(".left_menu ul li a").not(".xxzx").addClass("just1");
$(".xxzx").addClass("now1");
$(".ol1").hide();
});


$(".gr_top").click(function(){
$(".left_menu ul li a").removeClass("now1");
$(".left_menu ul li a").addClass("just1");
$(".ol1").hide();
});

$(".qx_top").click(function(){
$(".left_menu ul li a").not(".qxgl").removeClass("now1");
$(".left_menu ul li a").not(".qxgl").addClass("just1");
$(".qxgl").addClass("now1");
$(".ol1").hide();
});





$(".xtsz").click(function(){					  
$(".ol1").toggle();
});

$(".left_menu ul li a:not(.xtsz)").click(function(){
$(".ol1").hide();
});





$(".kh1").click(function(){
$(".kh2").show();
$(".lc2").hide();
});
$(".lc1").click(function(){
$(".lc2").show();
$(".kh2").hide();
});


$(".xg1").click(function(){
$(".xg2").show();
$(".tx2").hide();
$(".mm2").hide();						 
});

$(".tx1").click(function(){
$(".tx2").show();
$(".xg2").hide();
$(".mm2").hide();						 
});

$(".mm1").click(function(){
$(".mm2").show();
$(".tx2").hide();
$(".xg2").hide();						 
});






$(".tab2 a").click(function(){
$(this).removeClass("just2");
$(this).addClass("now2");
$(".tab2 a").not(this).removeClass("now2");
$(".tab2 a").not(this).addClass("just2");	


});







$(".table1 tbody tr:odd").addClass("tr_odd");














});
