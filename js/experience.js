if("object"!=typeof lancer)var lancer={};lancer.experience=function(){var nowpage=$("h2").find("strong").text(),$experience=$("#experience"),$experienceDl=$experience.find("dl"),$experienceDt=$experienceDl.find("dt"),$experienceDd=$experienceDl.find("dd"),$experience=$("#experience-nav"),copyToTextArea=function(e){var n=$(e),i=($(e).html(),$(e).text()),t="<textarea class='textArea'>"+i+"</textarea><button class='run'>运行</button><button class='close'>取消</button>";n.find(".coding").hide().end().append(t)};this.onReady=function(){$("#experience-nav li a:contains('"+nowpage+"')").parent().addClass("cur"),$experienceDd.find("table").find("tr:odd").addClass("zebra"),$experienceDd.hide().wrapInner("<div class='coding'></div>"),$experienceDt.toggle(function(){$(this).next("dd").slideDown()},function(){$(this).next("dd").slideUp()}),$experienceDd.dblclick(function(){$(this).hasClass("canNotRun")||$(this).children().is("textarea")||copyToTextArea(this)}),$("button.run").live("click",function(){var coding=$(this).prev("textarea").val();eval(coding)}),$("button.close").live("click",function(){$(this).next("div").html();$(this).siblings(".coding").show().siblings().remove()}),$experience.find("a").click(function(e){function n(){window.location.href=i}e.preventDefault();var i=$(this).attr("href");$experience.addClass("animated hinge"),setTimeout(n,1800)})}},$(function(){(new lancer.experience).onReady()});