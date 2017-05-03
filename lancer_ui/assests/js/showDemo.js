if(typeof lancer !=='object') var lancer = {};
lancer.showDemo = function(){
	var that = this;
	this.show = function(el, link){
		var $el = $(el);
		var startTop = $el[0].offsetTop + 250;

		var blackBg = document.createElement("div");
		blackBg.className = "black-bg";

		var iframeCloseBtn = document.createElement("button");
		iframeCloseBtn.className = "iframe-close-btn";
		iframeCloseBtn.innerHTML = "X";

		var iframeModal = document.createElement("iframe");
		iframeModal.className = "iframe-modal";
		iframeModal.src = link;

		var $iframeModal = $(iframeModal);

		function getScrollTop() {
			return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
		}

		$("body").addClass("no-scroll");
		$iframeModal.css({
			left: "-100%",
			top: startTop
		}).appendTo("body").fadeIn(400, function() {
			$iframeModal.animate({
				height: window.screen.availHeight - 200,
				left: "50%",
				top: getScrollTop() + 50,
				marginLeft: "-48%"
			}, 500, function() {
				$(iframeCloseBtn).appendTo("body").show();
			});
		});

		iframeCloseBtn.onclick = function() {
			$(blackBg).remove();
			$(this).remove();
			$("body").removeClass("no-scroll");
			$iframeModal.animate({
				left: "-100%"
			}, 300, function() {
				$iframeModal.fadeOut(500, function() {
					$iframeModal.remove();
				});
			})
		}
		$(blackBg).appendTo("body").show();
	}

	this.onReady = function() {
		$(".view").click(function(e) {
			e.preventDefault();
			var thisLink = $(this).attr("href");
			that.show(this, thisLink);
			return false
		});
	}
}

$(function(){
	(new lancer.showDemo).onReady();
});
