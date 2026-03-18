// main js for the site
// handles: mobile nav, active page highlighting, scroll animations, contact form

document.addEventListener('DOMContentLoaded', function() {

  // mobile nav toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
    // close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }

  // highlights the active page in the nav
  // alternatively, hardcode class="active" on the link in the html
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // logo svg — update here and it applies to all pages
  const logoSVG = `
    <svg width="46" height="46" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="20" stroke="#3DB2C1" stroke-width="1.5"/>
      <ellipse cx="22" cy="22" rx="11" ry="20" stroke="#3DB2C1" stroke-width="1"/>
      <ellipse cx="22" cy="22" rx="20" ry="8" stroke="#3DB2C1" stroke-width="1"/>
      <ellipse cx="22" cy="22" rx="20" ry="14" stroke="#3DB2C1" stroke-width="0.7"/>
      <line x1="2" y1="22" x2="42" y2="22" stroke="#3DB2C1" stroke-width="0.7"/>
      <line x1="22" y1="2" x2="22" y2="42" stroke="#3DB2C1" stroke-width="0.7"/>
      <text x="22" y="26" text-anchor="middle" font-family="Raleway, sans-serif" font-size="7" font-weight="800" fill="#3DB2C1">GRC</text>
    </svg>
  `;

  document.querySelectorAll('.nav-logo-svg').forEach(function(el) {
    el.innerHTML = logoSVG;
  });

  document.querySelectorAll('.footer-logo-svg').forEach(function(el) {
    el.innerHTML = `
      <svg width="30" height="30" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20" stroke="#3DB2C1" stroke-width="1.5"/>
        <ellipse cx="22" cy="22" rx="11" ry="20" stroke="#3DB2C1" stroke-width="1"/>
        <ellipse cx="22" cy="22" rx="20" ry="8" stroke="#3DB2C1" stroke-width="1"/>
      </svg>
    `;
  });

  // scroll-triggered fade-in for cards and sections
  const items = document.querySelectorAll(
    '.svc-card, .val-card, .team-card, .sector-card, .faq-item, .proc-step, .wwd-item'
  );

  items.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  });

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(function(el) { observer.observe(el); });

  // contact form — shows a success state on submit
  // to wire up real email delivery: sign up at formspree.io, create a form, copy the id,
  // then add action="https://formspree.io/f/YOURID" to the <form> tag in contact.html
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // remove this line when using formspree
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message Sent! ✓';
      btn.style.background = '#16a34a';
      btn.style.borderColor = '#16a34a';
      setTimeout(function() {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.borderColor = '';
        form.reset();
      }, 3000);
    });
  }

});
