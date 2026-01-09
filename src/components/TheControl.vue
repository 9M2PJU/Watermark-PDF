<script setup lang="ts">
import type { Config } from '~/types';

const { config } = defineProps<{
  config: Config
}>()
</script>

<template>
  <div class="glass-card sticky top-4">
    <!-- Header -->
    <div class="text-center pb-6 border-b border-white/10">
      <div class="inline-flex items-center justify-center gap-2 mb-3">
        <div class="p-2 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10">
          <div i-material-symbols-add-photo-alternate-rounded text-2xl text-violet-400 />
        </div>
        <div class="p-2 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10">
          <div i-material-symbols:picture-as-pdf text-2xl text-cyan-400 />
        </div>
      </div>
      <h1 class="text-xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Watermark
      </h1>
      <p class="text-sm text-gray-400 mt-1">
        Add watermark to image/pdf
      </p>
    </div>

    <!-- Settings -->
    <div class="py-4 space-y-1">
      <TheInput 
        v-for="(val, key) in config" 
        :key="key"
        :property="key" 
        :value="val" 
        @update:value="(val: string | number | boolean) => $emit('update', key, val)"
      />
    </div>

    <!-- Footer -->
    <div class="pt-4 border-t border-white/10">
      <p class="text-xs text-gray-500 text-center mb-4">
        <span class="inline-flex items-center gap-1">
          <span i-carbon-security text-xs />
          No server, your files stay private
        </span>
      </p>
      <TheFooter />
    </div>
  </div>
</template>