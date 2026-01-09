<template>
  <div class="flex items-center justify-center gap-2">
    <button 
      class="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-gray-400 hover:text-white transition-colors"
      @click="toggleDark()"
      title="Toggle theme"
    >
      <div i-carbon-sun class="text-sm dark:hidden"></div>
      <div i-carbon-moon class="text-sm hidden dark:block"></div>
    </button>

    <a
      href="https://github.com/9M2PJU/Watermark-PDF"
      target="_blank"
      class="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-gray-400 hover:text-white transition-colors"
      title="View on GitHub"
    >
      <div i-carbon-logo-github class="text-sm"></div>
    </a>
  </div>
</template>
