$(document).ready(function () {


$(window).scroll(function() {


  	var wScroll = $(this).scrollTop();

  	$('.smart-logo').css({ 'transform': 'translate(0,'+ wScroll / 4 +'%)' });
  	$('.smart-introduction').css({ 'transform': 'translate(0,-'+ wScroll / 4 +'%)'});

    // FEATURES SECTION
    

  	if(wScroll > $('.features').offset().top - ($(window).height() / 2.2 )  ) {

          var opacity = Math.max(0, wScroll - $('.features').offset().top + $(window).height() - 500);
          $('.float-btn').css({
            'opacity': opacity
          });

          $('.smart-ballpen-w-anim .top').css({'opacity':'1'})

         	var offset = Math.min(0, wScroll - $('.features').offset().top + $(window).height() - 750);
         	//console.log(offset);
      		$('.smart-ballpen-w-anim .top').css({'transform': 'translate(0,'+ offset / 2 +'px)'});

          $('.features .figure-features').each(function(i) {

              setTimeout(function(){
                  $('.features .figure-features').eq(i).addClass('lightSpeedIn');
              }, 150 * (i+1));
          });
      }

      // WHY US SECTION
      if(wScroll > $('#whyUs').offset().top - ($(window).height() - 400) ) {

          $('.features-content p').each(function(i) {
              setTimeout(function() {
                  $('.features-content p').eq(i).css('opacity','1');
                  $('.features-content p').eq(i).addClass('lightSpeedIn');
              }, 150 * (i+1));
          });

      }

       // SERVICES SECTION
      if(wScroll > $('.services').offset().top - $(window).height() ) { 

          
          var offset = Math.min(0, wScroll - $('.services').offset().top + $(window).height() - 500);

          $('#jumbotron1').css({'transform': 'translate('+offset+'px, '+ Math.abs(offset * 0.2) +'px)',});
          $('#jumbotron3').css({'transform': 'translate('+Math.abs(offset)+'px, '+ Math.abs(offset * 0.2) +'px)',});
      }    

      if(wScroll > $('.pen-pics').offset().top - ($(window).height() / 1.2 )  ) {
        
        $('.pen-pics figure').each(function(i) {

            setTimeout(function(){
                $('.pen-pics figure').eq(i).addClass('is-showing');
            }, 150 * (i+1));
        });
    }

});

});