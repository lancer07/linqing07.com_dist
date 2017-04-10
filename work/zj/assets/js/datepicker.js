// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// effect：datepicker;
// depends: jQuery UI
// author:	Lancer;
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

if(typeof lancer !=='object') var lancer = {};	
lancer.datepicker = function(){	
	var selectors = {
		datepicker : ".datepicker"	
	}
	var datepickerOpts = {
		changeYear : true,
		changeMonth : true,
		yearRange: "1990:2030",
		monthNamesShort : ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],	
		monthNames: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],	
		dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
		onSelect: function(dateText, inst) {
			var seleteDate = new Date(dateText),
				year = seleteDate.getFullYear(),
				month = seleteDate.getMonth()+1 < 10 ? "0" + (seleteDate.getMonth()+1) : seleteDate.getMonth()+1 ,
				day = seleteDate.getDate() < 10 ? "0" + seleteDate.getDate() : seleteDate.getDate() ;
			$(this).val( year + "-" + month + "-" + day)
		}
	}
	
	this.onReady = function(){
		$(selectors.datepicker).datepicker(datepickerOpts)
	};		
};
$(function(){(new lancer.datepicker).onReady()});