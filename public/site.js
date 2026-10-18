'use strict';
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#main-nav');
  const closeMenu = () => { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menu.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMenu(); });
  window.matchMedia('(min-width: 821px)').addEventListener('change', closeMenu);

})();

// Full-photo viewer. Original owner-approved images.
(() => {
  const photoDialog = document.querySelector('#photo-dialog');
  const fullPhoto = document.querySelector('#full-photo');
  const caption = document.querySelector('#photo-caption');
  const closeButton = document.querySelector('.photo-close');
  let photoOpener = null;
  document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
    photoOpener = button;
    fullPhoto.src = button.dataset.photo;
    fullPhoto.alt = button.dataset.photoAlt;
    caption.textContent = button.dataset.photoCaption;
    photoDialog.showModal();
    document.body.classList.add('photo-view-open');
    closeButton.focus({ preventScroll: true });
  }));
  closeButton.addEventListener('click', () => photoDialog.close());
  photoDialog.addEventListener('click', event => {
    if (event.target !== photoDialog) return;
    const bounds = photoDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) photoDialog.close();
  });
  photoDialog.addEventListener('close', () => {
    document.body.classList.remove('photo-view-open');
    if (photoOpener) photoOpener.focus({ preventScroll: true });
  });
})();
