// LinkTrove Landing Page - Main JavaScript

// Open tabs data (simulating browser tabs)
const openTabsData = [
  {
    title: 'React - Official Documentation',
    url: 'react.dev',
    favicon: 'https://react.dev/favicon.ico',
  },
  {
    title: 'MDN Web Docs',
    url: 'developer.mozilla.org',
    favicon: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
  },
  {
    title: 'CSS-Tricks',
    url: 'css-tricks.com',
    favicon: 'https://css-tricks.com/favicon.svg',
  },
  {
    title: 'GitHub',
    url: 'github.com',
    favicon: 'https://github.githubassets.com/favicons/favicon.svg',
  },
  {
    title: 'Stack Overflow',
    url: 'stackoverflow.com',
    favicon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico',
  },
];

// Saved cards counter
let savedCardsCount = 0;

// Initialize demo
function initDemo() {
  const openTabsContainer = document.getElementById('open-tabs');
  const savedCardsContainer = document.getElementById('saved-cards');
  const emptyState = document.getElementById('empty-state');

  if (!openTabsContainer || !savedCardsContainer) return;

  // Create open tabs (draggable)
  openTabsData.forEach((tab, index) => {
    const tabEl = document.createElement('div');
    tabEl.className = 'open-tab bg-white p-3 rounded-lg border border-gray-200 cursor-grab hover:border-primary/50 hover:shadow-md transition-all duration-200';
    tabEl.draggable = true;
    tabEl.dataset.tabIndex = index;
    tabEl.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="${tab.favicon}" alt="${tab.title}" class="w-6 h-6 rounded flex-shrink-0" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%23ff507a%22%3E%3Cpath d=%22M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z%22/%3E%3C/svg%3E'">
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium text-gray-900 truncate">${tab.title}</div>
          <div class="text-xs text-gray-500 truncate">${tab.url}</div>
        </div>
        <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    `;

    // Drag start
    tabEl.addEventListener('dragstart', (e) => {
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('text/plain', index.toString());
      tabEl.style.opacity = '0.5';
    });

    // Drag end
    tabEl.addEventListener('dragend', (e) => {
      tabEl.style.opacity = '1';
    });

    openTabsContainer.appendChild(tabEl);
  });

  // Set up drop zone
  savedCardsContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    savedCardsContainer.classList.add('ring-2', 'ring-primary', 'ring-opacity-50');
  });

  savedCardsContainer.addEventListener('dragleave', (e) => {
    if (e.target === savedCardsContainer) {
      savedCardsContainer.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50');
    }
  });

  savedCardsContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    savedCardsContainer.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50');

    const tabIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const tabData = openTabsData[tabIndex];

    if (!tabData) return;

    // Hide empty state
    if (emptyState) {
      emptyState.style.display = 'none';
    }

    // Create saved card
    const cardEl = document.createElement('div');
    cardEl.className = 'saved-card bg-white p-4 rounded-xl border border-gray-200 shadow-sm opacity-0 transform scale-95 transition-all duration-300';
    cardEl.innerHTML = `
      <div class="flex items-start gap-3">
        <img src="${tabData.favicon}" alt="${tabData.title}" class="w-10 h-10 rounded-lg flex-shrink-0" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%23ff507a%22%3E%3Cpath d=%22M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z%22/%3E%3C/svg%3E'">
        <div class="flex-1 min-w-0">
          <div class="font-medium text-gray-900 mb-1">${tabData.title}</div>
          <div class="text-sm text-gray-500 truncate">${tabData.url}</div>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">✓ 已儲存</span>
        </div>
      </div>
    `;

    savedCardsContainer.appendChild(cardEl);

    // Animate in
    setTimeout(() => {
      cardEl.classList.remove('opacity-0', 'scale-95');
      cardEl.classList.add('opacity-100', 'scale-100');
    }, 10);

    // Success feedback
    savedCardsCount++;

    // Flash border green
    setTimeout(() => {
      cardEl.classList.add('ring-2', 'ring-green-500');
      setTimeout(() => {
        cardEl.classList.remove('ring-2', 'ring-green-500');
      }, 500);
    }, 300);
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
  initDemo();
  initMobileMenu();
  initSmoothScroll();
  initNavbarScroll();

  console.log('LinkTrove Landing Page initialized ✨');
});
