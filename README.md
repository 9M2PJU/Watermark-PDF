<div align="center">

# 🎨 9M2PJU PDF Watermark

**Add beautiful watermarks to your images and PDFs — right in your browser**

[![MIT License](https://img.shields.io/badge/License-MIT-violet.svg)](LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-42b883.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646cff.svg)](https://vitejs.dev/)

[Live Demo](https://pdf-watermark.hamradio.my) • [Report Bug](https://github.com/9M2PJU/9M2PJU-PDF-Watermark/issues) • [Request Feature](https://github.com/9M2PJU/9M2PJU-PDF-Watermark/issues)

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
- 📱 **Responsive** — Works on desktop and mobile devices

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/9M2PJU/9M2PJU-PDF-Watermark.git
cd 9M2PJU-PDF-Watermark

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

## 🙏 Credits

- Original project by [Efrice](https://github.com/Efrice)
- Modernized UI by [9M2PJU](https://github.com/9M2PJU)

---

<div align="center">

Made with ❤️ by [9M2PJU](https://github.com/9M2PJU)

</div>

