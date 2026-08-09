(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-menu');

  if (!menuButton || !menu) return;

  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close' : 'Menu';
  };

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenu(false);
      menuButton.focus();
    }
  });

  document.addEventListener('click', (event) => {
    const clickedOutside = !menu.contains(event.target) &&
      !menuButton.contains(event.target);

    if (clickedOutside) setMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setMenu(false);
  });
})();
