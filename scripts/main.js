// LinkTrove Landing Page - Main JavaScript

// Demo cards data
const demoCardsData = [
  {
    title: 'React - Official Documentation',
    url: 'react.dev',
    favicon: 'https://react.dev/favicon.ico',
  },
  {
    title: 'MDN Web Docs - Resources for developers',
    url: 'developer.mozilla.org',
    favicon: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
  },
  {
    title: 'CSS-Tricks - Tips, Tricks, and Techniques',
    url: 'css-tricks.com',
    favicon: 'https://css-tricks.com/favicon.svg',
  },
  {
    title: 'GitHub - Where the world builds software',
    url: 'github.com',
    favicon: 'https://github.githubassets.com/favicons/favicon.svg',
  },
  {
    title: 'Stack Overflow - Where Developers Learn',
    url: 'stackoverflow.com',
    favicon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico',
  },
];

// Initialize demo cards
function initDemoCards() {
  const container = document.getElementById('demo-cards');
  if (!container) return;

  // Clear container
  container.innerHTML = '';

  // Create cards
  demoCardsData.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'demo-card';
    cardEl.innerHTML = `
      <img src="${card.favicon}" alt="${card.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%23ff507a%22%3E%3Cpath d=%22M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z%22/%3E%3C/svg%3E'">
      <div class="demo-card-info">
        <div class="demo-card-title">${card.title}</div>
        <div class="demo-card-url">${card.url}</div>
      </div>
    `;
    container.appendChild(cardEl);
  });

  // Initialize SortableJS
  new Sortable(container, {
    animation: 200,
    easing: 'ease-out',
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    handle: '.demo-card',
    // Enable touch support for mobile
    touchStartThreshold: 10,
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Close menu when clicking on a link
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
      navbar.classList.add('shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }

    lastScroll = currentScroll;
  });
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initDemoCards();
  initMobileMenu();
  initSmoothScroll();
  initNavbarScroll();

  console.log('LinkTrove Landing Page initialized ✨');
});
