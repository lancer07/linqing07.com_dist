if("object"!=typeof lancer)var lancer={};lancer.nav=function(){var n=$("#nav");this.onReady=function(){n.Fisheye({maxWidth:35,items:"a",itemsText:"span",container:".dock-container",itemWidth:45,proximity:50,alignment:"center",valign:"bottom",halign:"center"})}},$(function(){(new lancer.nav).onReady()});