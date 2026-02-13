// Language translations
const translations = {
  'zh-TW': {
    // Meta
    'meta.title': 'LinkTrove - 一個分頁，管理所有書籤',
    'meta.description': '為重度分頁使用者設計的 Chrome 擴充功能。四層級架構、拖放排序、即時同步、批次操作，讓你的研究資料井然有序。',

    // Navigation
    'nav.features': '功能特色',
    'nav.demo': '互動展示',
    'nav.installation': '安裝指南',
    'nav.install_cta': '立即安裝',

    // Hero Section
    'hero.title': '一個分頁，管理所有書籤',
    'hero.subtitle': '為重度分頁使用者設計的 Chrome 擴充功能。四層級架構、拖放排序、即時同步、批次操作，讓你的研究資料井然有序。',
    'hero.cta': '免費安裝',
    'hero.learn_more': '了解更多',

    // Features Section
    'features.title': '功能特色',
    'features.subtitle': '專為重度分頁使用者設計的強大功能',

    'feature.hierarchy.title': '四層級架構',
    'feature.hierarchy.desc': '組織 → 集合 → 群組 → 卡片 層級管理，讓大量書籤井然有序',

    'feature.dnd.title': '拖放排序',
    'feature.dnd.desc': '直覺拖放卡片，自由重新排序，順序永久保存',

    'feature.sync.title': '即時分頁同步',
    'feature.sync.desc': '多視窗分頁即時同步，支援跨視窗拖動',

    'feature.batch.title': '批次操作',
    'feature.batch.desc': '多選卡片、批次刪除/移動/開啟，提升管理效率',

    'feature.share.title': 'GitHub Gist 分享',
    'feature.share.desc': '一鍵產生分享連結，透過 GitHub Gist 公開或私密分享',

    'feature.import.title': '匯入/匯出',
    'feature.import.desc': '支援 Toby v3/v4 JSON、HTML 書籤匯入，完整備份還原',

    // Demo Section
    'demo.title': '試試將分頁儲存為卡片',
    'demo.subtitle': '拖曳右側的開啟分頁到左側，體驗儲存書籤的流暢操作',
    'demo.saved_cards': '已儲存卡片',
    'demo.open_tabs': '開啟的分頁',
    'demo.drag_hint': '將分頁拖曳到這裡儲存',
    'demo.caption': '層級化介面設計',

    // Benefits Section
    'benefits.title': '為什麼選擇 LinkTrove',
    'benefits.subtitle': '從使用者視角出發，解決真實痛點',

    'benefit1.number': '01',
    'benefit1.title': '告別分頁地獄',
    'benefit1.desc': 'Chrome 分頁過多導致記憶體爆炸、找不到需要的網頁？將分頁儲存為卡片，需要時快速搜尋（Ctrl+K）開啟，讓瀏覽器保持輕盈。',

    'benefit2.number': '02',
    'benefit2.title': '研究資料系統化',
    'benefit2.desc': '研究資料散落各處，難以整理分類？使用階層式組織（組織 → 集合 → 群組 → 卡片），讓知識管理井然有序。',

    'benefit3.number': '03',
    'benefit3.title': '多裝置無痛同步',
    'benefit3.desc': '換電腦或瀏覽器時書籤遺失？支援 Google Drive 雲端同步，跨裝置自動備份。也可匯出 JSON 備份，隨時還原。',

    // Installation Section
    'install.title': '開始使用 LinkTrove',
    'install.subtitle': '選擇適合你的安裝方式',
    'install.step1.title': '步驟 1：安裝擴充功能',
    'install.step1.desc': '從 Chrome Web Store 下載安裝 LinkTrove 擴充功能',
    'install.step1.button': '前往 Chrome Web Store',

    'install.step2.title': '步驟 2：開啟新分頁',
    'install.step2.desc': '安裝完成後，開啟新分頁即可看到 LinkTrove 介面',

    'install.step3.title': '步驟 3：開始整理書籤',
    'install.step3.desc': '建立你的第一個集合，開始儲存分頁',

    // Footer
    'footer.tagline': '重新定義瀏覽器書籤管理體驗',
    'footer.features_title': '功能',
    'footer.features.hierarchy': '四層級架構',
    'footer.features.dnd': '拖放排序',
    'footer.features.sync': '即時同步',

    'footer.about_title': '關於',
    'footer.about.benefits': '為什麼選擇我們',
    'footer.about.get_started': '開始使用',
    'footer.about.privacy': '隱私權政策',

    'footer.copyright': '© 2026 LinkTrove. All rights reserved.',
  },

  'en': {
    // Meta
    'meta.title': 'LinkTrove - One Tab, All Your Bookmarks',
    'meta.description': 'Chrome extension for power users. 4-tier architecture, drag & drop, real-time sync, batch operations. Keep your research organized.',

    // Navigation
    'nav.features': 'Features',
    'nav.demo': 'Demo',
    'nav.installation': 'Installation',
    'nav.install_cta': 'Install Now',

    // Hero Section
    'hero.title': 'One Tab, All Your Bookmarks',
    'hero.subtitle': 'Chrome extension designed for power tab users. 4-tier architecture, drag & drop, real-time sync, batch operations—keep your research perfectly organized.',
    'hero.cta': 'Free Install',
    'hero.learn_more': 'Learn More',

    // Features Section
    'features.title': 'Features',
    'features.subtitle': 'Powerful features designed for heavy tab users',

    'feature.hierarchy.title': '4-Tier Architecture',
    'feature.hierarchy.desc': 'Organizations → Collections → Groups → Cards hierarchical management for organized bookmarks',

    'feature.dnd.title': 'Drag & Drop',
    'feature.dnd.desc': 'Intuitive drag-and-drop cards, freely reorder, permanently saved',

    'feature.sync.title': 'Real-time Tab Sync',
    'feature.sync.desc': 'Multi-window tab real-time sync with cross-window drag support',

    'feature.batch.title': 'Batch Operations',
    'feature.batch.desc': 'Multi-select cards, batch delete/move/open for efficient management',

    'feature.share.title': 'GitHub Gist Sharing',
    'feature.share.desc': 'One-click generate sharing links via GitHub Gist, public or private',

    'feature.import.title': 'Import/Export',
    'feature.import.desc': 'Support Toby v3/v4 JSON, HTML bookmarks import, full backup & restore',

    // Demo Section
    'demo.title': 'Try Saving Tabs as Cards',
    'demo.subtitle': 'Drag tabs from the right to the left to experience seamless bookmark saving',
    'demo.saved_cards': 'Saved Cards',
    'demo.open_tabs': 'Open Tabs',
    'demo.drag_hint': 'Drag tabs here to save',
    'demo.caption': 'Hierarchical Interface Design',

    // Benefits Section
    'benefits.title': 'Why Choose LinkTrove',
    'benefits.subtitle': 'Solving real pain points from users\' perspective',

    'benefit1.number': '01',
    'benefit1.title': 'Say Goodbye to Tab Hell',
    'benefit1.desc': 'Too many Chrome tabs causing memory explosion, can\'t find the pages you need? Save tabs as cards, quickly search (Ctrl+K) to open when needed, keep your browser light.',

    'benefit2.number': '02',
    'benefit2.title': 'Systematize Research Data',
    'benefit2.desc': 'Research data scattered everywhere, hard to organize? Use hierarchical organization (Organizations → Collections → Groups → Cards) for well-organized knowledge management.',

    'benefit3.number': '03',
    'benefit3.title': 'Painless Multi-device Sync',
    'benefit3.desc': 'Lost bookmarks when switching computers or browsers? Supports Google Drive cloud sync for automatic cross-device backup. Also export JSON backups anytime.',

    // Installation Section
    'install.title': 'Get Started with LinkTrove',
    'install.subtitle': 'Choose the installation method that suits you',
    'install.step1.title': 'Step 1: Install Extension',
    'install.step1.desc': 'Download and install LinkTrove extension from Chrome Web Store',
    'install.step1.button': 'Go to Chrome Web Store',

    'install.step2.title': 'Step 2: Open New Tab',
    'install.step2.desc': 'After installation, open a new tab to see LinkTrove interface',

    'install.step3.title': 'Step 3: Start Organizing Bookmarks',
    'install.step3.desc': 'Create your first collection and start saving tabs',

    // Footer
    'footer.tagline': 'Redefining browser bookmark management',
    'footer.features_title': 'Features',
    'footer.features.hierarchy': '4-Tier Architecture',
    'footer.features.dnd': 'Drag & Drop',
    'footer.features.sync': 'Real-time Sync',

    'footer.about_title': 'About',
    'footer.about.benefits': 'Why Choose Us',
    'footer.about.get_started': 'Get Started',
    'footer.about.privacy': 'Privacy Policy',

    'footer.copyright': '© 2026 LinkTrove. All rights reserved.',
  }
};

// Language switcher
class I18n {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.init();
  }

  detectLanguage() {
    // Check localStorage first
    const saved = localStorage.getItem('linktrove-lang');
    if (saved && translations[saved]) {
      return saved;
    }

    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
      return 'zh-TW';
    }

    return 'en';
  }

  init() {
    this.applyLanguage(this.currentLang);
  }

  switchLanguage(lang) {
    if (!translations[lang]) return;

    this.currentLang = lang;
    localStorage.setItem('linktrove-lang', lang);
    this.applyLanguage(lang);

    // Update active button state
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });
  }

  applyLanguage(lang) {
    const dict = translations[lang];

    // Update meta tags
    document.title = dict['meta.title'];
    document.querySelector('meta[name="description"]')?.setAttribute('content', dict['meta.description']);
    document.querySelector('meta[name="title"]')?.setAttribute('content', dict['meta.title']);

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = dict[key];

      if (translation) {
        // Handle different element types
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.getAttribute('placeholder') !== null) {
            el.setAttribute('placeholder', translation);
          } else {
            el.value = translation;
          }
        } else {
          el.textContent = translation;
        }
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh-TW' ? 'zh-TW' : 'en';
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Export
window.i18n = new I18n();
