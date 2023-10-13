// on .hamburger-menu click, show .main-nav
// in vanilla js
var hamburgerMenu = document.querySelector('.hamburger-menu');
var mainNav = document.querySelector('.main-nav');

// toggle css display style
hamburgerMenu.addEventListener('click', function() {
  mainNav.style.display = mainNav.style.display === 'block' ? '' : 'block';
});
