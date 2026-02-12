# Proposal: add-interactive-drag-demo

**Status:** Proposed
**Created:** 2026-02-12
**Author:** User
**Affects Specs:** `design-system`
**Parent Change:** `initial-design`

---

## Summary

在 Landing Page 新增一個互動式區塊，讓訪客可以實際體驗拖曳卡片的功能，提升產品吸引力與轉換率。

---

## Motivation

### 問題

靜態的文字說明與截圖無法充分展現「拖曳排序」這個核心功能的流暢度與易用性。訪客需要安裝擴充功能後才能體驗，降低了轉換意願。

### 目標

1. **降低體驗門檻** - 訪客無需安裝即可體驗拖曳功能
2. **提升互動性** - 讓 Landing Page 從靜態展示變成互動體驗
3. **增加停留時間** - 互動元素吸引訪客探索
4. **強化核心價值** - 直接展示產品最大亮點

---

## Scope

### In Scope ✅

- 互動式拖曳 demo 區塊（獨立 section）
- 3-5 張示範卡片（模擬真實網頁卡片）
- 拖曳排序功能（HTML5 Drag & Drop API）
- 視覺回饋（拖曳時的 ghost image、插入線）
- 響應式設計（Mobile: 觸控拖曳, Desktop: 滑鼠拖曳）
- 簡短引導文字（「試試拖曳卡片重新排序」）

### Out of Scope ❌

- 完整的三欄布局模擬（僅展示卡片拖曳）
- 實際儲存功能（純前端展示，重新整理會重置）
- 複雜的分組功能（僅單一列表）
- 與真實擴充功能的資料同步

---

## Design

### 區塊位置

建議放在 **Features Showcase 之後、Benefits Section 之前**：

```
1. Hero Section
2. Features Showcase（6 個功能卡片）
3. 🆕 Interactive Demo（互動式拖曳體驗）
4. Benefits Section（3 個利益點）
5. Installation Guide
6. Footer
```

### 視覺設計

```
┌─────────────────────────────────────────────┐
│  試試拖曳卡片重新排序                        │
│  體驗 LinkTrove 的流暢操作                   │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────────────┐                      │
│  │  🌐 React 官方文檔 │  ← 可拖曳            │
│  │  react.dev        │                      │
│  └──────────────────┘                      │
│                                             │
│  ┌──────────────────┐                      │
│  │  📚 MDN Web Docs  │  ← 可拖曳            │
│  │  developer.moz... │                      │
│  └──────────────────┘                      │
│                                             │
│  ┌──────────────────┐                      │
│  │  💡 CSS-Tricks    │  ← 可拖曳            │
│  │  css-tricks.com   │                      │
│  └──────────────────┘                      │
│                                             │
│  [ 提示：拖曳任意卡片改變順序 ]              │
└─────────────────────────────────────────────┘
```

### 互動細節

1. **拖曳開始**
   - 卡片變透明（opacity: 0.5）
   - 游標變為 `grabbing`
   - 其他卡片微微下移騰出空間

2. **拖曳中**
   - 顯示插入線（粉紅色虛線，2px，與主專案一致）
   - 平滑動畫（ease-out 200ms）
   - Ghost image 跟隨滑鼠

3. **放下**
   - 卡片滑入新位置（smooth transition）
   - 其他卡片調整位置
   - 順序更新

4. **視覺回饋**
   - 成功放下：卡片閃爍綠色邊框（1 次）
   - 可拖曳提示：hover 時顯示拖曳 icon

### 示範卡片內容

使用真實且知名的網站，方便訪客理解：

1. **React 官方文檔**
   - Favicon: React logo
   - Title: React - The library for web and native user interfaces
   - URL: react.dev

2. **MDN Web Docs**
   - Favicon: MDN logo
   - Title: MDN Web Docs - Resources for developers
   - URL: developer.mozilla.org

3. **CSS-Tricks**
   - Favicon: CSS-Tricks logo
   - Title: CSS-Tricks - Tips, Tricks, and Techniques
   - URL: css-tricks.com

4. **GitHub**
   - Favicon: GitHub logo
   - Title: GitHub - Where the world builds software
   - URL: github.com

5. **Stack Overflow**
   - Favicon: Stack Overflow logo
   - Title: Stack Overflow - Where Developers Learn & Share
   - URL: stackoverflow.com

---

## Technical Design

### HTML 結構

```html
<section id="interactive-demo" class="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-4xl font-heading font-bold text-center mb-4">
      試試拖曳卡片重新排序
    </h2>
    <p class="text-center text-gray-600 mb-12">
      體驗 LinkTrove 的流暢操作，就像整理真實的書籤一樣簡單
    </p>

    <div id="demo-cards" class="space-y-3 max-w-md mx-auto">
      <!-- 卡片會由 JavaScript 動態生成 -->
    </div>

    <p class="text-center text-sm text-gray-500 mt-6">
      💡 提示：拖曳任意卡片改變順序
    </p>
  </div>
</section>
```

### JavaScript 實作

**選項 A：HTML5 Drag & Drop API（原生）**
- ✅ 優點：無需外部庫、輕量
- ❌ 缺點：Mobile 支援需額外處理

**選項 B：SortableJS（推薦）**
- ✅ 優點：Mobile/Desktop 都支援、動畫流暢、API 簡潔
- ✅ 體積：~10KB gzipped
- ❌ 缺點：需引入外部庫

**建議使用 SortableJS**，範例：

```html
<script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
<script>
  const demoCards = document.getElementById('demo-cards');

  new Sortable(demoCards, {
    animation: 200,
    easing: 'ease-out',
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    handle: '.card',
    // Mobile touch support enabled by default
  });
</script>
```

