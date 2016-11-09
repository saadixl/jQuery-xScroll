(function($) {
	$.fn.extend({
	xScroll: function(options) {
		return this.each(function() {
				var self = $(this);
				$(document).keyup(function(e) {
					switch(e.which) {
						case 37:
							leftClick(self);
							break;

						case 39:
							rightClick(self);
							break;

						default: return;
					}
					e.preventDefault();
				});
				$(".navscroll__left").click(function(){
					leftClick(self);
				});
				$(".navscroll__right").click(function(){
					rightClick(self);
				});
			});
		}
	});
	function leftClick(self) {
		var left = self.css('left');
		if(left === "auto") {
			left = 0;
		}
		var parentWidth = parseInt(self.parent().css('width'));
		var childWidth = parseInt(self.css('width'));
		var childLeft = parseInt(self.css('left'));
		if((childWidth + childLeft) < parentWidth + 100) {
			return;
		}
		self.css('position', 'relative');
		self.animate({
			left: (parseInt(left) - 100)
		}, 200);
	}

	function rightClick(self) {
		var left = self.css('left');
		var currentLeft = parseInt(left) + 100;
		if(left === "auto") {
			currentLeft = 0;
		}
		if(currentLeft >= -100) {
			currentLeft = 0;
		}
		self.css('position', 'relative');
		self.animate({
			left: currentLeft
		}, 500);
	}
})(jQuery);
