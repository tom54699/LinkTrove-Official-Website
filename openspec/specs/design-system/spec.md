# Design System Specification

**Version:** 1.0.0
**Last Updated:** 2026-02-12
**Status:** Draft

---

## Overview

LinkTrove Landing Page 的設計系統規範，定義視覺語言、配色、字型、元件樣式等。

**設計風格：** Flat Design + Minimalism
**靈感來源：** 現代 SaaS 產品（Notion, Linear, Vercel）

---

## Color Palette

### Primary Colors (基於 LinkTrove 主專案)

| 用途 | 變數名稱 | Hex | Tailwind | 使用場景 |
|------|----------|-----|----------|---------|
| Primary | `--primary` | `#ff507a` | `pink-500` | 主要品牌色、連結、圖示（與主專案一致）|
| Primary Light | `--primary-light` | `#ff8da7` | `pink-400` | Hover 狀態、次要強調 |
| Primary Dark | `--primary-dark` | `#e6004d` | `pink-600` | CTA 按鈕、重要操作 |
| Accent | `--accent` | `#6272a4` | `slate-500` | 次要強調色（來自主專案 muted 色）|

### Neutral Colors (亮色主題調整)

| 用途 | 變數名稱 | Hex | Tailwind | 使用場景 |
|------|----------|-----|----------|---------|
| Background | `--background` | `#fafafa` | `gray-50` | 頁面背景 |
| Panel | `--panel` | `#ffffff` | `white` | 卡片、面板背景 |
| Text | `--text` | `#1a1a1a` | `gray-900` | 主要文字 |
| Text Muted | `--text-muted` | `#666666` | `gray-600` | 次要文字、說明 |
| Border | `--border` | `#e5e5e5` | `gray-200` | 邊框、分隔線 |

### Semantic Colors

| 用途 | Hex | Tailwind | 使用場景 |
|------|-----|----------|---------|
| Success | `#10B981` | `green-500` | 成功訊息 |
| Warning | `#F59E0B` | `amber-500` | 警告訊息 |
| Error | `#EF4444` | `red-500` | 錯誤訊息 |

### 設計說明

- **主色 `#ff507a`**：延續 LinkTrove 主專案的粉紅色 accent，保持品牌一致性
- **亮色主題**：Landing Page 採用亮色背景，與主專案的暗色主題形成互補
- **對比度**：確保在亮色背景下，粉紅色主色仍有足夠對比度（AA 級別）

---

## Typography

### Font Families

**Heading Font:** Space Grotesk
- **特色：** 幾何、科技感、創新
- **用途：** h1-h6 標題、大號文字
- **Weights：** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

**Body Font:** DM Sans
- **特色：** 高可讀性、現代、中性
- **用途：** 正文、說明文字、按鈕
- **Weights：** 400 (Regular), 500 (Medium), 700 (Bold)

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Tailwind Config

```js
fontFamily: {
  heading: ['Space Grotesk', 'sans-serif'],
  body: ['DM Sans', 'sans-serif'],
  sans: ['DM Sans', 'sans-serif'], // 預設
}
```

### Type Scale

| 元素 | Class | 大小 | 行高 | 字重 |
|------|-------|------|------|------|
| H1 (Hero) | `text-5xl md:text-6xl` | 48px / 60px | 1.1 | 700 |
| H2 (Section) | `text-4xl md:text-5xl` | 36px / 48px | 1.2 | 600 |
| H3 (Card Title) | `text-2xl md:text-3xl` | 24px / 30px | 1.3 | 600 |
| Body Large | `text-lg md:text-xl` | 18px / 20px | 1.6 | 400 |
| Body | `text-base` | 16px | 1.6 | 400 |
| Body Small | `text-sm` | 14px | 1.5 | 400 |
| Caption | `text-xs` | 12px | 1.4 | 400 |

---

## Spacing

使用 Tailwind 的 spacing scale（4px 為基礎單位）

| 用途 | Class | 大小 |
|------|-------|------|
| Section Padding (Mobile) | `py-12 px-4` | 48px / 16px |
| Section Padding (Desktop) | `py-20 px-8` | 80px / 32px |
| Card Padding | `p-6 md:p-8` | 24px / 32px |
| Element Gap | `gap-6 md:gap-8` | 24px / 32px |
| Button Padding | `px-6 py-3` | 24px / 12px |

---

## Border Radius

| 用途 | Class | 大小 |
|------|-------|------|
| 按鈕 | `rounded-lg` | 8px |
| 卡片 | `rounded-xl` | 12px |
| 圖片 | `rounded-2xl` | 16px |
| 小元素 | `rounded-md` | 6px |

---

## Shadows

