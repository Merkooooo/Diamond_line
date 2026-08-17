import { translatePage } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  
  // Sticky Navigation scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('nav-scrolled');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('nav-scrolled');
      navbar.classList.add('bg-transparent');
    }
  });

  // Language Toggle Logic
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('diamond_lang') || 'SL';

  if (langToggle) {
    // Initial load
    if (currentLang === 'EN') {
      langToggle.innerHTML = `EN <span class="opacity-50">/ SL</span>`;
      translatePage(true);
    }
    
    // Toggle click
    langToggle.addEventListener('click', () => {
      if (currentLang === 'SL') {
        currentLang = 'EN';
        langToggle.innerHTML = `EN <span class="opacity-50">/ SL</span>`;
        translatePage(true);
      } else {
        currentLang = 'SL';
        langToggle.innerHTML = `SL <span class="opacity-50">/ EN</span>`;
        translatePage(false);
      }
      localStorage.setItem('diamond_lang', currentLang);
    });
  }
});
