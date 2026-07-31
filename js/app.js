/* ============================================
   AI ENGINEER PORTFOLIO — APPLICATION LOGIC
   ============================================ */

// ============ Project Data ============
const projectData = [
  {
    title: 'CropCopilot',
    desc: 'AI-powered agricultural intelligence platform that combines RAG (Retrieval-Augmented Generation) with Text-to-SQL capabilities. Built with NVIDIA NIM APIs and CrewAI for multi-agent orchestration, delivering real-time crop recommendations through an interactive dashboard.',
    features: ['RAG Pipeline', 'Text-to-SQL', 'FastAPI Backend', 'Real-time Recommendations', 'Interactive Dashboard', 'NVIDIA NIM APIs'],
    buttons: [
      { text: 'GitHub', url: 'https://github.com/Yuvarajsel/CropCopilot', type: 'primary' }
    ]
  },
  {
    title: 'Voice-Based AI Study Assistant',
    desc: 'An intelligent study companion that leverages speech recognition and AI to create personalized learning experiences. Features include voice-driven quiz generation, real-time speech interaction, and adaptive study recommendations.',
    features: ['Speech Recognition', 'Quiz Generator', 'Voice Interaction', 'AI Study Assistant', 'Natural Language Processing', 'Adaptive Learning'],
    buttons: [
      { text: 'GitHub', url: 'https://github.com/Yuvarajsel/Voice_Based_Study_Assistant', type: 'primary' },
      { text: 'Live Demo', url: 'https://study-buddy-bice-alpha.vercel.app/', type: 'secondary' }
    ]
  },
  {
    title: 'Visual Search Engine for Jewelry',
    desc: 'A multimodal RAG-powered search engine enabling image-based and sketch-based jewelry discovery. Uses vector search for similarity matching and LLMs for generating rich product descriptions from visual inputs.',
    features: ['Multimodal RAG', 'Image Search', 'Sketch Search', 'LLM Product Descriptions', 'Vector Search', 'Similarity Matching'],
    buttons: [
      { text: 'GitHub', url: 'https://github.com/Yuvarajsel/Multimodal_Jewelry_Retrieval', type: 'primary' },
      { text: 'Live Demo', url: 'https://jewellerytanishq-clip.vercel.app/', type: 'secondary' }
    ]
  },
  {
    title: 'Plant Growth Prediction',
    desc: 'Machine learning system that predicts plant growth patterns using multiple regression models. Features comprehensive feature engineering, model comparison, and an interactive prediction dashboard for agricultural insights.',
    features: ['Machine Learning', 'Regression Models', 'Feature Engineering', 'Prediction Dashboard', 'Data Visualization', 'Model Comparison'],
    buttons: [
      { text: 'GitHub', url: 'https://github.com/Yuvarajsel', type: 'primary' }
    ]
  }
];

// ============ DOM Ready ============
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initParticles();
  initTypewriter();
  initScrollReveal();
  initNavbar();
  initMobileNav();
  initScrollProgress();
  initBackToTop();
  initCustomCursor();
  initTechFilter();
  initProjectModals();
  initCertModal();
  initContactForm();
  initCounters();
});

// ============ Loading Screen ============
function initLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1200);
  });
  // Fallback: hide after 3s regardless
  setTimeout(() => loader.classList.add('hidden'), 3000);
}

// ============ Particle System ============
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null };
  const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 80;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Mouse repulsion
      if (mouse.x !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x += (dx / dist) * force * 2;
          this.y += (dy / dist) * force * 2;
        }
      }

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();
}

// ============ Typewriter Effect ============
function initTypewriter() {
  const el = document.getElementById('typewriter');
  const roles = ['AI Engineer', 'Prompt Engineer', 'Machine Learning Developer', 'RAG Developer'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const current = roles[roleIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === current.length) {
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before next word
    }

    setTimeout(type, typingSpeed);
  }
  type();
}

// ============ Scroll Reveal ============
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============ Navbar ============
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Scrolled state
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Active link
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 200;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });
}

// ============ Mobile Nav ============
function initMobileNav() {
  const toggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ============ Scroll Progress ============
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = progress + '%';
  });
}

// ============ Back to Top ============
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============ Custom Cursor ============
function initCustomCursor() {
  if (window.innerWidth < 768) return;

  const glow = document.getElementById('cursor-glow');
  const dot = document.getElementById('cursor-dot');
  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  // Smooth glow follow
  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  // Hover effect on interactive elements
  const hoverEls = document.querySelectorAll('a, button, .project-card, .tech-card, .social-icon');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('hovering'));
    el.addEventListener('mouseleave', () => dot.classList.remove('hovering'));
  });
}

// ============ Tech Stack Filter ============
function initTechFilter() {
  const btns = document.querySelectorAll('.tech-filter-btn');
  const cards = document.querySelectorAll('.tech-card');

  function filterCards(filter) {
    cards.forEach(card => {
      if (card.dataset.category === filter) {
        card.style.display = '';
        card.style.animation = 'fadeInUp 0.4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Apply default filter on load
  const activeBtn = document.querySelector('.tech-filter-btn.active');
  if (activeBtn) filterCards(activeBtn.dataset.filter);

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards(btn.dataset.filter);
    });
  });
}

// ============ Project Modals ============
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.project);
      const project = projectData[idx];
      if (!project) return;

      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-desc').textContent = project.desc;

      const featuresList = document.getElementById('modal-features');
      featuresList.innerHTML = project.features.map(f =>
        `<span class="modal-feature-item">${f}</span>`
      ).join('');

      const actionsEl = document.getElementById('modal-actions');
      actionsEl.innerHTML = project.buttons.map(b =>
        `<a href="${b.url}" class="btn btn-${b.type}" target="_blank" rel="noopener">${b.text}</a>`
      ).join('');

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ============ Certificate Modal ============
function initCertModal() {
  const modal = document.getElementById('cert-modal');
  const closeBtn = document.getElementById('cert-modal-close');
  const modalImg = document.getElementById('cert-modal-img');
  const modalTitle = document.getElementById('cert-modal-title');
  const certCards = document.querySelectorAll('.clickable-cert');

  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.dataset.certImg;
      const title = card.dataset.certTitle;
      if (!imgSrc) return;

      modalImg.src = imgSrc;
      modalTitle.textContent = title || 'Certificate';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeCertModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeCertModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCertModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeCertModal();
  });
}

// ============ Contact Form ============
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  submitBtn.addEventListener('click', (e) => {
    const rect = submitBtn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    submitBtn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      Message Sent!
    `;
    submitBtn.style.background = 'linear-gradient(135deg, #11998e, #38ef7d)';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalHTML;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      form.reset();
    }, 3000);
  });
}



// ============ Animated Counters ============
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 1500;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          el.textContent = current + suffix;

          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}
