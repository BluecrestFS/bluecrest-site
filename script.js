const year = new Date().getFullYear();
document.querySelectorAll('[data-year]').forEach(el => el.textContent = year);

const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
if (header && menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
    header.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}
