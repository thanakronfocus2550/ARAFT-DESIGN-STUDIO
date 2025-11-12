// Smooth fade-in when load
document.body.classList.add('fade-in');

// Scroll reveal
const reveals = document.querySelectorAll('[data-reveal]');
window.addEventListener('scroll', () => {
  const windowH = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowH - 100) el.classList.add('visible');
  });
});
