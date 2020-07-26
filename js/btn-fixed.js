$(function() {

	var $btn-float = $('.btn-float');
	var	$window = $(window);
	var	offset = $btn-float.offset();
	var	topPadding = 15;

		$window.scroll(function() {

			if($window.scrollTop() > offset.top) {
				$btn-float.stop().animate({
					marginTop: $window.scrollTop() - offset.top + topPadding
				});
			} else {
				$btn-float.stop().animate({
					marginTop: 0
				});
			}

		});

});