(function($) {
	$.fn.extend({
	xScroll: function(distance, delay) {
		return this.each(function() {
				var self = $(this);
				$(document).keyup(function(e) {
					switch(e.which) {
						case 37:
							leftClick(self, distance, delay);
							break;

						case 39:
							rightClick(self, distance, delay);
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
	function leftClick(self, distance, delay) {
		var left = self.css('left');
		if(left === "auto") {
			left = 0;
		}
		var parentWidth = parseInt(self.parent().css('width'));
		var childWidth = parseInt(self.css('width'));
		var childLeft = parseInt(self.css('left'));
		if((childWidth + childLeft) < parentWidth + distance) {
			return;
		}
		self.css('position', 'relative');
		self.animate({
			left: (parseInt(left) - distance)
		}, delay);
	}

	function rightClick(self, distance, delay) {
		var left = self.css('left');
		var currentLeft = parseInt(left) + distance;
		if(left === "auto") {
			currentLeft = 0;
		}
		if(currentLeft >= 0) {
			currentLeft = 0;
		}
		self.css('position', 'relative');
		self.animate({
			left: currentLeft
		}, delay);
	}
})(jQuery);
