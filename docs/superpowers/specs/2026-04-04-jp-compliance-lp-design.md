# JP Compliance Landing Page Design Spec

## Overview

JPコンプライアンス（製薬企業向けコンプライアンス支援会社）のシングルページ・ランディングページ。
Oliver WymanのウォームなプロフェッショナルトーンとPentagramの非対称グリッド・ミニマリズムを融合。

### Design References
- https://www.oliverwyman.com/ — 配色、タイポグラフィ、アニメーション
- https://www.pentagram.com/ — 非対称グリッド、余白、ミニマリズム

### Key Design Decisions
- AI生成感を避けるため、参考サイトのデザインパターンを具体的に踏襲
- 写真はNano Banana Pro (Gemini API) で生成、ストック写真は不使用
- ロゴは盾+チェックマークのモチーフ（透過PNG: `assets/logo.png`）

---

## Global Design Tokens

### Colors
| Name | Code | Usage |
|------|------|-------|
| Teal (Primary) | `#3FB4AA` | CTA, アクセント, ラベル, アイコン |
| Teal Dark | `#2D8F87` | ホバー状態 |
| Deep Teal | `#1B4A4A` | ダークセクション背景 |
| Off White | `#FAFAF8` | ライトセクション背景 |
| Dark Text | `#1A2A2E` | 見出し, 本文 |
| Body Text | `#4A5A5E` | サブテキスト |
| Light Gray | `#E0E0E0` | ボーダー, ディバイダー |

### Typography
| Element | Font | Size | Weight | Line-height |
|---------|------|------|--------|-------------|
| H1 (Hero) | Noto Sans JP | 52px | 200 | 1.2 |
| H2 (Section) | Noto Sans JP | 32px | 200 | 1.4 |
| H3 (Item) | Noto Sans JP | 20px | 400 | 1.4 |
| Body | Noto Sans JP | 15-17px | 300-400 | 1.8-1.9 |
| Label | Inter | 11-12px | 500 | 1.0 |
| Stat Number | Inter | 48-64px | 200 | 1.05 |
| Nav | Inter | 13px | 400 | 1.0 |

### Layout
- Max width: `1200px`
- Side padding: `48px`
- Section padding: `140px 0` (top/bottom)
- Grid system: CSS Grid, 7:5 or flexbox 35:65/40:60/48:52

### Animations
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (primary), `ease` (secondary)
- Duration: 0.7-0.9s for reveals, 0.3-0.4s for hovers
- Stagger delay: 150-200ms between elements
- Scroll-triggered via Intersection Observer
- Grain texture overlay: SVG feTurbulence, opacity 0.025 (light) / 0.035 (dark)
- Cursor glow: radial-gradient, teal, opacity 0.05

---

## Section 1: Hero

### Layout
- Full viewport height (100vh)
- Left-aligned text content (max-width: 520px, padding-top: 72px)
- Background image on right 70%, masked with gradient fade to left

### Content
- Label: "Pharmaceutical Compliance Partner" (Inter, 11px, teal, uppercase, tracking 4px)
- Title: "規制を、" / "戦略に変える。" (2 lines, 52px, weight 200)
- Accent line: 2px teal, 48px wide
- Sub: "製薬企業のコンプライアンス体制を、資材審査から組織設計まで包括的に支援します。" (16px, weight 300)
- CTA: "ご相談はこちら →" (text link with animated arrow)

### Background Image
- Source: `generated-images/hero-bg-v6.png` (compliance checklist + meeting room)
- CSS mask: `linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)`
- Mouse parallax: ±0.3px per mouse position delta

### Navigation (Fixed)
- Logo: "JP COMPLIANCE" (Inter, 15px, weight 500, tracking 2px)
- Links: Services / Why Us / Process / Insights
- CTA button: "お問い合わせ" (teal background)
- Backdrop blur: 20px, border-bottom: 1px solid rgba(0,0,0,0.04)

