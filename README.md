<div align="center">

# ⚡ 9M2PJU PDF WATERMARK ⚡
### **THE NEXT GENERATION OF DOCUMENT SECURITY**

[![v2.0.0](https://img.shields.io/badge/release-v2.0.0-blue.svg?style=flat-square)](https://github.com/9M2PJU/9M2PJU-PDF-Watermark/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/vite-4.x-646cff.svg?style=flat-square&logo=vite)](https://vitejs.dev/)

[🔴 LIVE DEPLOYMENT](https://pdf-watermark.hamradio.my) • [REPORT ANOMALY](https://github.com/9M2PJU/9M2PJU-PDF-Watermark/issues)

**Based on original project by [Efrice](https://github.com/Efrice)**

</div>

---

## 🔮 TRANSMISSION: v2.0.0 (CLEAN SLATE PROTOCOL)

We have rebooted the core systems. The experimental neural interfaces (Cyber/90s themes) have been decommissioned in favor of a **Clean Slate** professional interface. Under the hood, the engine has been rebuilt for maximum stability and speed.

### 🧬 CORE EVOLUTION LOG

> **PROTOCOL: ZERO MARGIN PDF**
>
> **Problem**: Previous iterations suffered from "Page Overflow" — a glitch where a single-page document would fracture into two pages due to invisible render margins.
>
> **Solution**: Implemented a hard-coded `margin: 0` constraint on the `img2Pdf` rendering pipeline. Images now map 1:1 to the canvas with pixel-perfect precision.

> **PROTOCOL: ASYNC SERIALIZATION**
>
> **Problem**: Rapid configuration changes triggered a "Race Condition," causing the rendering engine to duplicate pages or crash.
>
> **Solution**: Replaced legacy Promise chains with a strictly serialized `async/await` processing loop. The global state `imgData` is now locked until the entire rendering cycle is verified complete.

> **PROTOCOL: MAIN THREAD YIELDING**
>
> **Problem**: Heavy PDF processing would freeze the UI, rendering the interface unresponsive.
>
> **Solution**: Injected strategic `setTimeout` varying yields into the render loop. The engine now pauses every 2 pages to allow the main thread to breathe, keeping the UI fluid even during heavy workloads.

---

## 🚀 CAPABILITIES

### 🛡️ **CLIENT-SIDE SOVEREIGNTY**
No data leaves your local machine. All processing is executed solely within your browser's runtime environment. Your documents never touch a cloud server.

### 💎 **CLEAN SLATE UI**
A distraction-free, high-contrast interface designed for professional workflows. No neon distractions. Just pure focus.
- **Semantic CSS Architecture**: Built on a robust variable system (`--bg-panel`, `--text-main`) for seamless theming.
- **Adaptive Dark Mode**: Automatically syncs with your system's circadian rhythm settings.

### 🔧 **THE TOOLKIT**
- **Precision Watermarking**: Control text, color, opacity, and rotation with surgical accuracy.
- **Smart Grid**: Automatically calculates optimal row/column density for any document size.
- **Multi-Core Processing**: Leverages Web Workers for non-blocking PDF parsing.
- **Compression Algorithms**: Fine-tune output quality vs. file size.

---

## 🏗️ SYSTEM ARCHITECTURE

Built on the bleeding edge of the web ecosystem:

| MODULE | TECHNOLOGY | STATUS |
|:-------|:-----------|:-------|
| **Core** | [Vue 3](https://vuejs.org/) | `ACTIVE` |
| **Logic** | [TypeScript](https://www.typescriptlang.org/) | `STABLE` |
| **Bundler** | [Vite](https://vitejs.dev/) | `OPTIMIZED` |
| **Styling** | [UnoCSS](https://unocss.dev/) | `COMPILED` |
| **PDF Engine** | [PDF.js](https://mozilla.github.io/pdf.js/) | `INTEGRATED` |
| **Generation** | [PDFKit](http://pdfkit.org/) | `DEPLOYED` |

---

## ⚡ DEPLOYMENT INSTRUCTIONS

Initiate the sequence to run this locally:

```bash
# 1. CLONE REPOSITORY
git clone https://github.com/9M2PJU/9M2PJU-PDF-Watermark.git

# 2. INITIALIZE DEPENDENCIES
pnpm install

# 3. ENGAGE DEV SERVER
pnpm dev

# 4. COMPILE FOR PRODUCTION
pnpm build
```

---

## 📜 LICENSE

Authorized under the **MIT LICENSE**. Free for use, modification, and distribution within the mandates of the open-source accord.

---

<div align="center">

**ENGINEERED BY [9M2PJU](https://github.com/9M2PJU)**
*Securing Documents One Pixel at a Time.*

</div>