### CSS 樣式

```css
/* Demo 卡片樣式 */
.demo-card {
  @apply bg-white p-4 rounded-xl shadow-md border border-gray-200;
  @apply flex items-center gap-4 cursor-grab;
  @apply transition-all duration-200;
}

.demo-card:hover {
  @apply shadow-lg border-[#ff507a]/30;
}

.demo-card:active {
  @apply cursor-grabbing;
}

/* 拖曳狀態 */
.sortable-ghost {
  @apply opacity-50 bg-[#ff507a]/10;
}

.sortable-chosen {
  @apply shadow-xl;
}

.sortable-drag {
  @apply rotate-2 scale-105;
}

/* Favicon */
.demo-card img {
  @apply w-10 h-10 rounded-lg;
}

/* 標題與 URL */
.demo-card-title {
  @apply font-medium text-gray-900 truncate;
}

.demo-card-url {
  @apply text-sm text-gray-500 truncate;
}
```

---

## Implementation Plan

### Phase 1: 基礎結構（30 分鐘）
- [ ] 建立 HTML section
- [ ] 引入 SortableJS CDN
- [ ] 建立 5 張示範卡片（hardcoded data）

### Phase 2: 樣式設計（1 小時）
- [ ] 卡片樣式（與主專案風格一致）
- [ ] Hover 狀態
- [ ] 拖曳狀態（ghost, chosen, drag）
- [ ] 響應式調整

### Phase 3: 互動邏輯（1 小時）
- [ ] 初始化 SortableJS
- [ ] 設定動畫參數
- [ ] 測試 Desktop 拖曳
- [ ] 測試 Mobile 觸控拖曳
- [ ] 視覺回饋（閃爍綠框）

### Phase 4: 優化（30 分鐘）
- [ ] 效能測試（60 FPS）
- [ ] 無障礙支援（鍵盤操作）
- [ ] 跨瀏覽器測試
- [ ] 引導文字優化

**總時程：約 3 小時**

---

## Accessibility

### 鍵盤支援

使用 SortableJS 的鍵盤外掛：

```html
<script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/modular/sortable.core.esm.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/plugins/OnSpill/OnSpill.js"></script>
```

**操作方式：**
- `Tab` - 聚焦到卡片
- `Space` 或 `Enter` - 選取卡片
- `↑/↓` - 移動卡片
- `Space` 或 `Enter` - 放下卡片

### ARIA 標記

```html
<div role="list" aria-label="可拖曳的示範卡片">
  <div role="listitem" tabindex="0" aria-grabbed="false">
    <!-- Card content -->
  </div>
</div>
```

---

## Performance

### 效能考量

- **庫大小：** SortableJS ~10KB gzipped（可接受）
- **動畫：** 使用 CSS transform（GPU 加速）
- **卡片數量：** 僅 5 張（對效能無影響）
- **Lazy loading：** 可選（在 viewport 內才初始化）

### 優化策略

1. **延遲載入：** 使用 Intersection Observer，卷軸到 demo 區塊才初始化
2. **Passive listeners：** 觸控事件使用 passive mode
3. **Debounce：** 排序變化事件節流（非必要，卡片少）

---

## Alternatives Considered

### 1. 影片展示（已否決）
- ❌ 缺乏互動性
- ❌ 檔案大小較大
- ❌ 無法傳達「真實操作感」

### 2. GIF 動畫（已否決）
- ❌ 檔案大小大（500KB+）
- ❌ 循環播放可能令人分心
- ❌ 無法互動

### 3. Canvas 動畫（已否決）
- ❌ 開發時間長
- ❌ 無障礙支援困難
- ❌ 過度設計

### 4. HTML5 Drag & Drop API（備選）
- ✅ 原生支援、無依賴
- ❌ Mobile 支援需額外處理
- ❌ API 較複雜

**結論：SortableJS 最佳平衡（易用性 + 效能 + 跨平台）**

---

## Success Criteria

- [ ] Desktop 滑鼠拖曳流暢（60 FPS）
- [ ] Mobile 觸控拖曳正常運作
- [ ] 鍵盤操作支援（Tab + 方向鍵）
- [ ] 視覺回饋清晰（插入線、ghost image）
- [ ] 響應式設計在所有尺寸正常顯示
- [ ] 跨瀏覽器測試通過（Chrome, Firefox, Safari, Edge）
- [ ] Lighthouse Performance 影響 < 5 分

---

## Risks & Mitigations

| 風險 | 影響 | 緩解措施 |
|------|------|---------|
| Mobile 觸控衝突（scroll vs drag）| 中 | SortableJS 已處理，設定 `forceFallback: false` |
| 效能影響 | 低 | 僅 5 張卡片 + 延遲載入 |
| CDN 失效 | 低 | 使用 jsDelivr（高可用）+ npm fallback |
| 使用者不理解如何操作 | 中 | 加入明確引導文字 + 首次載入時輕微動畫提示 |

---

## Open Questions

1. **卡片數量：** 5 張是否足夠？還是需要更多？
   - 建議：5 張（太多會分散注意力）

2. **重置按鈕：** 是否需要「重置順序」按鈕？
   - 建議：不需要（重新整理即可重置，保持簡潔）

3. **引導動畫：** 首次載入時是否自動播放一次拖曳示範？
   - 建議：可選（提升易懂性，但需確保不干擾）

---

## Approval

- [ ] 使用者核准互動 demo 概念
- [ ] 使用者核准使用 SortableJS（~10KB）
- [ ] 使用者核准示範卡片內容（5 個知名網站）
- [ ] 使用者核准區塊位置（Features 後、Benefits 前）

---

**下一步：等待使用者審核後整合到 initial-design tasks**
