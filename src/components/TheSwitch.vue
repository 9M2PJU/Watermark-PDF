<script setup lang="ts">
const { value } = defineProps<{
  value: boolean
}>()

const emit = defineEmits(['update:value'])

function toggle(){
  emit('update:value', !value )
}
</script>

<template>
  <button 
    class="switch" 
    :class="{ 'active': value }" 
    type="button" 
    role="switch"
    :aria-checked="value"
    @click="toggle"
  >
    <span class="switch-thumb" :class="{ 'active': value }"></span>
  </button>
</template>

<style scoped>
.switch {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.25s ease;
}

.switch:hover {
  border-color: rgba(124, 58, 237, 0.5);
}

.switch.active {
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  border-color: transparent;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
}

.switch-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s ease;
}

.switch-thumb.active {
  transform: translateX(20px);
}
</style>
