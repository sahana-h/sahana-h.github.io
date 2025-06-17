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
// const subtitle = document.querySelector('.subtitle');
// const text = subtitle.textContent;
// subtitle.textContent = '';
// let i = 0;

// function typeWriter() {
//   if (i < text.length) {
//     subtitle.textContent += text.charAt(i);
//     i++;
//     setTimeout(typeWriter, 100);
//   }
// }

// Start typing effect when page loads
// window.addEventListener('load', typeWriter);

// Carousel for About section collage
const carouselImages = [
  'https://placehold.co/480x320?text=Pic+1',
  'https://placehold.co/480x320?text=Pic+2',
  'https://placehold.co/480x320?text=Pic+3'
];
const carouselImg = document.querySelector('.carousel-image');
const leftBtn = document.querySelector('.carousel-btn-left');
const rightBtn = document.querySelector('.carousel-btn-right');
const dots = document.querySelectorAll('.carousel-dot');
let carouselIndex = 0;

function updateCarousel(idx) {
  carouselImg.src = carouselImages[idx];
  dots.forEach((dot, i) => {
    dot.style.opacity = i === idx ? '0.7' : '0.4';
    dot.style.background = i === idx ? '#ffd700' : '#fff';
  });
}
if (carouselImg && leftBtn && rightBtn && dots.length) {
  leftBtn.addEventListener('click', () => {
    carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel(carouselIndex);
  });
  rightBtn.addEventListener('click', () => {
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
    updateCarousel(carouselIndex);
  });
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      carouselIndex = i;
      updateCarousel(carouselIndex);
    });
  });
  updateCarousel(carouselIndex);
}

// Coverflow carousel for About section
const coverflowImages = [
  'carousel_pics/FCE1CB50-4F8D-4036-8F63-1B8483CDDE5B.JPG',
  'carousel_pics/E2D61178-3749-4BE0-81C8-18027BC3CDBA.JPG',
  'carousel_pics/CB9EFF0F-7040-42DB-AF7D-2155198D5378.JPG',
  'carousel_pics/A0D4C23F-D42C-4060-815B-E2A1025E586B.JPG',
  'carousel_pics/69F88BF5-29ED-4A5C-A2F8-E61E4D578A42.JPG',
  'carousel_pics/6DA8F169-99BC-454F-A92E-A69FFD12D35F.JPG'
  // 'carousel_pics/IMG_9278.HEIC' is omitted for browser compatibility
];
const coverflowCenter = document.querySelector('.coverflow-img-center');
const coverflowLeft = document.querySelector('.coverflow-img-left');
const coverflowRight = document.querySelector('.coverflow-img-right');
const coverflowFarLeft = document.querySelector('.coverflow-img-farleft');
const coverflowFarRight = document.querySelector('.coverflow-img-farright');
const coverflowBtnLeft = document.querySelector('.coverflow-btn-left');
const coverflowBtnRight = document.querySelector('.coverflow-btn-right');
let coverflowIndex = 0;

function updateCoverflow(idx) {
  const total = coverflowImages.length;
  coverflowFarLeft.src = coverflowImages[(idx - 2 + total) % total];
  coverflowLeft.src = coverflowImages[(idx - 1 + total) % total];
  coverflowCenter.src = coverflowImages[idx % total];
  coverflowRight.src = coverflowImages[(idx + 1) % total];
  coverflowFarRight.src = coverflowImages[(idx + 2) % total];
}
if (coverflowCenter && coverflowLeft && coverflowRight && coverflowFarLeft && coverflowFarRight && coverflowBtnLeft && coverflowBtnRight) {
  coverflowBtnLeft.addEventListener('click', () => {
    coverflowIndex = (coverflowIndex - 1 + coverflowImages.length) % coverflowImages.length;
    updateCoverflow(coverflowIndex);
  });
  coverflowBtnRight.addEventListener('click', () => {
    coverflowIndex = (coverflowIndex + 1) % coverflowImages.length;
    updateCoverflow(coverflowIndex);
  });
  // Auto-advance every 3 seconds
  setInterval(() => {
    coverflowIndex = (coverflowIndex + 1) % coverflowImages.length;
    updateCoverflow(coverflowIndex);
  }, 3000);
  updateCoverflow(coverflowIndex);
}