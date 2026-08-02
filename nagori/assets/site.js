(() => {
  const mountHeroVisual = () => {
    if (!document.querySelector('.hero') || document.getElementById('nagori-hero-v3')) return;

    const style = document.createElement('style');
    style.id = 'nagori-hero-v3';
    style.textContent = `
      .hero-media{
        background-image:
          linear-gradient(180deg,rgba(7,12,17,.50) 0%,rgba(7,12,17,.12) 37%,rgba(7,12,17,.92) 100%),
          linear-gradient(90deg,rgba(7,12,17,.88) 0%,rgba(7,12,17,.56) 44%,rgba(7,12,17,.12) 100%),
          url("/sgp-lp/nagori/assets/hero-jozenji.webp");
        background-position:center 49%;
        background-size:cover;
        transform:none
      }
      .hero-media::after{
        background:
          radial-gradient(circle at 64% 57%,rgba(206,168,103,.16),transparent 27%),
          linear-gradient(0deg,rgba(7,12,17,.30),transparent 28%)
      }
      .hero-content{width:min(800px,100%)}
      .hero h1{font-size:clamp(68px,9.2vw,126px);line-height:.88;max-width:760px}
      .hero-copy{margin-top:30px}
      .mobile-bottom-nav{transition:opacity .28s ease,transform .28s ease}
      @media(max-width:900px){
        body:not(.has-scrolled) .mobile-bottom-nav{opacity:0;pointer-events:none;transform:translateY(18px)}
      }
      @media(max-width:600px){
        .hero{
          min-height:100svh;
          padding-top:calc(var(--header-h) + 58px);
          padding-bottom:calc(76px + env(safe-area-inset-bottom))
        }
        .hero-media{
          background-image:
            linear-gradient(180deg,rgba(7,12,17,.54) 0%,rgba(7,12,17,.10) 34%,rgba(7,12,17,.94) 100%),
            linear-gradient(90deg,rgba(7,12,17,.68) 0%,rgba(7,12,17,.26) 72%,rgba(7,12,17,.12) 100%),
            url("/sgp-lp/nagori/assets/hero-jozenji.webp");
          background-position:center 46%
        }
        .hero-content{width:100%}
        .hero h1{
          margin-top:18px;
          font-size:clamp(62px,17vw,94px);
          line-height:.88;
          letter-spacing:-.04em
        }
        .hero-copy{margin-top:24px;font-size:clamp(19px,5.5vw,23px);line-height:1.7}
        .hero-release{margin-top:24px}
        .hero .play-circle{width:56px;height:56px}
      }
    `;
    document.head.appendChild(style);
  };

  const syncScrollState = () => {
    document.body.classList.toggle('has-scrolled', window.scrollY > 24);
  };

  mountHeroVisual();
  syncScrollState();
  window.addEventListener('scroll', syncScrollState, { passive: true });

  const core = document.createElement('script');
  core.src = '/sgp-lp/nagori/assets/site-core.js';
  core.defer = true;
  document.head.appendChild(core);
})();