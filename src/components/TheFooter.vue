<template>
  <nav class="flex items-center justify-center gap-3">
    <button 
      class="icon-btn"
      @click="toggleDark()"
      title="Toggle theme"
    >
      <div i-carbon-sun class="dark:hidden" />
      <div i-carbon-moon class="hidden dark:block" />
    </button>

    <a
      class="icon-btn"
      rel="noreferrer"
      href="https://github.com/Efrice/watermark.git"
      target="_blank"
      title="View on GitHub"
    >
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
