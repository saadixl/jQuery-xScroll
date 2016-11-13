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
					leftClick(self, distance, delay);
				});

				$(".navscroll__right").click(function(){
					rightClick(self, distance, delay);
				});

			});
		}
	});

	function leftClick(self, distance, delay) {
		var left = distance+self.scrollLeft();
		self.animate({scrollLeft: left }, delay);
	}

	function rightClick(self, distance, delay) {
		var right = self.scrollLeft()-distance;
		self.animate({scrollLeft: right}, delay);
	}

})(jQuery);
