
<script setup lang="ts">

</script>


<template>
  <div class="min-h-screen">
    
    <div v-if="$route.name === 'modelado'" class="py-12 px-4 max-w-5xl mx-auto">
      
      <h1 class="text-4xl font-bold text-center mb-8">Mis Proyectos de Modelado</h1>

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

</style>