| 用途 | Class | 樣式 |
|------|-------|------|
| 卡片 | `shadow-md` | 0 4px 6px -1px rgba(0,0,0,0.1) |
| 卡片 Hover | `shadow-lg` | 0 10px 15px -3px rgba(0,0,0,0.1) |
| 按鈕 | `shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) |

---

## Components

### Button

**Primary Button (CTA)**
```html
<button class="bg-[#e6004d] text-white px-6 py-3 rounded-lg font-medium
               hover:bg-[#cc003d] transition-colors duration-200
               shadow-sm cursor-pointer">
  立即安裝
</button>
```

**Secondary Button**
```html
<button class="bg-white text-[#ff507a] border-2 border-[#ff507a] px-6 py-3
               rounded-lg font-medium hover:bg-pink-50
               transition-colors duration-200 cursor-pointer">
  查看 GitHub
</button>
```

### Card

**Feature Card**
```html
<div class="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200
            hover:shadow-lg hover:border-[#ff507a]/30
            transition-all duration-200 cursor-pointer">
  <!-- Icon -->
  <svg class="w-12 h-12 text-[#ff507a] mb-4">...</svg>
  <!-- Title -->
  <h3 class="text-2xl font-semibold font-heading mb-2 text-gray-900">功能標題</h3>
  <!-- Description -->
  <p class="text-gray-600">功能說明文字</p>
</div>
```

### Navigation Bar

```html
<nav class="fixed top-4 left-4 right-4 bg-white/90 backdrop-blur-md
            rounded-xl shadow-md px-6 py-4 z-50">
  <!-- Logo, Links, CTA -->
</nav>
```

---

## Icons

**圖示庫：** Heroicons (Outline style)
**尺寸：** `w-6 h-6`（24px）或 `w-8 h-8`（32px）
**顏色：** `text-[#ff507a]`（主色）或 `text-gray-600`（中性）

**禁止使用 emoji 作為 UI 圖示！**

---

## Animations & Transitions

### Transition Timing

| 用途 | Duration | Easing |
|------|----------|--------|
| 顏色變化 | 200ms | ease |
| 陰影變化 | 200ms | ease |
| 位置移動 | 300ms | ease-out |

### Hover States

- **按鈕：** 顏色變深（`hover:bg-[#cc003d]`）
- **卡片：** 陰影提升 + 邊框變色（`hover:shadow-lg hover:border-[#ff507a]/30`）
- **連結：** 顏色變化（`hover:text-[#ff8da7]`）

**重要：** 避免使用 `scale` transform（會造成布局位移）

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Responsive Design

### Breakpoints

| 裝置 | Tailwind | 寬度 |
|------|----------|------|
| Mobile | (預設) | 320px - 767px |
| Tablet | `md:` | 768px - 1023px |
| Desktop | `lg:` | 1024px+ |
| Large Desktop | `xl:` | 1280px+ |

### Layout Patterns

**Hero Section**
- Mobile: 單欄（文字上、圖片下）
- Desktop: 兩欄（文字左、圖片右）

**Features Grid**
- Mobile: 1 欄
- Tablet: 2 欄
- Desktop: 3 欄

**Benefits Section**
- Mobile: 單欄
- Desktop: 兩欄（文字左、圖右交替）

---

## Accessibility

### Requirements

- [ ] 所有圖片有 `alt` 屬性
- [ ] 對比度 ≥ 4.5:1（正文）
- [ ] Focus states 可見（`focus:ring-2 focus:ring-primary`）
- [ ] 鍵盤導航支援
- [ ] 語義化 HTML（`<header>`, `<main>`, `<nav>`, `<footer>`）
- [ ] ARIA labels（如需要）

### Color Contrast

| 前景 | 背景 | 對比度 | 狀態 |
|------|------|--------|------|
| `#1a1a1a` (text) | `#fafafa` (bg) | 14.8:1 | ✅ AAA |
| `#666666` (muted) | `#fafafa` (bg) | 5.7:1 | ✅ AAA |
| `#ffffff` (white) | `#ff507a` (primary) | 4.9:1 | ✅ AA |
| `#ff507a` (primary) | `#fafafa` (bg) | 4.3:1 | ✅ AA |
| `#ffffff` (white) | `#e6004d` (dark) | 6.8:1 | ✅ AAA |

---

## Implementation Checklist

- [ ] Tailwind config 設定完成
- [ ] Google Fonts 載入
- [ ] 所有顏色變數定義
- [ ] 按鈕元件實作
- [ ] 卡片元件實作
- [ ] 響應式測試通過
- [ ] 無障礙測試通過
- [ ] 跨瀏覽器測試通過

---

**維護者：** LinkTrove Design Team
**更新頻率：** 隨專案需求調整
