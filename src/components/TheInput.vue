<script setup lang="ts">
import type { ConfigKey } from '~/types'
import { tooltips, fontSizePresets, rotatePresets } from '~/const'

const { property } = defineProps<{
  property: ConfigKey
}>()

const { value } = defineModels<{
  value: string | number | boolean
}>()

// Human-readable labels
const labels: Record<string, string> = {
  words: 'Watermark Text',
  color: 'Color',
  opacity: 'Opacity',
  fontSize: 'Font Size',
  rotate: 'Rotation',
  row: 'Rows',
  col: 'Columns',
  startX: 'Start X',
  startY: 'Start Y',
  offsetX: 'Spacing X',
  offsetY: 'Spacing Y',
  compression: 'Quality',
  saveConfig: 'Remember Settings',
}
</script>

<template>
  <div class="flex items-center justify-between py-1.5">
    <!-- Label -->
    <label 
      :for="property"
      class="text-xs text-gray-400"
      :title="tooltips[property]"
    >
      {{ labels[property] || property }}
    </label>
    
    <!-- Switch for saveConfig -->
    <template v-if="property === 'saveConfig'">
      <TheSwitch :value="value as boolean" @update:value="(val: boolean) => $emit('update:value', val)" />
    </template>
    
    <!-- Text input for words -->
    <template v-else-if="property === 'words'">
      <input
        :id="property"
        v-model="value"
        type="text"
        class="w-32 sm:w-36 input-modern"
        placeholder="Enter text..."
      >
    </template>
    
    <!-- Color picker -->
    <template v-else-if="property === 'color'">
      <div class="flex items-center gap-2">
        <input
          :id="property"
          v-model="value"
          type="color"
          class="w-8 h-8 rounded cursor-pointer border border-slate-600 bg-transparent"
        >
        <span class="text-[10px] text-gray-500 font-mono">{{ value }}</span>
      </div>
    </template>
    
    <!-- Opacity slider -->
    <template v-else-if="property === 'opacity'">
      <div class="flex items-center gap-2">
        <input 
          type="range" 
          min="5" 
          max="100" 
          step="5"
          v-model="value"
          class="w-20 sm:w-24 range-modern"
        >
        <span class="text-[10px] text-gray-500 w-8">{{ value }}%</span>
      </div>
    </template>
    
    <!-- Font size slider -->
    <template v-else-if="property === 'fontSize'">
      <div class="flex items-center gap-2">
        <input 
          type="range" 
          min="12" 
          max="48" 
          step="2"
          v-model="value"
          class="w-20 sm:w-24 range-modern"
        >
        <span class="text-[10px] text-gray-500 w-6">{{ value }}</span>
      </div>
    </template>
    
    <!-- Rotate presets -->
    <template v-else-if="property === 'rotate'">
      <div class="flex items-center gap-1">
        <button
          v-for="preset in rotatePresets"
          :key="preset.value"
          @click="$emit('update:value', preset.value)"
          :class="[
            'px-2 py-0.5 text-[10px] rounded transition-colors',
            value === preset.value 
              ? 'btn-gradient !px-2 !py-0.5' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
          ]"
        >
          {{ preset.label }}
        </button>
      </div>
    </template>
    
    <!-- Range for compression -->
    <template v-else-if="property === 'compression'">
      <div class="flex items-center gap-2">
        <input 
          type="range" 
          min="0.1" 
          max="1" 
          step="0.1"
          v-model="value"
          class="w-20 sm:w-24 range-modern"
        >
        <span class="text-[10px] text-gray-500 w-6">{{ Math.round(Number(value) * 100) }}%</span>
      </div>
    </template>
    
    <!-- Rows slider -->
    <template v-else-if="property === 'row'">
      <div class="flex items-center gap-2">
        <input 
          type="range" 
          min="1" 
          max="20" 
          step="1"
          v-model="value"
          class="w-20 sm:w-24 range-modern"
        >
        <span class="text-[10px] text-gray-500 w-6">{{ value }}</span>
      </div>
    </template>
    
    <!-- Columns slider -->
    <template v-else-if="property === 'col'">
      <div class="flex items-center gap-2">
        <input 
          type="range" 
          min="1" 
          max="20" 
          step="1"
          v-model="value"
          class="w-20 sm:w-24 range-modern"
        >
        <span class="text-[10px] text-gray-500 w-6">{{ value }}</span>
      </div>
    </template>
    
    <!-- Start X slider -->
    <template v-else-if="property === 'startX'">
      <div class="flex items-center gap-2">
        <input 
          type="range" 
          min="-200" 
          max="200" 
          step="10"
          v-model="value"
          class="w-20 sm:w-24 range-modern"
        >
        <span class="text-[10px] text-gray-500 w-8">{{ value }}</span>
      </div>
    </template>
    
    <!-- Start Y slider -->
    <template v-else-if="property === 'startY'">
      <div class="flex items-center gap-2">
        <input 
          type="range" 
          min="-200" 
          max="200" 
          step="10"
          v-model="value"
          class="w-20 sm:w-24 range-modern"
        >
        <span class="text-[10px] text-gray-500 w-8">{{ value }}</span>
      </div>
    </template>
    
    <!-- Spacing X slider -->
    <template v-else-if="property === 'offsetX'">
      <div class="flex items-center gap-2">
        <input 
          type="range" 
          min="0" 
          max="200" 
          step="8"
          v-model="value"
          class="w-20 sm:w-24 range-modern"
        >
        <span class="text-[10px] text-gray-500 w-6">{{ value }}</span>
      </div>
    </template>
    
    <!-- Spacing Y slider -->
    <template v-else-if="property === 'offsetY'">
      <div class="flex items-center gap-2">
        <input 
          type="range" 
          min="0" 
          max="200" 
          step="8"
          v-model="value"
          class="w-20 sm:w-24 range-modern"
        >
        <span class="text-[10px] text-gray-500 w-6">{{ value }}</span>
      </div>
    </template>
    
    <!-- Number input for other numeric values -->
    <template v-else-if="typeof value === 'number'">
      <input
        :id="property"
        v-model="value"
        type="number"
        class="w-24 input-modern text-center"
      >
    </template>
    
    <!-- Text input (fallback) -->
    <template v-else>
      <input
        :id="property"
        v-model="value"
        type="text"
        class="w-24 input-modern text-center"
      >
    </template>
  </div>
</template>
