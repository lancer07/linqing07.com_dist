if("object"!=typeof lancer)var lancer={};lancer.nav=function(){var n,e=["我的首页","作品截图","经验积累","与我联系","我的简历"],a=["Home","My Works","Experience","Contact Me","My Resume"],i=$("#nav"),t=i.find("li");this.onReady=function(){t.hover(function(){n=$(this).index(),t.eq(n).find("a").html(a[n]).addClass("animated swing")},function(){t.eq(n).find("a").html(e[n]).removeClass("animated swing")})}},$(function(){(new lancer.nav).onReady()});