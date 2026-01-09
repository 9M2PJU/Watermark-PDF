<script setup lang="ts">
import type { ConfigKey } from '~/types'
import { tooltips } from '~/const'

const { property } = defineProps<{
  property: ConfigKey
}>()

const { value } = defineModels<{
  value: string | number | boolean
}>()
</script>

<template>
  <div class="form-row group">
    <label 
      :for="property"
      class="label-text flex items-center gap-2"
    >
      {{ property }}
      <span 
        i-carbon-information 
        class="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-help" 
        :title="tooltips[property]"
      />
    </label>
    
    <!-- Boolean Switch -->
    <div v-if="property === 'saveConfig'">
      <TheSwitch :value="value" @update:value="(val: boolean) => $emit('update:value', val)"/>
    </div>
    
    <!-- Textarea for words -->
    <div v-else-if="property === 'words' && typeof value === 'string'">
      <textarea  
        :id="property"
        v-model="value"
        class="textarea-modern w-48"
        rows="2"
        placeholder="Enter watermark text..."
      />
    </div>
    
    <!-- Compression Range Slider -->
    <div v-else-if="property === 'compression'" class="flex flex-col items-end gap-1">
      <input 
        class="range-modern w-48"
        title="Lower value = better compression" 
        type="range" 
        min="0" 
        max="1" 
        v-model="value" 
        step="0.1"
      />
      <span class="text-xs text-gray-500">{{ value }}</span>
    </div>
    
    <!-- Number Input -->
    <div v-else-if="typeof value === 'number'">
      <input
        :id="property"
        v-model="value"
        type="number"
        class="input-modern w-48 text-center"
      >
    </div>
    
    <!-- Text Input -->
    <div v-else>
      <input
        :id="property"
        v-model="value"
        type="text"
        class="input-modern w-48 text-center"
      >
    </div>
  </div>
</template>
