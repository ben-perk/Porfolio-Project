/* ============================================
   BENJAMIN PERKTON — PORTFOLIO SCRIPTS
   Modern JavaScript with hamburger menu & carousel
   ============================================ */

// ============ HAMBURGER MENU ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// ============ CAROUSEL FUNCTIONALITY ============
const carouselTrack = document.getElementById('carouselTrack');

if (carouselTrack) {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;

  function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  document.getElementById('prevBtn').addEventListener('click', prevSlide);

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.getAttribute('data-index')));
    });
  });

  setInterval(nextSlide, 5000);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
}

// ============ SMOOTH SCROLL NAVIGATION ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Don't prevent default for nav logo or empty hrefs
    if (href === '#' || href === '#contact-form') {
      return;
    }

    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all skill cards and project cards for animation
document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});

// ============ NAVIGATION HIGHLIGHTING ============
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links a');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinkItems.forEach(link => {
    link.style.color = '';
    const href = link.getAttribute('href');
    
    if (href === `#${currentSection}` && currentSection !== '') {
      link.style.color = 'var(--accent-primary)';
    }
  });
});

// ============ HOVER EFFECTS ============
const skillCards = document.querySelectorAll('.skill-card');
const projectCards = document.querySelectorAll('.project-card');

skillCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-12px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// ============ PAGE LOAD ANIMATION ============
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ============ BACK TO TOP SMOOTH SCROLL ============
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Allow clicking nav logo to go to top
document.querySelector('.nav-logo')?.addEventListener('click', scrollToTop);

// ============ TECH TAGS HOVER ============
const techTags = document.querySelectorAll('.tech-tag');
techTags.forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
  });
  
  tag.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

console.log('Benjamin Perkton Portfolio - Scripts loaded successfully!');