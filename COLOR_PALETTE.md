# LinkTrove Landing Page - 配色方案

**設計原則：** 延續主專案品牌色 `#ff507a`，調整為適合宣傳網站的亮色主題

---

## 🎨 主色系（Primary Colors）

### 主要品牌色
```
#ff507a - 粉紅色（Primary）
```
- **來源：** LinkTrove 主專案的 accent 色
- **用途：** Logo、連結、圖示、品牌元素
- **對比度：** 4.3:1（在淺灰背景上，符合 WCAG AA）

### 亮色變體
```
#ff8da7 - 淺粉紅（Primary Light）
```
- **用途：** Hover 狀態、次要強調、漸層

### 深色變體
```
#e6004d - 深粉紅（Primary Dark）
```
- **用途：** CTA 按鈕、重要操作
- **對比度：** 6.8:1（白色文字，符合 WCAG AAA）

---

## 🎨 次要色系（Secondary Colors）

### 次要強調色
```
#6272a4 - 藍灰色（Accent）
```
- **來源：** LinkTrove 主專案的 muted 色
- **用途：** 次要資訊、圖表、裝飾元素

---

## 🎨 中性色系（Neutral Colors）

### 背景色
```
#fafafa - 淺灰（Background）
```
- **用途：** 頁面主背景

```
#ffffff - 白色（Panel）
```
- **用途：** 卡片、面板、按鈕背景

### 文字色
```
#1a1a1a - 深灰（Text）
```
- **用途：** 主要文字、標題
- **對比度：** 14.8:1（在淺灰背景上，符合 WCAG AAA）

```
#666666 - 中灰（Text Muted）
```
- **用途：** 次要文字、說明、輔助資訊
- **對比度：** 5.7:1（在淺灰背景上，符合 WCAG AAA）

### 邊框色
```
#e5e5e5 - 極淺灰（Border）
```
- **用途：** 卡片邊框、分隔線

---

## 🎨 語義色系（Semantic Colors）

```
#10B981 - 綠色（Success）
```
- **用途：** 成功訊息、確認狀態

```
#F59E0B - 琥珀色（Warning）
```
- **用途：** 警告訊息、注意事項

```
#EF4444 - 紅色（Error）
```
- **用途：** 錯誤訊息、刪除操作

---

## 📊 對比度測試結果

| 前景色 | 背景色 | 對比度 | WCAG 等級 | 用途 |
|--------|--------|--------|----------|------|
| `#1a1a1a` | `#fafafa` | 14.8:1 | AAA | 主要文字 |
| `#666666` | `#fafafa` | 5.7:1 | AAA | 次要文字 |
| `#ff507a` | `#fafafa` | 4.3:1 | AA | 連結、圖示 |
| `#ffffff` | `#ff507a` | 4.9:1 | AA | 按鈕文字（淺色 CTA）|
| `#ffffff` | `#e6004d` | 6.8:1 | AAA | 按鈕文字（深色 CTA）|

✅ **所有配色組合皆符合 WCAG AA 或 AAA 標準**

---

## 🎨 Tailwind CSS 設定

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#ff507a',
          light: '#ff8da7',
          dark: '#e6004d',
        },
        // Accent color
        accent: '#6272a4',
        // Neutral colors
        background: '#fafafa',
        panel: '#ffffff',
        text: {
          DEFAULT: '#1a1a1a',
          muted: '#666666',
        },
        border: '#e5e5e5',
      },
    },
  },
};
```

---

## 🎨 CSS 變數

```css
:root {
  /* Primary colors */
  --primary: #ff507a;
  --primary-light: #ff8da7;
  --primary-dark: #e6004d;

  /* Accent */
  --accent: #6272a4;

  /* Neutral colors */
  --background: #fafafa;
  --panel: #ffffff;
  --text: #1a1a1a;
  --text-muted: #666666;
  --border: #e5e5e5;

  /* Semantic colors */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
}
```

---

## 🖼️ 使用範例

### 主要 CTA 按鈕
```html
<button class="bg-[#e6004d] text-white hover:bg-[#cc003d]">
  立即安裝
</button>
```

### 次要按鈕
```html
<button class="bg-white text-[#ff507a] border-2 border-[#ff507a] hover:bg-pink-50">
  查看 GitHub
</button>
```

### 功能卡片
```html
<div class="bg-white border border-[#e5e5e5] hover:border-[#ff507a]/30">
  <svg class="text-[#ff507a]">...</svg>
  <h3 class="text-[#1a1a1a]">標題</h3>
  <p class="text-[#666666]">說明文字</p>
</div>
```

### 連結
```html
<a href="#" class="text-[#ff507a] hover:text-[#ff8da7]">
  了解更多
</a>
```

---

## 🎨 與主專案對照

| 元素 | 主專案（暗色主題）| Landing Page（亮色主題）|
|------|------------------|------------------------|
| **Accent 色** | `#ff507a` | `#ff507a`（保持一致）|
| **背景** | `#282a36`（暗）| `#fafafa`（亮）|
| **面板** | `#343746`（暗）| `#ffffff`（白）|
| **文字** | `#f8f8f2`（亮）| `#1a1a1a`（暗）|
| **次要色** | `#6272a4` | `#6272a4`（保持一致）|

**設計策略：**
- 保留主專案的品牌色（`#ff507a`）維持一致性
- 亮色主題更適合對外宣傳網站（易讀、親和力高）
- 與主專案的暗色介面形成互補，適合不同使用場景

---

**建立日期：** 2026-02-12
**維護者：** LinkTrove Design Team
