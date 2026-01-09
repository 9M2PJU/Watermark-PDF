import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-6 py-2.5 rounded-xl inline-flex items-center justify-center font-semibold cursor-pointer transition-all duration-200 ease-out'],
    ['btn-primary', 'btn bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:shadow-violet-500/25 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'],
    ['btn-ghost', 'btn bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-violet-500/50'],
    ['icon-btn', 'inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 cursor-pointer transition-all duration-200 hover:bg-violet-500/10 hover:border-violet-500/50 hover:text-violet-400'],
    ['glass', 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl'],
    ['glass-card', 'glass rounded-2xl p-6'],
    ['input-base', 'bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-gray-200 outline-none transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20'],
  ],
  theme: {
    colors: {
      accent: {
        DEFAULT: '#7c3aed',
        light: '#a78bfa',
        dark: '#5b21b6',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,500,600,700',
        mono: 'JetBrains Mono',
      },
    }),
  ],
})
