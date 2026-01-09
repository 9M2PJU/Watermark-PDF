<div align="center">

# 🎨 Watermark

**Add beautiful watermarks to your images and PDFs — right in your browser**

[![MIT License](https://img.shields.io/badge/License-MIT-violet.svg)](LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-42b883.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646cff.svg)](https://vitejs.dev/)

[Live Demo](https://efrice.github.io/watermark/) • [Report Bug](https://github.com/Efrice/watermark/issues) • [Request Feature](https://github.com/Efrice/watermark/issues)

</div>

---

## ✨ Features

- 🔒 **Privacy First** — No server uploads, all processing happens locally in your browser
- 🖼️ **Multi-Format** — Supports images (PNG, JPG, etc.) and PDF files
- 🎛️ **Fully Customizable** — Control position, rotation, opacity, font size, and more
- 📐 **Grid Layout** — Add watermarks in rows and columns across your document
- 🗜️ **Compression** — Adjust image quality for optimal file size
- 💾 **Save Settings** — Persist your configuration for future sessions
- 🌙 **Dark Mode** — Beautiful modern dark theme with light mode support

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Efrice/watermark.git
cd watermark

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
pnpm build
```

Output will be in the `docs` folder, ready for GitHub Pages deployment.

---

## 📖 Configuration Options

| Parameter | Type | Description |
|-----------|------|-------------|
| `words` | string | Watermark text (use Enter for multi-line) |
| `fontSize` | number | Font size in pixels |
| `color` | string | RGBA color (e.g., `rgba(0, 0, 0, 0.2)`) |
| `rotate` | number | Rotation angle in degrees |
| `row` | number | Number of watermark rows |
| `col` | number | Number of watermark columns |
| `startX` | number | X-axis starting position |
| `startY` | number | Y-axis starting position |
| `offsetX` | number | Horizontal spacing between watermarks |
| `offsetY` | number | Vertical spacing between watermarks |
| `compression` | number | Image quality (0-1, lower = smaller file) |
| `saveConfig` | boolean | Persist settings in localStorage |

---

## 🎨 UI Design

The interface features a modern, premium design:

- **Glassmorphism** — Frosted glass panels with backdrop blur
- **Gradient Accents** — Vibrant purple-to-cyan color scheme
- **Smooth Animations** — Micro-interactions and hover effects
- **Responsive Layout** — Adapts to different screen sizes

---

## 🌐 Deploy to GitHub Pages

1. Fork this repository
2. Run `pnpm build` to generate the `docs` folder
3. Go to **Settings** → **Pages**
4. Set Source to **Deploy from a branch**
5. Select **main** branch and **/docs** folder
6. Save and wait for deployment

Your app will be available at: `https://<username>.github.io/watermark/`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Vue 3](https://vuejs.org/) | Reactive UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Vite](https://vitejs.dev/) | Fast build tool |
| [UnoCSS](https://unocss.dev/) | Atomic CSS engine |
| [PDF.js](https://mozilla.github.io/pdf.js/) | PDF rendering |
| [PDFKit](http://pdfkit.org/) | PDF generation |

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by [Efrice](https://github.com/Efrice)

</div>
