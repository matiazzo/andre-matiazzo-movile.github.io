$(document).ready(function() {

	// Closes the dropdown by clicking out of it
	$(document).bind('click', function(toggleDropdown) {
		if (!$(toggleDropdown.target).closest('.dropdown, .input').length) {
			$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		}
	});

	// Closes a dropdown that is already opened if you click on another one
	$('.input').bind('click', function (activateDropdown) {
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		$(this).parent().find('.dropdown').addClass('dropdown--active').animate({opacity: 1}, 15);
		$(this).find('input[type="search"]').focus();
	});

	//On New Contact, shows the "improve this contact" column
	$('.improve-contact__cta .cta').bind('click', function() {
		$(this).parent().hide()
		$('.improve-contact .input-group').fadeIn();
	});

	//Get text from the selection within dropdowns and put it on the respective input
	$('.dropdown li').not('.dropdown li.search__subheading, .outro-genero').bind('click', function() {
		var textFromDropdown = $(this).find('span').text();
		$(this).parents('.dropdown').siblings('.input').find('span').text(textFromDropdown);
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
	});



// Filters' Modal on Mobile
// Get the modal
var modal = document.getElementById('bottomModal');
// Get the button that opens the modal
var btn = document.getElementById("modalTrigger");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}

}

});
