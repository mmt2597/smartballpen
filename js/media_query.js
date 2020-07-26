jQuery(document).ready(function () {
  
	if (jQuery(window).width() < 768) {
	            jQuery('.navbar').css('font-size', '12px');
	            jQuery('.navbar-header').css('margin-left', '0%');
	            jQuery('.logo-brand').css('width', '60px');
	            jQuery('.footer-nav-link nav').removeClass('navigation');
	            jQuery('.footer-nav-link nav ul').addClass('nav', 'nav.stacked', 'nav-pills');
	            jQuery('.add-cf').addClass('clearfix');
	        }
	        else {
	        	jQuery('.navbar').css('font-size', '1em');
	            jQuery('.navbar-header').css('margin-left', '0%');
	            jQuery('.footer-nav-link nav ul').removeClass('nav', 'nav.stacked', 'nav-pills');
	            jQuery('.footer-nav-link nav').addClass('navigation');
	            jQuery('.add-cf').removeClass('clearfix')
	        }

	jQuery(window).resize(function() {
		if( jQuery(window).width() < 768 ) {
			jQuery('.navbar').css('font-size', '12px');
			jQuery('.main-wrapper').css('background-size', '100% 100%');
			jQuery('.navbar-header').css('margin-left', '0%');
			jQuery('.footer-nav-link nav').removeClass('navigation');
			jQuery('.footer-nav-link nav ul').addClass('nav', 'nav.stacked', 'nav-pills');
			jQuery('.btn-link button').removeClass('btn-lg');
			jQuery('.add-cf').addClass('clearfix');
		}
		else {
			jQuery('.main-wrapper').css('background-size', '100%');
            jQuery('.navbar-header').css('margin-left', '0%');
            jQuery('.footer-nav-link nav ul').removeClass('nav', 'nav.stacked', 'nav-pills');
            jQuery('.footer-nav-link nav').addClass('navigation');
			jQuery('.btn-link button').addClass('btn-lg');
			jQuery('.add-cf').removeClass('clearfix');
		}
	});


});        

  