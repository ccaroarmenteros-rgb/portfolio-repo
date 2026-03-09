
<script setup lang="ts">
import { HouseHeart } from 'lucide-vue-next'
</script>


<template>
  <div class="min-h-screen">
    
    <div v-if="$route.name === 'modelado'" class="py-12 px-4 max-w-5xl mx-auto">
       
     
     <nav class="relative z-30 w-full bg-white px-6 py-4 shadow-md flex items-center justify-between">
    <button 
      @click="$router.push('/')" 
      class="p-2 bg-[rgb(154,106,123)] hover:bg-[rgb(183,132,151)] text-white rounded-md transition-colors flex items-center justify-center"
      aria-label="Volver a Home"
    >
      <HouseHeart class="w-6 h-6" />
    </button>
  </nav>

     <section class="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden">
      <img 
        src="/imagenes/Home/Claro.jpg" 
        alt="" 
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
        <h1 class="schoolbell-regular relative z-20 text-5xl md:text-7xl font-bold text-[rgb(154,106,123)] transition-all px-4 flex items-center justify-center gap-6">
            <span>MODELADO</span>
            
            <img 
              src="/imagenes/Home/BotónModelado.png"
              alt="Ilustración" 
              class="h-35 md:h-52 w-auto object-contain hover:opacity-90 transition-all cursor-pointer" 
            />
        </h1>
      
      
    </section>




      <nav class="flex flex-wrap justify-center gap-4 mb-12">
        <router-link 
          to="/modelado/muneca" 
          class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-md"
        >
          Ver Muñeca
        </router-link>

        <router-link 
          to="/modelado/bici" 
          class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-md"
        >
          Ver Bici
        </router-link>

        <router-link 
          to="/modelado/llaveros" 
          class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-md"
        >
          Ver Llaveros
        </router-link>
      </nav>
    </div>

    <div class="w-full">
      <router-view />
    </div>

  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Schoolbell&display=swap');

.schoolbell-regular {
  font-family: "Schoolbell", cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
