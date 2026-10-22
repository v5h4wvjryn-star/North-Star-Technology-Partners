// Mobile nav toggle
document.querySelectorAll('.nav-toggle').forEach((btn) => {
  const links = document.getElementById(btn.getAttribute('aria-controls'));
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    links.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
});

// Fade-up on scroll
const fadeEls = document.querySelectorAll('.fade-up');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach((el) => observer.observe(el));
} else {
  fadeEls.forEach((el) => el.classList.add('visible'));
}

// Current year in footer
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
