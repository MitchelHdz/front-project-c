document.querySelector('#cierralo-hamburger-menu').addEventListener('click', function () {
	this.classList.toggle('is-active');
	document.querySelector('#cierralo-main-navbar').classList.toggle('cierralo-navbar-style');
});

document.querySelector('#body').addEventListener('click', function (e) {
	if (document.querySelector('#cierralo-hamburger-menu').classList.contains('is-active') && e.target.tagName !== 'SPAN' && e.target.tagName !== 'a') {
		document.querySelector('#cierralo-hamburger-menu').classList.remove('is-active');
		document.querySelector('#cierralo-main-navbar').classList.remove('cierralo-navbar-style');
	}
});
document.querySelector("#body").addEventListener( "touchstart",function (e) {
	if (document.querySelector('#cierralo-hamburger-menu').classList.contains('is-active') && e.target.tagName !== 'SPAN' && e.target.tagName !== 'a') {
		document.querySelector('#cierralo-hamburger-menu').classList.remove('is-active');
		document.querySelector('#cierralo-main-navbar').classList.remove('cierralo-navbar-style');
	}
});
var dropdown = document.getElementById('dropdown-menu');
var menu = document.getElementById('userMenu');
// Get the <span> element that closes the modal
var body = document.getElementById('body');
// When the user clicks on the button, open the modal 
dropdown.onclick = function() {
	menu.classList.toggle('active');
}
window.onclick = function(event) {
	if (event.target == menu) {
		menu.classList.toggle('active');
	}
}