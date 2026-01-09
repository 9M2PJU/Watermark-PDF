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
    preview.value.src = generateCanvas(config, img, loadInit).src
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
    loadPdf(pdfUrl.value, config, wrap, loading, loadInit)
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
  <div>
    <!-- Buttons -->
    <div class="flex gap-2 mb-4">
      <label class="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg cursor-pointer transition-colors">
        <span i-carbon-upload class="text-base"></span>
        <span>Load</span>
        <input type="file" accept="image/*, application/pdf" class="hidden" @change="load">
      </label>
      
      <button
        class="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="url === '' && pdfUrl === ''"
        @click="download"
      >
        <span i-carbon-download class="text-base"></span>
        <span>Download</span>
      </button>
    </div>

    <!-- Preview Area -->
    <div class="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-3 min-h-[150px] sm:min-h-[200px] lg:min-h-[250px]">
      <!-- Image Preview -->
      <div v-if="url" class="flex items-center justify-center">
        <img 
          ref="preview" 
          :src="url" 
          class="max-w-full h-auto rounded-lg shadow-xl"
          style="max-height: 70vh;"
        >
        <canvas ref="canvas" class="hidden"></canvas>
      </div>
      
      <!-- PDF Preview -->
      <div v-else-if="pdfUrl" class="overflow-auto">
        <div ref="wrap" class="flex flex-wrap gap-3 justify-center [&>canvas]:rounded-lg [&>canvas]:shadow-xl [&>canvas]:max-w-full [&>canvas]:h-auto"></div>
      </div>
      
      <!-- Upload Zone -->
      <label 
        v-else 
        class="flex flex-col items-center justify-center min-h-[150px] sm:min-h-[200px] lg:min-h-[250px] cursor-pointer group"
      >
        <div class="p-3 rounded-full bg-slate-700/50 mb-2 group-hover:bg-violet-600/20 transition-colors">
          <div i-carbon-document-add class="text-2xl text-violet-400"></div>
        </div>
        <p class="text-xs text-gray-300 font-medium">Drop file here or click to browse</p>
        <input type="file" accept="image/*, application/pdf" class="hidden" @change="load">
      </label>
    </div>
    
    <!-- Loading Overlay -->
    <div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
      <div class="text-center">
        <div class="w-10 h-10 border-3 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
        <p class="text-sm text-gray-300">Processing...</p>
      </div>
    </div>
  </div>
</template>
