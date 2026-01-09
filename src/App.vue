<script setup lang="ts">
import Index from '~/pages/index.vue';
</script>

<template>
  <main 
    font-sans 
    min-h-screen
    bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950
    text="gray-200"
    class="dark"
  >
    <div class="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_50%)] pointer-events-none" />
    <div class="relative z-10 p-4 md:p-6 lg:p-8">
      <Index />
    </div>
  </main>
</template>
