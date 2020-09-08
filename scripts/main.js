
// scroll top button

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


// navigation

const hamburger=document.querySelector(".hamburger"),nav=document.querySelector(".navigation"),
navItems=document.querySelectorAll(".navigation__item"),
links=document.querySelectorAll("a")
var percentage=0;function getScrollPercent(){
	const e=document.documentElement,t=document.body,a="scrollTop",c="scrollHeight";
percentage=Math.round((e[a]||t[a])/((e[c]||t[c])-e.clientHeight)*100)}
function hideLangSwitch(){
	percentage>3&&window.screen.width<992?langSwitch.style.opacity=0:langSwitch.style.opacity=1}
function handleClick(){hamburger.classList.toggle("hamburger--active"),
hamburger.setAttribute("aria-expanded",
hamburger.classList.contains("hamburger--active")),
nav.classList.toggle("navigation--active"),
socialItems.forEach(e=>{e.classList.toggle("social__item--dark-mode-mobile")})}
function closeMenu(){hamburger.classList.toggle("hamburger--active"),
hamburger.setAttribute("aria-expanded",
hamburger.classList.contains("hamburger--active")),
nav.classList.toggle("navigation--active"),
window.screen.width<992&&socialItems.forEach(e=>{e.classList.toggle("social__item--dark-mode-mobile")})}
	hamburger.addEventListener("click",handleClick),
	links.forEach(e=>e.addEventListener("click",closeMenu)),
	window.addEventListener("scroll",changeNavColor);

