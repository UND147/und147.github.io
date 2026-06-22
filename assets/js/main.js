const menuButton = document.querySelector('.menu-button');
const siteNavigation = document.querySelector('.site-nav');
const navigationLinks = document.querySelectorAll('.site-nav a');

menuButton.addEventListener('click', function () {
  const isMenuOpen = siteNavigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isMenuOpen));
});

navigationLinks.forEach(function (navigationLink) {
  navigationLink.addEventListener('click', function () {
    siteNavigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
