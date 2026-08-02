(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.mobile-menu');
  const modal = document.querySelector('.video-modal');
  const videoFrame = document.querySelector('.video-frame');
  const closeButton = document.querySelector('.modal-close');
  const youtubeId = '2MMYdal2Oso';
  const artistPortrait = 'data:image/webp;base64,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';

  const mountArtistPortrait = () => {
    const aboutTitle = document.querySelector('#about .split-title');
    if (!aboutTitle || aboutTitle.querySelector('.artist-portrait')) return;

    const style = document.createElement('style');
    style.id = 'artist-portrait-styles';
    style.textContent = `
      .artist-portrait{position:relative;margin:clamp(34px,5vw,54px) 0 0;aspect-ratio:4/5;overflow:hidden;border:1px solid var(--line);background:var(--ink-850)}
      .artist-portrait::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,transparent 58%,rgba(7,12,17,.82))}
      .artist-portrait img{width:100%;height:100%;display:block;object-fit:cover;object-position:50% 38%}
      .artist-portrait figcaption{position:absolute;z-index:1;left:22px;right:22px;bottom:19px;display:flex;justify-content:space-between;align-items:end;gap:16px}
      .artist-portrait figcaption strong{font:500 19px/1 var(--display);letter-spacing:.16em}
      .artist-portrait figcaption span{color:var(--mist-300);font-size:11px;letter-spacing:.12em}
      @media(max-width:760px){.artist-portrait{margin-top:32px}.artist-portrait figcaption{left:18px;right:18px;bottom:16px}}
    `;
    document.head.appendChild(style);

    const figure = document.createElement('figure');
    figure.className = 'artist-portrait';
    figure.innerHTML = `<img src="${artistPortrait}" alt="視線を伏せたNAGORIのポートレート" width="320" height="400" loading="lazy"><figcaption><strong>NAGORI</strong><span>Sendai, Japan</span></figcaption>`;
    aboutTitle.appendChild(figure);
  };

  mountArtistPortrait();

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
