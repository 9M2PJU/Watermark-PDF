# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-01-15

### Fixed
- **PDF Page Overflow Bug**: Fixed an issue where watermarked PDFs would have single pages split into 2 pages due to image overflow. The `doc.image()` function now explicitly constrains the watermarked image to fit within the exact page dimensions.

### Added
- **Premium "Cyber-Glass" Theme**: Overhauled the entire UI with a futuristic dark aesthetic, glassmorphism, and neon accents.
- **Animated Background**: Added a subtle mesh gradient background for a more premium look.
- **Micro-interactions**: Added smooth transitions and hover effects to buttons, cards, and upload zones.
- **Refined Layout**: Optimized the control panel and preview area for better visual balance.

### Technical Details
- Added explicit `width` and `height` parameters to `doc.image()` call in `img2Pdf` function (`src/util.ts`)
- This ensures the watermarked image fits perfectly within each PDF page boundary without any overflow
