// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  cursorFollower.style.left = e.clientX - 16 + 'px';
  cursorFollower.style.top = e.clientY - 16 + 'px';
});

// Cursor effects
document.addEventListener('mousedown', () => {
  cursor.style.transform = 'scale(0.8)';
  cursorFollower.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
  cursor.style.transform = 'scale(1)';
  cursorFollower.style.transform = 'scale(1)';
});

// Hover effects for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .skill-tag, .project-card');
interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.5)';
    cursorFollower.style.transform = 'scale(1.5)';
    cursorFollower.style.background = 'rgba(255, 255, 255, 0.2)';
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
    cursorFollower.style.background = 'rgba(255, 255, 255, 0.1)';
  });
});

// Navbar scroll effect
const nav = document.querySelector('.nav-container');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Add fade-in class
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
  });
});

// Parallax effect for waves
document.addEventListener('mousemove', (e) => {
  const waves = document.querySelectorAll('.wave');
  const x = (window.innerWidth - e.pageX * 2) / 100;
  const y = (window.innerHeight - e.pageY * 2) / 100;
  
  waves.forEach((wave, index) => {
    const speed = (index + 1) * 0.2;
    wave.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
  });
});

// Initialize tilt effect for project cards
VanillaTilt.init(document.querySelectorAll(".project-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});

// Typing effect for subtitle
const subtitle = document.querySelector('.subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';
let i = 0;

function typeWriter() {
  if (i < text.length) {
    subtitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect when page loads
window.addEventListener('load', typeWriter); 