### Animation Sequence
1. 0-1.0s: White screen (nothing visible)
2. 1.0s: Title line 1 fadeUp
3. 1.2s: Title line 2 fadeUp
4. 2.0s: Label fadeUp
5. 2.2s: Accent line grows
6. 2.4s: Sub text fadeUp
7. 3.0s: Background image fadeIn (1.6s duration, scale 1.03→1)
8. 4.0s: Navigation fadeDown
9. 4.2s: CTA fadeUp
10. 4.8s: Scroll indicator fadeIn with pulse animation

---

## Section 2: Why Us

### Layout
- Flex: 48% image (left) + 52% content (right)
- Gap: 56px
- Image: sticky (top: 100px)

### Left: Image
- Source: `generated-images/whyus-track.png` (meeting room with teal chairs + dashboard)
- CSS mask: right-side fade `linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.4) 80%, transparent 100%)`
- Enter animation: slideIn from left (translateX: -30px → 0)
- Hover: scale 1.02

### Right: Content
- Label: "Why Us"
- Heading: "クライアントの課題解決に伴走する、唯一のパートナー"
- Intro paragraph
- 3 items with top border, numbered 01/02/03:
  1. 専門性の高さ
  2. 包括的なソリューション
  3. 実績に裏付けられた信頼性
- Comparison bar: 外部委託機関 vs JP Compliance (teal background)

### Animation
- Staggered fadeUp: image → label → heading → intro → items (200ms intervals) → comparison

---

## Section 3: Value Proposition (Dark)

### Layout
- Background: `#1B4A4A` with radial gradient drift animation
- CSS Grid: 7fr (left) : 5fr (right), gap 80px
- Max-width: 1200px, padding: 0 48px

### Left: Message
- Label: "Our Position"
- Quote mark: 64px, teal, opacity 0.4
- Main quote (34px, weight 200, white, line-by-line reveal):
  - "資材審査の「組織開発」と"
  - "「審査プロセス導入」を"
  - "包括的に支援できる企業は、"
  - "ほぼ存在しません。" ← teal color, weight 300 (emphasis)
- Divider: 1px teal, 48px
- Support text (17px, rgba white 0.75)
- Highlight: key phrase in teal "「制約の産物」ではなく「価値創出の手段」"

### Right: Stat Cards
- 3 cards with 28px gap
- Card style: rgba(255,255,255,0.04) bg, 1px teal-tinted border, padding 36px 40px
- CSS Grid inside card: 140px (number) + 1fr (text)
- Numbers: 64px, weight 200, white → count-up animation from 0
  1. 100名 — 全国の該当経験者 推定人数
  2. 69社 — 製薬協加盟企業中 各社1〜2名
  3. 7年間 — 代表社員の実務責任者経験
- Hover: left teal bar (scaleY), bg glow, number turns teal

### Background Accent
- JP Compliance logo (透過PNG) at right, 380px, opacity 0.08, brightness 1.5
- FadeIn at 1.5s delay

### Animation
- Left: staggered line-by-line reveal (200ms intervals)
- Right cards: staggered slideIn from right (300ms intervals)
- Counter: starts 400ms after card appears, cubic ease-out

---

## Section 4: Track Record

### Layout
- Background: `#FAFAF8`
- Center-aligned header + 4-column grid
- Vertical 1px dividers between columns (top 20% to bottom 80%)

### Content
- Label: "Track Record"
- Heading: "数字が証明する品質"
- 4 stats (56px number, weight 200):
  1. 99.9% — スライドレビュー事前提出率 (2025)
  2. 99.5% — スライドレビュー期限前提出率 (2025)
  3. 4.1/5 — 資材審査満足度 (2024)
  4. 0件 — 厚労省広告監視事業指摘件数 (2019-2025)
- Teal accent bar (32px) under each number
- Year in teal below description
- Note: "※ 代表社員の在職中の大手製薬企業における実績"

### Animation
- Count-up: 0 → target with decimal support, 1.2s, cubic ease-out
- Staggered reveal: 200ms intervals

---

## Section 5: Services

