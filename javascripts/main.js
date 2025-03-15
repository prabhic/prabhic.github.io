console.log('Portfolio site loaded.');

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Reveal animations on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Update the observer to include the new focus-overview section cards
  document.querySelectorAll('.project-card, .focus-card').forEach(el => {
    el.classList.remove('fade-in');
    observer.observe(el);
  });
  
  // Animated border effect on hover for project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });
  
  // Dynamic year in footer copyright
  const yearSpan = document.querySelector('.footer .year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Add typing animation effect to the header text
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    const originalText = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        heroTitle.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    setTimeout(typeWriter, 500);
  }
  
  // Highlight effect on tech items
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });
  
  // Terminal buttons hover effect
  const terminalButtons = document.querySelectorAll('.terminal-header .button');
  terminalButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.opacity = '0.8';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.opacity = '1';
    });
  });
  
  // Add subtle page flip effect when clicking on notebook sections
  const notebookSections = document.querySelectorAll('.notebook-section');
  
  notebookSections.forEach(section => {
    section.addEventListener('click', function() {
      // Small animation for "turning the page" effect
      this.style.transition = 'transform 0.3s ease';
      this.style.transform = 'scale(0.98)';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 300);
    });
  });
});
