// Smooth scroll to sections
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Hero button scroll
document.getElementById('exploreBtn').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Join button animation
document.getElementById('joinBtn').addEventListener('click', () => {
  alert("Welcome to the Apex Experience 🌌");
});

// Fade-in on scroll
const sections = document.querySelectorAll('.section');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) section.classList.add('visible');
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
