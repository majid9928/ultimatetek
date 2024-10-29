/* =====================================
Template Name: Techopz
Author Name: Techopz
Description: Techopz - Creative Multipurpose HTML5 Template.
Version:	1.0
========================================*/

(function($) {
    "use strict";
     $(document).on('ready', function() {	
		
		/*====================================
			Search & Sidebar Popup JS
		======================================*/ 	
		$('.top-search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		$('.right-nav .bar').on( "click", function(){
			$('.sidebar-popup').addClass('active');
		});
		
		$('.sidebar-popup .cross').on( "click", function(){
			$('.sidebar-popup').removeClass('active');
		});
		
		$('.search .icon').on( "click", function(){
			$('.search-form, .right-bar .search').toggleClass('active');
		});	
		
		/*====================================
			Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration:300,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			closeOnClick:true,
		});
		/*====================================
			Mobile Menu
		======================================*/ 	
		$('.main-category').slicknav({
			prependTo:".mobile-ecom",
			duration:300,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			closeOnClick:true,
		});
		
		/*====================================
			Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		/*====================================
			Slider & Carousel JS
		======================================*/ 	
		$('.home-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
			responsive:{
				300: {
					nav:false,
				},
				768: {
					nav:false,
				},
				1170: {
					nav:true,
				},
			}
		});
		$('.team-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			margin:30,
			dots:true,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:4,
				},
			}
		});
		$(".clients-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 400,
			autoplayTimeout:2000,
			singleItem: true,
			autoplayHoverPause:true,
			center:false,
			margin:30,
			nav:false,
			dots:true,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:2,
				},
				480: {
					items:3,
				},
				768: {
					items:4,
				},
				1170: {
					items:6,
				},
			}
		});	
		$('.blog-slider').owlCarousel({
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			margin:5,
			nav:true,
			dots:false,
			navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
					nav:false,
				},
				480: {
					items:1,
					nav:false,
				},
				768: {
					items:2,
					nav:false,
				},
				1170: {
					items:3,
				},
			}
		});
		$('.shop-blog-slider').owlCarousel({
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			margin:30,
			nav:true,
			dots:false,
			navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
					nav:false,
				},
				480: {
					items:1,
					nav:false,
				},
				768: {
					items:2,
					nav:false,
				},
				1170: {
					items:3,
				},
			}
		});
		$('.portfolio-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			margin:30,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		$('.pf-details-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		});
		$(".testimonial-slider").owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
		});	
		$('.p-gallery-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			margin:30,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		$('.team-slider-style2').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			margin:30,
			responsive:{
				0: {
					items:1,
					dots:false,
				},
				300: {
					items:1,
					dots:false,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:4,
				},
			}
		});
		$('.shop-single-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:1,
				},
				1170: {
					items:1,
				},
			}
		});
		$('.deal-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			margin:30,
			nav:true,
			navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
			dots:false,
			responsive:{
				0: {
					items:1,
					nav:false,
				},
				300: {
					items:1,
					nav:false,
				},
				480: {
					items:2,
					nav:false,
				},
				768: {
					items:3,
					nav:false,
				},
				1170: {
					items:4,
				},
			}
		});
		$('.p-testimonial-slider').owlCarousel({
			autoplay:false,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			margin:30,
			dots:true,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:2,
				},
			}
		});
		$('.insta-feed-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		$('.flexslider-thumbnails').flexslider({
			animation: "slide",
			controlNav: "thumbnails",
		});
		
		/*=====================================
			Price Range JS
		======================================*/ 	
		$( function() {
			$( "#slider-range" ).slider({
			  range: true,
			  min: 0,
			  max: 500,
			  values: [ 0, 500 ],
			  slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			  }
			});
			$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
		} );
		
		
		/*=====================================
			Checkbox JS
		======================================*/  
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*====================================
			Wow JS
		======================================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
		
		/*======================================
			Parallax JS
		======================================*/ 
		$(window).stellar({
            responsive: true,
            positionProperty: 'position',
			horizontalOffset: 0,
			verticalOffset: 0,
            horizontalScrolling: false
        });
		
		/*=====================================
			Video Popup
		======================================*/ 
		$('.video-popup').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		/*=====================================
			CounterUp JS
		======================================*/  
		$('.number').counterUp({
			time: 1000
		});
		
		/*====================================
			Circle Progress JS
		======================================*/ 	
		$('.circle').circleProgress({
			fill: {
			color: '#ff5e15'
			}
		})
		
		/*====================================
			CountDown JS
		======================================*/ 
		$('[data-countdown]').each(function() {
			var $this = $(this),
				finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
				$this.html(event.strftime(
					'<div class="cdown"><span class="days"><strong>%-D</strong><p>Days.</p></span></div><div class="cdown"><span class="hour"><strong> %-H</strong><p>Hours.</p></span></div> <div class="cdown"><span class="minutes"><strong>%M</strong> <p>MINUTES.</p></span></div><div class="cdown"><span class="second"><strong> %S</strong><p>SECONDS.</p></span></div>'
				));
			});
		});
		
		/*====================================
			Theme Others JS
		======================================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 0
				}, 900);
			e.preventDefault();
		});
		
		$('select').niceSelect();
		
		$('.player').mb_YTPlayer();				
		
		/*======================================
			Wow JS
		======================================*/ 		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
	});
	
		/*====================================
			Scroll Up JS
		======================================*/
		$.scrollUp({
			scrollText: '<span><i class="ti-arrow-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		});  
		
		/*====================================
			Preloader JS
		======================================*/
		$(window).on('load', function() {
				$('.preeloader').fadeOut('slow', function(){
				$(this).remove();
			});
		});
		
})(jQuery);
