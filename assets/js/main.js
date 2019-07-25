(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]


-------------------------------------------------------------------*/


$(window).on('load', function() {
    $('#Container .container .row').mixItUp();
    

	setTimeout(() => {
		$('#preloader').fadeOut(900);
	}, 1000);



}); // END load Function 

$(document).ready(function() {


// 1.menu toogle 
//----------------------------------
var togglebtn = $('.toggle-btn');
if(togglebtn.length){
    $(".toggle-btn").on("click", function () {
        $(this).toggleClass("active");
        $("#menu").toggleClass("show-menu");
    });
}
// 2.Data images
//----------------------------------
if ($('.background-image').length > 0) {
	$('.background-image').each(function () {
		var src = $(this).attr('data-src');
		$(this).css({
			'background-image': 'url(' + src + ')'
		});
	});
}

/*--------------------------
3.menu jquery mobile code
---------------------------- */
$(function() {
	$('#menu').cookcodesmenu({});
});


/*--------------------------
4.Home slider
---------------------------- */
if ($('.content-slider.owl-carousel, .blog-slide.owl-carousel').length > 0) {
    $('.content-slider.owl-carousel, .blog-slide.owl-carousel').owlCarousel({
		loop: true,
        items: 1,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-long-arrow-right" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>'],
    });
}
if ($('.logo-slide.owl-carousel').length > 0) {
    $('.logo-slide.owl-carousel').owlCarousel({
		loop: true,
        items: 4,
        autoplay: true,
        nav: false,
        dots: false,
        navText: ['<i class="fa fa-long-arrow-right" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>'],
    });
}
/*--------------------------
4.sticky menu
---------------------------- */
$(window).on('scroll', function(){
	if( $(window).scrollTop()>200 ){
		$('#sticky').addClass('stick');
		} else {
		$('#sticky').removeClass('stick');
	}
});

/*--------------------------
5.image magnify popup
---------------------------- */

$('.popup-link').magnificPopup({
	type: 'image',
	gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
      },	
  });
  if ($('.video-popup').length > 0) {
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}

/*--------------------------
6.scrollUp
---------------------------- */	
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

/*--------------------------
 7.One Page Navigatiopn active
---------------------------- */
if ($('#menu').length > 0) {
    $('#menu').onePageNav({
        scrollOffset: 70
    });
}


/*--------------------------
  6. bxslider
---------------------------- */ 
//Testimonial slider     
$('.client-content').bxSlider({
    pagerCustom: '.client-img'
});

    //Property details slider    
$('.bg-photo').bxSlider({
    pagerCustom: '.sm-photo'
}); 








}); // end ready function

$(window).on('scroll', function() {

}); // END Scroll Function 

$(window).on('resize', function() {

}); // End Resize

})(jQuery);