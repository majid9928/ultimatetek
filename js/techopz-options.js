(function($) {
    "use strict";
    $(document).on('ready', function() {	
	
		/* Precon Settings */
		$('.techopz-options .icon').on('click', function(event){
			event.preventDefault();
			if( $ (this).hasClass('inOut')  ){
				$('.techopz-options').stop().animate({right:'0px'},500 );
			} else{
				$('.techopz-options').stop().animate({right:'-245px'},500 );
			} 
			$(this).toggleClass('inOut');
			return false;

		});

		/* Precon Colors */
		$(".skin1" ).on('click', function(){
			$("#techopz_custom" ).attr("href", "css/skins/skin1.css" );
			return false;
		});
		
		$(".skin2" ).on('click', function(){
			$("#techopz_custom" ).attr("href", "css/skins/skin2.css" );
			return false;
		});
		
		$(".skin3" ).on('click', function(){
			$("#techopz_custom" ).attr("href", "css/skins/skin3.css" );
			return false;
		});
		
		$(".skin4" ).on('click', function(){
			$("#techopz_custom" ).attr("href", "css/skins/skin4.css" );
			return false;
		});
		
		
	});	
		
})(jQuery);