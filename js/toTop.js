if("object"!=typeof lancer)var lancer={};lancer.toTop=function(){var n=function(n){0==$(document).scrollTop()?n.hide():n.fadeIn()};this.onReady=function(){var o=$("#to-top");$(window).scroll(function(){n(o)}),o.click(function(n){return n.preventDefault(),$("body,html").animate({scrollTop:0},"slow"),!1})}},$(function(){(new lancer.toTop).onReady()});