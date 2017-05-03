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
ll.ui.dialog = function() {
	var blackBg = document.createElement("div");
	blackBg.className = "ll_black_bg";

	var popupModel = document.createElement("div"),
	popupMessage = document.createElement("p");

	var popupForm = document.createElement("form");
	popupForm.type = "post";
	popupForm.name = "ll_popup_form";

	var popupFormTextInput = document.createElement("input");
	popupFormTextInput.name = "ll_popup_form_text";
	popupFormTextInput.className = "ll_popup_form_text";

	var popupFormSubmitBtn = document.createElement("button");
	popupFormSubmitBtn.className = "ll_popup_form_btn";
	popupFormSubmitBtn.innerHTML = "Ok";

	var popupFormCancelBtn = document.createElement("button");
	popupFormCancelBtn.className = "ll_popup_form_btn";
	popupFormCancelBtn.innerHTML = "Cancel";

	var popupCloseBtn = document.createElement("button");
	popupCloseBtn.className = "ll_popup_close_btn";
	popupCloseBtn.innerHTML = "X";

	function popupInit(type, title, message) {
		popupModel.className = "ll_popup_notice ll_" + type;
		popupModel.appendChild(popupCloseBtn);
		popupMessage.innerHTML = "<strong>" + (title ? title : "") + "</strong>" + (message ? message : "");
		popupModel.appendChild(popupMessage);
		
		if(type == "prompt") {
			popupModel.appendChild(popupFormTextInput);
		}
		if(type == "confirm" || type == "prompt"){		
			popupModel.appendChild(popupFormSubmitBtn);
			popupModel.appendChild(popupFormCancelBtn);
		}
	}
	function popupShow() {
		document.getElementsByTagName("body")[0].appendChild(blackBg);
		blackBg.style.display = "block";
		document.getElementsByTagName("body")[0].appendChild(popupModel);
		popupModel.style.display = "block";
	}
	function popupClose(ele) {
		ele.parentNode.parentNode.removeChild(ele.parentNode);
		ele.parentNode.innerHTML="";
		blackBg.parentNode.removeChild(blackBg);
	}
	popupCloseBtn.onclick = function() {
		popupClose(this);
	}
	popupFormCancelBtn.onclick = function() {
		popupClose(this);
	}
	popupFormSubmitBtn.onclick = function() {
		popupForm.submit();
		popupClose(this);
	}
	popupInit(arguments[0].type,arguments[0].title, arguments[0].message);
	popupShow();
}