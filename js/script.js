const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
document.querySelectorAll('.zoom').forEach(img => {
    img.addEventListener('click', () => {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lb.classList.add('open');
    });
});
lb.addEventListener('click', () => lb.classList.remove('open'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });

// Back to top button
const backToTop = document.getElementById('back-to-top');
const toggleBackToTop = () => backToTop.classList.toggle('visible', window.scrollY > 300);
window.addEventListener('scroll', toggleBackToTop, { passive: true });
toggleBackToTop();
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));