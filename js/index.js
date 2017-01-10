$(document).ready(function(){
	$('.menu li').hover(
		function(){
			$('ul', this).fadeIn();
		},
		function(){
			$('ul', this).fadeOut();
		}
	);
	
	var imgArray = ['../img/tlk-logo.png', '../img/got-logo.png', '../img/vk-logo.png'];
	var imgIndex = 0;

	function changeBanner(){
		var imgUrl = "url('" + imgArray[imgIndex] + "')";
		imgIndex++;
		$('#vikingsLogo').css('background-image', imgUrl);
		if (imgIndex >= imgArray.length) {
			imgIndex = 0;
		}
	}
	setInterval(changeBanner, 2000);

});