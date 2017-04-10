// JavaScript Document

$(document).ready(function () {	
							
							
							
$(".search_list table.table_style tbody tr ").click(function(){
$(this).toggleClass("tr_hover");
$(".search_list table.table_style tbody tr").not(this).removeClass("tr_hover");										 												  
});



$(".profile1").click(function(){
$(this).addClass("now1");
$(".nav_menu li a").not(this).removeClass("now1");
$(".profile2").show();
$(".XiangQing table").not(".profile2").hide();	
});


$(".survey1").click(function(){
$(this).addClass("now1");
$(".nav_menu li a").not(this).removeClass("now1");
$(".survey2").show();
$(".XiangQing table").not(".survey2").hide();	
});

$(".rating1").click(function(){
$(this).addClass("now1");
$(".nav_menu li a").not(this).removeClass("now1");
$(".rating2").show();
$(".XiangQing table").not(".rating2").hide();	
});



$(".party1").click(function(){
$(this).addClass("now1");
$(".nav_menu li a").not(this).removeClass("now1");
$(".party2").show();
$(".XiangQing table").not(".party2").hide();	
});







});



