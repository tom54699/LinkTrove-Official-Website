# Tasks: initial-design

**Status:** Proposed
**Created:** 2026-02-12

---

## Phase 1: 基礎架構（預計 1 天）

### Git & Node.js 設定
- [ ] 初始化 git repository (`git init`)
- [ ] 建立 `.gitignore`（已完成 ✅）
- [ ] 初始化 npm (`npm init -y`)
- [ ] 安裝 Tailwind CSS (`npm install -D tailwindcss`)
- [ ] 建立 `tailwind.config.js`
- [ ] 建立 `package.json` scripts（dev, build:css）

### 專案結構
- [ ] 建立 `styles/input.css`（Tailwind directives）
- [ ] 建立 `scripts/main.js`
- [ ] 建立 `images/` 資料夾
- [ ] 建立 `index.html`（HTML5 boilerplate）

### Tailwind 設定
- [ ] 設定 theme colors（primary, secondary, cta, etc.）
- [ ] 設定 font families（Space Grotesk, DM Sans）
- [ ] 測試 build（`npm run build:css`）

---

## Phase 2: 內容開發（預計 2 天）

### Navigation Bar
- [ ] Logo 區塊
- [ ] 導航連結（Features, Installation, GitHub）
- [ ] CTA 按鈕（「立即安裝」）
- [ ] Mobile menu toggle
- [ ] Sticky navbar

### Hero Section
- [ ] 主標題 + 副標題
- [ ] CTA 按鈕（主要 + 次要）
- [ ] Hero 圖片準備（產品截圖）
- [ ] 漸層背景
- [ ] 響應式布局（mobile: 單欄, desktop: 兩欄）

### Features Showcase
- [ ] 建立 6 個功能卡片
  - [ ] 三欄式介面
  - [ ] 拖放排序
  - [ ] 即時分頁同步
  - [ ] 批次操作
  - [ ] GitHub Gist 分享
  - [ ] 匯入/匯出
- [ ] 每個卡片：圖示 + 標題 + 說明
- [ ] Grid 布局（1/2/3 欄）
- [ ] Hover 效果

### Benefits Section
- [ ] 3 個利益點
  - [ ] 告別分頁地獄
  - [ ] 研究資料系統化
  - [ ] 多裝置無痛同步
- [ ] 兩欄布局（文字 + 圖片）
- [ ] 數字標記（01, 02, 03）

### Installation Guide
- [ ] 選項 A：Chrome Web Store 步驟
- [ ] 選項 B：從原始碼安裝步驟
- [ ] CTA 按鈕
- [ ] 系統需求說明

### Footer
- [ ] Logo + Tagline
- [ ] 連結（GitHub, Docs, Issue, Privacy）
- [ ] 版權宣告
- [ ] 響應式布局

---

## Phase 3: 視覺優化（預計 1 天）

### 圖片準備
- [ ] Hero screenshot（1200x800px）
- [ ] Feature screenshots（6 張，600x400px）
- [ ] Benefit illustrations（3 張）
- [ ] Logo（SVG）
- [ ] 壓縮所有圖片（WebP + PNG fallback）
- [ ] 加入 alt text

### 圖示整合
- [ ] 整合 Heroicons SVG
- [ ] 確保一致尺寸（w-6 h-6 或 w-8 h-8）
- [ ] 確認顏色符合主色系

### 互動與動畫
- [ ] Smooth scroll 實作
- [ ] Hover transitions（按鈕、卡片、連結）
- [ ] `cursor-pointer` 加到可點擊元素
- [ ] `prefers-reduced-motion` 支援
- [ ] 避免使用 scale transform

### 響應式測試
- [ ] 測試 Mobile（320px, 375px, 414px）
- [ ] 測試 Tablet（768px, 1024px）
- [ ] 測試 Desktop（1440px, 1920px）
- [ ] 確認無水平捲軸
- [ ] 圖片自適應（不變形、不溢出）

---

## Phase 4: 測試與部署（預計 1 天）

### 功能測試
- [ ] 所有內部連結（smooth scroll）
- [ ] 所有外部連結（GitHub, Chrome Web Store）
- [ ] Mobile menu toggle
- [ ] CTA 按鈕點擊
- [ ] 圖片載入

### 跨瀏覽器測試
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] 確認無 console errors

### 無障礙測試
- [ ] 鍵盤導航（Tab, Enter, Esc）
- [ ] Focus states 可見
- [ ] Lighthouse Accessibility > 90
- [ ] 對比度檢查（WCAG AA）
- [ ] 所有圖片有 alt text

### 效能測試
- [ ] 壓縮圖片
- [ ] 最小化 CSS
- [ ] Lighthouse Performance > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s

### SEO 優化
- [ ] 完整 meta tags（title, description, keywords）
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] 語義化 HTML
- [ ] 標題階層正確

### GitHub 設定
- [ ] 建立 GitHub repo（linktrove-landing）
- [ ] 推送程式碼到 main
- [ ] 建立 `.github/workflows/deploy.yml`
- [ ] 啟用 GitHub Pages
- [ ] 測試自動部署

### 文檔完成
- [ ] 完成 README.md（已完成 ✅）
- [ ] 建立 LICENSE（MIT）
- [ ] 更新主專案 README 加入連結

---

## 總計

- **Phase 1:** 11 tasks
- **Phase 2:** 30 tasks
- **Phase 3:** 16 tasks
- **Phase 4:** 30 tasks

**總計：87 tasks**

---

**下一步：等待使用者審核後開始執行**
