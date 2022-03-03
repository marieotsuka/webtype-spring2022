$(function(){
	console.log('script loaded');
	
	$('.menu-icon').click(function() {
	  $('nav').toggleClass('open');
	});

	// $("body").on("click", function(event){
	// 	let target = $(event.target);
	// 	console.log(target);
	// 	if( !target.is('a') && !target.hasClass('menu-icon') ){
	// 		// if not clicking on link
	// 		console.log('ignore');

	// 		if (target.hasClass('element')){
	// 			target.remove();
	// 		}else{
	// 			var element = event.target.tagName;
	// 			var x = event.pageX;
	// 			var y = event.pageY;

	// 			// console.log(element);
	// 			var sticker = '<div class="element" id="added">'+ element +'</div>';
	// 			$('main').append(sticker);
				
	// 			$('#added').css({
	// 			  	 top:y-20, 
	// 			  	 left:x-20,
	// 			 }).removeAttr('id');
	// 		}
	// 	}
	// });

	$("#dark-mode").click(function(){
		$('body').toggleClass('dark');
	});

	// $('article .content-dropdown').click(function(){
		
	// 	$(this).next('.content').toggle();
	// });
	$('.accordion').click(function(){
		// $('.open').removeClass('open');
		$(this).toggleClass('open');
	});

	$(window).resize(function() {
	 	$('.element').each(function(){
	 		$(this).remove();
	 	});
	});

	$('a:external').attr('target', '_blank');

});