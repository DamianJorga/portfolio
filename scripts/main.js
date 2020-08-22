// navigation hamburger
const button = document.querySelector(".mobile-menu_button");
button.addEventListener("click", mobileMenu);

function mobileMenu() {
const mobileLinks = document.querySelector(".menu-mobile");
mobileLinks.classList.toggle("opened");
}

// icons arrow
$(function(){
 
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('.scrollTopButton').addClass('show');
		} else {
			$('.scrollTopButton').removeClass('show');
		}
	});
 
	$('.scrollTopButton').click(function() {
		$('html').animate({scrollTop: 0}, 400, 'linear');
	});
});
