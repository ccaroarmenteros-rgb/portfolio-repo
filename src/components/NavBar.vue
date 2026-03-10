<script setup lang="ts">
import { HouseHeart } from 'lucide-vue-next'

interface Props {
  ruta: string;          
  textoBoton?: string;   
  colorBoton?: string;   
}

const props = withDefaults(defineProps<Props>(), {
  textoBoton: '', 
  colorBoton: 'bg-[rgb(154,106,123)] hover:bg-[rgb(183,132,151)]' 
});
</script>

<template>
  <nav class="relative z-30 w-full bg-white px-6 py-4 shadow-md flex items-center justify-between">
    
    <button 
      @click="$router.push(props.ruta)" 
      :class="['px-4 py-2 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2', props.colorBoton]"
    >
      <HouseHeart v-if="!props.textoBoton" class="w-6 h-6" />
      
      <span v-else class="schoolbell-regular flex items-center gap-2">
        <span>&larr;</span> {{ props.textoBoton }}
      </span>
    </button>

    <slot></slot>

  </nav>
</template>