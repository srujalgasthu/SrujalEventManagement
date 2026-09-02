document.addEventListener('DOMContentLoaded', () => {

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
  if (mobileBtn && mobileDrawer && mobileBackdrop) {
    const toggleDrawer = (show) => {
      mobileDrawer.classList.toggle('open', show);
      mobileBackdrop.classList.toggle('open', show);
    };
    mobileBtn.addEventListener('click', () => toggleDrawer(!mobileDrawer.classList.contains('open')));
    mobileBackdrop.addEventListener('click', () => toggleDrawer(false));
  }

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('srujalem_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('srujalem_theme', next);
    });
  }

  // FAQ Accordion Toggles
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');
      
      // Close all accordions
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      // Open clicked if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      
      showContactToast(`Thank you, ${name}! Your inquiry "${subject}" has been received. Our team will respond to ${email} within 2 hours.`);
      contactForm.reset();
    });
  }

  // Toast Notification helper for contact page
  function showContactToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast toast-success';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span>${escapeHtml(message)}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }
});
