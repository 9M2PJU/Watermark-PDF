<script setup lang="ts">
import type { Config, ConfigKey } from '~/types';
import { basicSettings, advancedSettings } from '~/const';

const { config } = defineProps<{
  config: Config
}>()

const showAdvanced = ref(false)
</script>

<template>
  <div class="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-4 lg:sticky lg:top-4">
    <!-- Header -->
    <div class="text-center pb-3 mb-3 border-b border-slate-700/50">
      <div class="flex items-center justify-center gap-2 mb-2">
        <span i-material-symbols-add-photo-alternate-rounded class="text-xl text-violet-400"></span>
        <span i-material-symbols:picture-as-pdf class="text-xl text-cyan-400"></span>
      </div>
      <h1 class="text-base font-bold text-white">9M2PJU PDF Watermark</h1>
      <p class="text-xs text-gray-400">Add watermark to image/pdf</p>
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
      class="w-full mt-3 py-2 flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
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
      class="mt-2 pt-2 border-t border-slate-700/30 space-y-2"
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
    <div class="mt-3 pt-3 border-t border-slate-700/50">
      <p class="text-[10px] text-gray-500 text-center mb-2">
        Remake by <a href="https://hamradio.my" target="_blank" class="text-violet-400 hover:text-violet-300 underline">9M2PJU</a>
      </p>
      <TheFooter />
    </div>
  </div>
</template>