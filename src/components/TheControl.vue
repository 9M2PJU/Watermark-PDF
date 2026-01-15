<script setup lang="ts">
import type { Config, ConfigKey } from '~/types';
import { basicSettings, advancedSettings } from '~/const';

const { config } = defineProps<{
  config: Config
}>()

const showAdvanced = ref(false)
</script>

<template>
  <div class="glass-card p-4 lg:sticky lg:top-4 bg-panel">
    <!-- Header -->
    <div class="text-center pb-3 mb-3 border-b border-divider">
      <div class="flex items-center justify-center gap-2 mb-2">
        <span class="text-xl">📄</span>
      </div>
      <h1 class="text-base font-bold text-main">9M2PJU PDF WATERMARK</h1>
      <p class="text-xs text-dim">Secure & Private Watermarking</p>
    </div>

    <!-- Basic Settings -->
    <div class="space-y-2">
      <TheInput 
        v-for="key in basicSettings" 
        :key="key"
        :property="key as ConfigKey" 
        :value="config[key as keyof Config]" 
        @update:value="(val: string | number | boolean) => $emit('update', key, val)"
      />
    </div>

    <!-- Advanced Settings Toggle -->
    <button 
      @click="showAdvanced = !showAdvanced"
      class="w-full mt-3 py-2 flex items-center justify-center gap-2 text-xs text-dim hover:text-main transition-colors"
    >
      <span>{{ showAdvanced ? 'Hide' : 'Show' }} Advanced Settings</span>
      <span 
        :class="showAdvanced ? 'rotate-180' : ''" 
        class="transition-transform duration-200"
        i-carbon-chevron-down
      ></span>
    </button>

    <!-- Advanced Settings (Collapsible) -->
    <div 
      v-show="showAdvanced"
      class="mt-2 pt-2 border-t border-divider space-y-2"
    >
      <TheInput 
        v-for="key in advancedSettings" 
        :key="key"
        :property="key as ConfigKey" 
        :value="config[key as keyof Config]" 
        @update:value="(val: string | number | boolean) => $emit('update', key, val)"
      />
    </div>

    <!-- Save Config Toggle -->
    <div class="mt-3 pt-3 border-t border-slate-700/50">
      <TheInput 
        property="saveConfig" 
        :value="config.saveConfig" 
        @update:value="(val: string | number | boolean) => $emit('update', 'saveConfig', val)"
      />
    </div>

    <!-- Footer -->
    <div class="mt-3 pt-3 border-t border-divider">
      <p class="text-[10px] text-dim text-center mb-2">
        Remake by <a href="https://hamradio.my" target="_blank" rel="noopener noreferrer" class="text-brand hover:text-brand-hover underline">9M2PJU</a>
      </p>
      <TheFooter />
    </div>
  </div>
</template>