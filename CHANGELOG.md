# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-01-15

### Fixed
- **PDF Page Overflow Bug**: Fixed an issue where watermarked PDFs would have single pages split into 2 pages due to image overflow. The `doc.image()` function now explicitly constrains the watermarked image to fit within the exact page dimensions.

### Technical Details
- Added explicit `width` and `height` parameters to `doc.image()` call in `img2Pdf` function (`src/util.ts`)
- This ensures the watermarked image fits perfectly within each PDF page boundary without any overflow