### Layout
- Flex: 35% (left sticky heading) + 65% (right accordion)
- Gap: 80px

### Left
- Label: "Services"
- Heading: "支援内容"
- Intro paragraph

### Right: Interactive Accordion
- 6 items with top/bottom borders:
  1. コンプライアンス研修
  2. 資材審査 相談
  3. 資材審査 受託
  4. スライドレビュー受託
  5. 審査体制 開発支援
  6. モニタリング
- Each: numbered (01-06), title, expandable description
- Toggle: + icon → rotates to - on open
- Exclusive: only one open at a time
- First item auto-opens after reveal
- Hover: title turns teal, toggle turns teal
- Open state: teal accent bar at bottom (32px, grows from left)

### Animation
- Staggered fadeUp: 150ms intervals
- Expand/collapse: max-height transition 0.5s

---

## Section 6: Process

### Layout
- Flex: 40% (left image) + 60% (right header + timeline)
- Gap: 64px

### Left: Image with Parallax
- Source: `generated-images/process-meeting-color.png` (color meeting photo)
- Sticky (top: 100px), height: 520px, image height: 140%
- **Scroll parallax**: image translateY ±15% opposite to scroll direction
- **Grayscale → Color**: starts grayscale(100%), transitions to grayscale(0%) as user scrolls
- Top/bottom gradient fade to background color

### Right: Header + Timeline
- Label: "Process"
- Heading: "90日で本格稼働"
- Intro + "90-DAY LAUNCH" badge (teal border + bg)
- Vertical timeline:
  - Gray line grows first, teal progress line follows
  - 4 steps with dots that activate (gray → teal + glow):
    1. Step 01: 環境整備
    2. Step 02: 課題明確化
    3. Step 03: 業務準備
    4. Step 04: 本格稼働

### Animation
- Image fadeUp, then parallax + saturation on scroll
- Timeline line grows, steps stagger (300ms), dots activate (500ms intervals)

---

## Section 7: CTA + Footer (Dark)

### Layout
- Background: `#1B4A4A` with gradient drift
- Center-aligned CTA + horizontal divider + footer

### CTA
- Logo: 100px, scale-up fadeIn, brightness 2 (white on dark)
- Label: "Contact"
- Heading: "まずはご相談ください。" (48px, weight 200, white)
- Sub: "貴社の課題に合わせた最適な支援プランをご提案いたします。" (18px)
- Button: "お問い合わせ →" (teal bg, dark text, padding 20px 56px)
  - Hover: lighter teal + box-shadow + shine sweep effect
- Divider: 1px teal (opacity 0.2), grows from center to max 800px

### Footer
- Top row: logo + brand name (left) / nav links (right)
- Bottom row: copyright (left) / Privacy Policy + Terms (right)
- Separator: 1px border, rgba white 0.06
- Link hover: → teal

### Animation
- Staggered: logo → label → heading → sub → button → divider → footer

---

## Technical Implementation Notes

### Stack Recommendation
- Next.js 14+ (App Router)
- Tailwind CSS
- Framer Motion for animations
- Intersection Observer for scroll-triggered reveals

### Image Assets
| File | Section | Aspect | Description |
|------|---------|--------|-------------|
| `hero-bg-v6.png` | Hero | 16:9 | Compliance checklist + meeting room |
| `whyus-track.png` | Why Us | 3:2 | Meeting room with teal chairs |
| `process-meeting-color.png` | Process | 3:4 | IT consulting meeting (color) |
| `logo.png` | Global | 1:1 | Shield + checkmark, transparent |

### Performance
- Images: lazy load below the fold, WebP conversion
- Fonts: Noto Sans JP (200, 300, 400, 500) + Inter (200, 300, 400, 500), preconnect
- Animations: CSS transitions preferred, JS only for scroll-linked effects
- Grain overlay: single SVG, CSS background-repeat

### Responsive (Future)
- Tablet: stack asymmetric layouts to single column
- Mobile: full-width sections, reduced font sizes, simplified animations
- Current spec is desktop-first (design review was desktop)
