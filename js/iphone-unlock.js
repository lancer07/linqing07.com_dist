$(function(){$("#unlock-slider").slider({slide:function(){$("#slide-to-unlock").css("opacity",1-parseInt($("#unlock-handle").css("left"))/120)},stop:function(){$(".ui-slider-handle").position().left>205?e():($(".ui-slider-handle").animate({left:0},200),$("#slide-to-unlock").animate({opacity:1},200))}});var e=function(){$("#unlock-bottom").animate({bottom:-100},300),$("#unlock-top").animate({top:-100},300),$("#iphone-inside").fadeOut("normal",function(){var e=document.createElement("iframe");e.src="mobi/index.html",$("#iphone-scrollcontainer").empty().append(e)})},t=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),a=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),n=new Date,i=n.getDay(),o=n.getDate(),r=n.getMonth(),l=(n.getFullYear(),n.getHours()),c=n.getMinutes();$("#datepicker").replaceWith('<p class="date">'+t[i]+", "+a[r]+" "+o+"</p>"),10>l&&(l="0"+l),10>c&&(c="0"+c),$("#timepicker").replaceWith('<p class="time">'+l+":"+c+"</p>")});