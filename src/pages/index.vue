<script setup lang="ts">
import type { ConfigKey, Config } from '~/types'
import { WATERMWRK_KEY, defaultConfig } from '~/const'

const storageConfig = localStorage.getItem(WATERMWRK_KEY)
const userConfig = storageConfig && JSON.parse(storageConfig)

const config = reactive<Config>(formatUserConfig(userConfig) || defaultConfig)
function formatUserConfig(config: Config){
  if(!config) return
  const { rotate, startX, startY } = config
  return {
    ...config,
    rotate: Number(rotate),
    startX: Number(startX),
    startY: Number(startY),
  }
}

const stringKeys = ['words', 'color', 'rotate', 'startX', 'startY']
function update(key: ConfigKey, val: string | number | boolean){
  if(key === 'saveConfig') 
    config[key] = Boolean(val)
  else if(stringKeys.includes(key)) 
    config[key] = val
  else 
    config[key] = +val

  if(key === 'saveConfig' && val === false) 
    localStorage.setItem(WATERMWRK_KEY, '')
  else 
    config['saveConfig'] && localStorage.setItem(WATERMWRK_KEY, JSON.stringify(config))
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <!-- Mobile: Stack vertically | Desktop: Side by side -->
    <div class="flex flex-col lg:flex-row lg:items-start gap-4">
      <!-- Sidebar (appears second on mobile, first on desktop) -->
      <div class="w-full lg:w-72 lg:flex-shrink-0 order-2 lg:order-1">
        <TheControl :config="config" @update="update" />
      </div>
      
      <!-- Main Area (appears first on mobile, second on desktop) -->
      <div class="flex-1 order-1 lg:order-2">
        <TheMain :config="config" />
      </div>
    </div>
  </div>
</template>
