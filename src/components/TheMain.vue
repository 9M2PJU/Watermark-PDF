<script setup lang="ts">
import type { Config, HTMLInputEvent } from '~/types'
import { generateCanvas, downloadImage, loadPdf, img2Pdf } from '~/util';

const { config } = defineProps<{
  config: Config
}>()


watch(config, configChange)

function configChange() {
  loadInit = false
  if(img)
    preview.value.src = generateCanvas(config, img, loadInit ).src
  if(pdfUrl.value)
    loadPdf(pdfUrl.value, config, wrap, loading, loadInit)
}

let loadInit = false
let type = ''
let name = ''
function load(e: Event) {
  loadInit = true
  reLoad()
  const files = (e as HTMLInputEvent).target.files
  if (files && files.length > 0) {
    const file = files[0]
    type = file.type
    name = file.name
    if(type.startsWith("image/")) 
      resolveImage(file)
    if(type === "application/pdf") {
      loading.value = true
      resolvePDF(file)
    }
  }
}

function reLoad(){
  if(img) img = null
  if(url.value) url.value = ''
  if(pdfUrl.value) pdfUrl.value = ''
  if(wrap.value) wrap.value.innerHTML = ''
}

let img: HTMLImageElement | null
const canvas = ref()
const preview = ref()
const url = ref('')
function resolveImage(file: Blob){
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    const image = new Image()
    image.src = reader.result as string
    img = image
    image.onload = () => {
      config.width = image.width
      config.height = image.height
      preview.value.src = generateCanvas(config, image, loadInit).src
    }
  }
  reader.onloadend = () => {
    url.value = reader.result as string
  }
}

const pdfUrl = ref('')
const loading = ref(false)
const wrap = ref() as Ref<HTMLElement>
function resolvePDF(file: Blob){
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = () => {
    pdfUrl.value = reader.result as string
    loadPdf(pdfUrl.value, config , wrap, loading, loadInit)
  }
}

function download() {
  if(url.value === '' && pdfUrl.value === '') return
  
  if(type.startsWith("image/") && img) {
    const src = generateCanvas(config, img, loadInit).src
    downloadImage(src, config, name)
  }
  if(type === "application/pdf") {
    img2Pdf(name, loading)
  }
}
</script>

<template>
  <div class="h-full">
    <!-- Action Buttons -->
    <div class="flex items-center gap-3 mb-6">
      <div class="relative">
        <input 
          id="load" 
          type="file" 
          accept="image/*, application/pdf" 
          class="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
          @change="load"
        >
        <button class="btn-primary">
          <span class="inline-flex items-center gap-2">
            <span i-carbon-upload text-lg />
            Load File
          </span>
        </button>
      </div>
      
      <button
        class="btn-ghost"
        :disabled="url === '' && pdfUrl === ''"
        :class="{ 'opacity-50 cursor-not-allowed': url === '' && pdfUrl === '' }"
        @click="download"
      >
        <span class="inline-flex items-center gap-2">
          <span i-carbon-download text-lg />
          Download
        </span>
      </button>
    </div>

    <!-- Preview Area -->
    <div class="glass-card min-h-[500px] flex items-center justify-center">
      <!-- Image Preview -->
      <div v-if="url" class="p-4">
        <img 
          ref="preview" 
          :src="url" 
          :style="`width: ${config.width}px; height: ${config.height}px; max-width: 100%;`"
          class="rounded-lg shadow-2xl"
        >
        <canvas ref="canvas" class="hidden"></canvas>
      </div>
      
      <!-- PDF Preview -->
      <div v-else-if="pdfUrl" class="p-4 w-full">
        <div ref="wrap" class="flex flex-wrap gap-4 justify-center [&>canvas]:rounded-lg [&>canvas]:shadow-xl"></div>
      </div>
      
      <!-- Empty State / Upload Zone -->
      <label 
        v-else 
        for="load" 
        class="upload-zone w-full h-full min-h-[400px] flex flex-col items-center justify-center cursor-pointer group"
      >
        <div class="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-white/10 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-500/30">
          <span i-carbon-document-add text-5xl text-violet-400 />
        </div>
        <p class="text-gray-400 text-lg font-medium mb-2">Drop your file here</p>
        <p class="text-gray-500 text-sm">or click to browse</p>
        <p class="text-gray-600 text-xs mt-4">Supports images and PDF files</p>
      </label>
    </div>
    
    <!-- Loading Overlay -->
    <div 
      v-show="loading" 
      class="fixed inset-0 z-50 flex items-center justify-center loading-overlay"
    >
      <div class="flex flex-col items-center gap-4">
        <div class="loading-spinner"></div>
        <p class="text-gray-300 text-sm">Processing your file...</p>
      </div>
    </div>
  </div>
</template>
