var $root = $('html, body');

/*Scroll anchor points*/
$('a[href$="#features-anchor"]').click(function () {
	$root.animate({
		scrollTop:$($.attr(this,'href')).offset().top
	}, 500);
	return false;
});