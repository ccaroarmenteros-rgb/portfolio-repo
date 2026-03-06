
<script setup lang="ts">

</script>


<template>
  <main class="w-full flex flex-col min-h-screen">
    
    <nav class="relative z-30 w-full bg-white px-6 py-4 shadow-md flex items-center justify-between">
      <button 
        @click="$router.push('/')" 
        class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md transition-colors flex items-center gap-2"
      >
        <span>&larr;</span> Volver a Home
      </button>
    </nav>

    <section class="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden bg-blue-300">
     
      <h1 class="relative z-20 text-5xl md:text-7xl font-bold text-white transition-all text-center px-4">
        DISEÑO 
      </h1>
    </section>

   <section class="relative flex-1 w-full flex flex-col justify-center items-start px-8 md:px-24 overflow-hidden bg-[rgb(94,110,142)]  transition-colors duration-500 group cursor-pointer">
      <h2 class="relative z-20 text-5xl md:text-7xl font-bold text-white transition-transform duration-500 group-hover:translate-x-4">
        Diseño gráfico
      </h2>
    </section>

    <section class="relative flex-1 w-full flex flex-col justify-center items-start px-8 md:px-24 overflow-hidden  transition-colors duration-500 group cursor-pointer">
      <h2 class="relative z-20 text-5xl md:text-7xl font-bold text-black transition-transform duration-500 group-hover:translate-x-4">
       Branding
      </h2>
    </section>

    <section class="relative flex-1 w-full flex flex-col justify-center items-start px-8 md:px-24 overflow-hidden bg-[rgb(82,82,132)] transition-colors duration-500 group cursor-pointer">
      <h2 class="relative z-20 text-5xl md:text-7xl font-bold text-white transition-transform duration-500 group-hover:translate-x-4">
        Diseño editorial
      </h2>
    </section>
   </main>
</template>



<style scoped>

</style>