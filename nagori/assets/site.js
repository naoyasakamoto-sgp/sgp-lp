(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.mobile-menu');
  const modal = document.querySelector('.video-modal');
  const videoFrame = document.querySelector('.video-frame');
  const closeButton = document.querySelector('.modal-close');
  const youtubeId = 'ZndQiqaESjo';

  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open) => {
    if (!menu || !menuButton) return;
    menu.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  menuButton?.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  const openVideo = () => {
    if (!modal || !videoFrame) return;
    videoFrame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0" title="NAGORI 君を見ていた街" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeButton?.focus();
  };

  const closeVideo = () => {
    if (!modal || !videoFrame) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    videoFrame.innerHTML = '';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-play-video]').forEach((button) => button.addEventListener('click', openVideo));
  closeButton?.addEventListener('click', closeVideo);
  modal?.addEventListener('click', (event) => { if (event.target === modal) closeVideo(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (modal?.classList.contains('is-open')) closeVideo();
      if (menu?.classList.contains('is-open')) setMenu(false);
    }
  });
})();
