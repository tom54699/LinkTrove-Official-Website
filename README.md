# LinkTrove Landing Page

> LinkTrove Chrome 擴充功能的官方宣傳網站

**網站：** https://[username].github.io/linktrove-landing/
**主專案：** [LinkTrove Extension](https://github.com/[username]/linktrove)

---

## 📋 專案概述

這是一個獨立的靜態網站專案，用於宣傳 LinkTrove Chrome 擴充功能。採用 HTML + Tailwind CSS，部署於 GitHub Pages。

**特色：**
- 🎨 現代設計：Flat Design + Minimalism 風格
- 📱 響應式：支援 Mobile、Tablet、Desktop
- ⚡ 高效能：Lighthouse Score > 90
- ♿ 無障礙：符合 WCAG AA 標準

---

## 🛠️ 技術棧

- **HTML5** - 語義化標籤
- **Tailwind CSS v3** - Utility-first CSS 框架
- **Vanilla JavaScript** - 互動邏輯（smooth scroll, mobile menu）
- **GitHub Pages** - 靜態網站託管
- **GitHub Actions** - 自動化部署

---

## 🚀 本地開發

### 環境需求

- Node.js 18+
- npm 或 pnpm

### 安裝與執行

```bash
# 安裝依賴
npm install

# 開發模式（Tailwind watch mode）
npm run dev

# 建置 CSS
npm run build:css

# 在瀏覽器開啟 index.html 預覽
open index.html
```

### 開發腳本

```json
{
  "dev": "npx tailwindcss -i ./styles/input.css -o ./styles/main.css --watch",
  "build:css": "npx tailwindcss -i ./styles/input.css -o ./styles/main.css --minify"
}
```

---

## 📁 專案結構

```
linktrove-landing/
├── index.html              # 主頁面
├── styles/
│   ├── input.css          # Tailwind 原始檔
│   └── main.css           # 編譯後的 CSS
├── images/                 # 圖片資源
├── scripts/
│   └── main.js            # JavaScript
├── tailwind.config.js      # Tailwind 設定
└── package.json
```

---

## 🎨 設計系統

### 配色

```css
--primary: #3B82F6;      /* 藍色 - 主要品牌色 */
--secondary: #60A5FA;    /* 淺藍 - 次要強調 */
--cta: #F97316;          /* 橙色 - CTA 按鈕 */
--background: #F8FAFC;   /* 淺灰背景 */
--text: #1E293B;         /* 深灰文字 */
--border: #E2E8F0;       /* 邊框色 */
```

### 字型

- **Heading:** Space Grotesk (Google Fonts)
- **Body:** DM Sans (Google Fonts)

---

## 🚢 部署

### 自動部署（GitHub Actions）

推送到 `main` branch 會自動觸發部署：

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions 會自動：
1. Build Tailwind CSS
2. 部署到 `gh-pages` branch
3. 更新 GitHub Pages

### 手動部署

如需手動部署：

```bash
npm run build:css
git add .
git commit -m "Build and deploy"
git push origin main
```

---

## ✅ 開發檢查清單

### 視覺品質
- [ ] 使用 SVG 圖示（不使用 emoji）
- [ ] 所有圖片有 alt text
- [ ] hover 狀態不造成布局位移

### 響應式
- [ ] 測試 320px、768px、1024px、1440px
- [ ] 無水平捲軸

### 無障礙
- [ ] 對比度 ≥ 4.5:1（WCAG AA）
- [ ] 鍵盤導航可用
- [ ] 支援 `prefers-reduced-motion`

### 效能
- [ ] Lighthouse Performance > 90
- [ ] 圖片壓縮（WebP + PNG fallback）

---

## 📄 授權

MIT License - 詳見 [LICENSE](LICENSE)

---

## 🔗 相關連結

- [LinkTrove 主專案](https://github.com/[username]/linktrove)
- [Chrome Web Store](https://chrome.google.com/webstore)
- [文檔](https://github.com/[username]/linktrove/tree/main/docs)

---

**建立日期：** 2026-02-12
**維護者：** [Your Name]
