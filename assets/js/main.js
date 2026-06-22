const menuButton = document.querySelector('.menu-button');
const siteNavigation = document.querySelector('.site-nav');
const navigationLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const pageSections = document.querySelectorAll('main section[id]');

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

const sectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    }

    navigationLinks.forEach(function (navigationLink) {
      const targetId = navigationLink.getAttribute('href');
      const isCurrentSection = targetId === '#' + entry.target.id;
      navigationLink.classList.toggle('active', isCurrentSection);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px' });

pageSections.forEach(function (pageSection) {
  sectionObserver.observe(pageSection);
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
