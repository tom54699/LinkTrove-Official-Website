# LinkTrove Landing Page - 獨立專案規劃

**專案位置：** `/Users/myaninnovation/Documents/linktrove-landing/`
**Git Repository：** 獨立（不與主專案共用）
**部署目標：** GitHub Pages
**規劃日期：** 2026-02-12

---

## 📁 專案結構

```
linktrove-landing/                    # 獨立專案根目錄
├── .git/                             # 獨立的 git repository
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions 自動部署
├── index.html                        # 主頁面
├── styles/
│   ├── main.css                     # Tailwind 編譯後
│   └── input.css                    # Tailwind 原始檔
├── images/
│   ├── hero-screenshot.png
│   ├── features/
│   │   ├── three-column.png
│   │   ├── drag-drop.png
│   │   ├── realtime-sync.png
│   │   ├── batch-operations.png
│   │   ├── gist-sharing.png
│   │   └── import-export.png
│   ├── benefits/
│   │   ├── benefit-1.png
│   │   ├── benefit-2.png
│   │   └── benefit-3.png
│   └── logo.svg
├── scripts/
│   └── main.js                      # 互動邏輯（smooth scroll, mobile menu）
├── openspec/                         # 此專案的 OpenSpec 規範
│   ├── project.md                   # 專案資訊
│   ├── specs/
│   │   └── design-system/
│   │       └── spec.md              # 設計系統規格
│   └── changes/
│       └── initial-design/
│           ├── proposal.md
│           └── tasks.md
├── tailwind.config.js
├── package.json
├── package-lock.json
├── README.md
├── LICENSE                           # MIT License
└── .gitignore
```

---

## 🎨 設計系統概要

基於 LinkTrove 主專案配色，調整為亮色主題：

### 配色（延續主專案品牌色 `#ff507a`）
- **Primary:** `#ff507a` (粉紅色 - 與主專案一致)
- **Primary Light:** `#ff8da7` (淺粉紅 - Hover 狀態)
- **Primary Dark:** `#e6004d` (深粉紅 - CTA 按鈕)
- **Accent:** `#6272a4` (次要強調)
- **Background:** `#fafafa` (淺灰)
- **Text:** `#1a1a1a` (深色)
- **Border:** `#e5e5e5`

### 字型（Tech Startup Pairing）
- **Heading:** Space Grotesk
- **Body:** DM Sans

### 風格
- **主要:** Flat Design + Minimalism
- **特色:** 現代、簡潔、科技感、2D 圖形、大膽色彩

---

## 📐 頁面區塊

### 1. Hero Section
- 主標題：「一個分頁，管理所有書籤」
- 副標題：功能簡介
- CTA：「立即安裝」+ 「查看 GitHub」
- Hero 圖片：產品三欄介面截圖

### 2. Features Showcase（6 個功能卡片）
1. 三欄式介面
2. 拖放排序
3. 即時分頁同步
4. 批次操作
5. GitHub Gist 分享
6. 匯入/匯出

### 3. 🆕 Interactive Demo（互動式拖曳體驗）
- **標題：** 「試試拖曳卡片重新排序」
- **內容：** 5 張可拖曳的示範卡片（React、MDN、CSS-Tricks、GitHub、Stack Overflow）
- **互動：** 真實拖曳排序體驗（使用 SortableJS）
- **支援：** Desktop（滑鼠）+ Mobile（觸控）+ 鍵盤操作
- **視覺：** 插入線、ghost image、順序變化動畫
- **目的：** 讓訪客無需安裝即可體驗核心功能

### 4. Benefits Section（3 個利益點）
1. 告別分頁地獄
2. 研究資料系統化
3. 多裝置無痛同步

### 5. Installation Guide
- 選項 A：Chrome Web Store（推薦）
- 選項 B：從原始碼安裝（開發者）

### 6. Footer
- Logo + 連結（GitHub, Docs, Issue）
- 版權宣告

---

## 🛠️ 技術棧

- **HTML5** - 語義化標籤
- **Tailwind CSS v3** - Utility-first CSS
- **Vanilla JavaScript** - 最小化使用
- **GitHub Pages** - 靜態託管
- **GitHub Actions** - 自動部署

---

## 🚀 初始化步驟

### Step 1: Git 初始化
```bash
cd /Users/myaninnovation/Documents/linktrove-landing
git init
git branch -M main
```

### Step 2: Node.js 專案初始化
```bash
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

### Step 3: 建立基礎檔案
- `index.html` - HTML5 boilerplate
- `styles/input.css` - Tailwind directives
- `tailwind.config.js` - 主題設定
- `.gitignore` - 排除 node_modules, dist
- `README.md` - 專案說明

### Step 4: GitHub Repository
```bash
# 在 GitHub 建立新 repo: linktrove-landing
git remote add origin git@github.com:[username]/linktrove-landing.git
git add .
git commit -m "Initial commit: Project structure"
git push -u origin main
```

### Step 5: OpenSpec 規劃（選用）
```bash
mkdir -p openspec/{specs,changes}
# 建立設計系統規格
```

---

## 📋 開發時程

- **Phase 1: 基礎架構（1 天）** - 專案初始化、Tailwind 設定
- **Phase 2: 內容開發（2 天）** - 5 個區塊實作
- **Phase 3: 視覺優化（1 天）** - 圖片、圖示、動畫
- **Phase 4: 測試部署（1 天）** - 測試、GitHub Pages

**總計：約 5 天**

---

## ✅ 待確認項目

請確認以下項目後再開始實作：

- [ ] 專案資料夾位置：`/Users/myaninnovation/Documents/linktrove-landing/`
- [ ] GitHub Repository 名稱：`linktrove-landing`
- [ ] 是否需要自訂網域？（例如 `www.linktrove.app`）
- [ ] 首版語言：僅繁體中文？還是需要英文版？
- [ ] 是否需要 Google Analytics 等追蹤？
- [ ] 設計系統配色是否滿意？（可調整）

---

## 📎 參考資源

- **主專案：** `/Users/myaninnovation/Documents/LinkTrove/`
- **設計規劃：** 參考主專案的 `LANDING_PAGE_PLAN.md`
- **圖示庫：** Heroicons, Lucide Icons
- **字型：** Google Fonts (Space Grotesk + DM Sans)

---

**下一步：等待您確認後開始建立專案檔案**
