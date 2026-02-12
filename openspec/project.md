# LinkTrove Landing Page - OpenSpec 專案資訊

**專案名稱：** LinkTrove Landing Page
**專案類型：** 靜態宣傳網站
**技術棧：** HTML5 + Tailwind CSS v3 + Vanilla JavaScript
**部署平台：** GitHub Pages

---

## 專案目標

為 LinkTrove Chrome 擴充功能建立一個獨立的一頁式宣傳網站，用於：
1. 展示產品核心功能與特色
2. 提供安裝指引
3. 吸引潛在使用者

---

## 設計原則

1. **簡潔明瞭** - 一頁式設計，快速傳達價值
2. **視覺優先** - 使用截圖與插圖降低理解成本
3. **響應式** - 支援所有裝置尺寸
4. **高效能** - Lighthouse Score > 90
5. **無障礙** - 符合 WCAG AA 標準

---

## 命名規範

- **檔案名稱：** kebab-case（例如 `main.css`, `hero-screenshot.png`）
- **CSS Class：** Tailwind utilities 為主
- **JavaScript：** camelCase（例如 `smoothScroll`, `mobileMenuToggle`）

---

## Git Workflow

- **主分支：** `main`
- **部署分支：** `gh-pages`（由 GitHub Actions 自動建立）
- **Commit 格式：** `type(scope): message`
  - `feat:` 新功能
  - `fix:` 修復
  - `style:` 樣式調整
  - `docs:` 文檔更新
  - `chore:` 維護工作

---

## 開發規範

### HTML
- 使用語義化標籤（`<header>`, `<main>`, `<section>`, `<footer>`）
- 所有圖片必須有 `alt` 屬性
- 標題階層正確（h1 → h2 → h3）

### CSS (Tailwind)
- 優先使用 Tailwind utilities
- 自訂樣式放在 `styles/input.css` 的 `@layer components`
- 避免 inline styles

### JavaScript
- 最小化使用（僅互動邏輯）
- 優先使用原生 API
- 支援 `prefers-reduced-motion`

---

## 瀏覽器支援

- Chrome 88+（主要目標）
- Firefox 85+
- Safari 14+
- Edge 88+

---

## 效能目標

- **Lighthouse Performance:** > 90
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Total Bundle Size:** < 500KB

---

## 無障礙目標

- **WCAG 等級：** AA
- **對比度：** ≥ 4.5:1（正文）、≥ 3:1（大字）
- **鍵盤導航：** 完全支援
- **螢幕閱讀器：** 相容 VoiceOver、NVDA

---

**建立日期：** 2026-02-12
**維護者：** LinkTrove Team
