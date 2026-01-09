export const WATERMWRK_KEY = "watermark-config"

export const defaultConfig = {
  words: 'CONFIDENTIAL',
  width: 0,
  height: 0,
  fontSize: 24,
  color: '#000000',
  opacity: 20,
  rotate: -15,
  row: 7,
  col: 7,
  startX: -100,
  startY: 0,
  offsetX: 48,
  offsetY: 48,
  compression: 1,
  saveConfig: false,
}

// Presets for font size
export const fontSizePresets = [
  { label: 'Small', value: 16 },
  { label: 'Medium', value: 24 },
  { label: 'Large', value: 36 },
]

// Presets for rotation
export const rotatePresets = [
  { label: '↘ Diagonal', value: -15 },
  { label: '→ Horizontal', value: 0 },
  { label: '↓ Vertical', value: -90 },
]

// Presets for density (controls row and col together)
export const densityPresets = [
  { label: 'Low', row: 4, col: 4 },
  { label: 'Medium', row: 7, col: 7 },
  { label: 'High', row: 12, col: 12 },
]

export const tooltips: Record<string, string> = {
  words: 'Text to display as watermark',
  width: 'Image width (auto-detected)',
  height: 'Image height (auto-detected)',
  fontSize: 'Size of the watermark text',
  color: 'Watermark color',
  opacity: 'Watermark transparency (0-100%)',
  rotate: 'Rotation angle of watermark',
  row: 'Number of watermark rows',
  col: 'Number of watermark columns',
  startX: 'Horizontal starting position',
  startY: 'Vertical starting position',
  offsetX: 'Horizontal spacing between watermarks',
  offsetY: 'Vertical spacing between watermarks',
  compression: 'Output quality (higher = better)',
  saveConfig: 'Remember settings for next time',
}

// Settings display configuration
export const basicSettings = ['words', 'color', 'opacity', 'fontSize', 'rotate'] as const
export const advancedSettings = ['row', 'col', 'startX', 'startY', 'offsetX', 'offsetY', 'compression'] as const
export const hiddenSettings = ['width', 'height'] as const
