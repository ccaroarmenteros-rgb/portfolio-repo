<script setup lang="ts">

</script>


<template>
 <main>
    
    <section class="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden bg-red-950">

      <img 
        src="/imagenes/Modelado/Montaña.jpg" 
        alt="" 
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div class="absolute inset-0 bg-black/50 z-10"></div>

      <h1 class="relative z-20 text-5xl md:text-7xl font-bold text-white transition-all text-center px-4">
       <p>Miniatura</p> 
        <img 
          src="/imagenes/Modelado/SantaCruz.png" 
          alt="" 
          class="w-full h-auto transform scale-40 object-cover "
        >
      </h1>
      
    </section>

</main>




<section class="py-12 px-4 w-full  bg-blac bg-[rgb(225,225,225)]"> 
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row w-full overflow-hidden rounded-xl shadow-sm">
    
    <div class="w-full md:w-1/2 bg-red-950 flex flex-col md:flex-row items-center p-6 gap-6">
      
      <div class="w-full md:w-1/2">
        <img 
          src="/imagenes/Modelado/CartelBici2.jpg" 
          alt="" 
          class="w-full h-auto shadow-lg object-cover "
        >
      </div>

      <div class="w-full md:w-1/2 flex items-center justify-center">
        <p class="text-center md:text-left text-white">
          Aquí puedes escribir tu primer texto. Estará junto al cartel de la bici, sobre el fondo de color.
        </p>
      </div>
    </div>

    <div class="w-full md:w-1/2 bg-white flex flex-col md:flex-row items-center p-6 gap-6">
      
      <div class="w-full md:w-1/2 flex flex-col gap-8 mt-6 md:mt-0">
         <img 
          src="/imagenes/Modelado/Caja.png" 
          alt="" 
          class="w-full h-auto object-cover transform scale-125 origin-center"
        >
        <img 
          src="/imagenes/Modelado/CajaAbierta.png" 
          alt="" 
          class="w-full h-auto object-cover"
        >
      </div>

      <div class="w-full md:w-1/2 flex items-center justify-center">
        <p class="text-center md:text-left text-gray-700">
          Aquí va tu segundo bloque de texto, acompañando a las cajas y manteniendo el fondo blanco.
        </p>
      </div>
    </div>

  </div>
</section>

<section class="flex flex-col md:flex-row w-full gap-4"> 
  
  <div class="w-full md:w-1/2">
    <img 
      src="/imagenes/Modelado/Bici.jpg" 
      alt="Bici" 
      class="w-full h-auto object-cover rounded-lg border-20 border-white shadow-sm"
    >
  </div>
  
  <div class="w-full md:w-1/2">
    <img 
      src="/imagenes/Modelado/Muro.jpg" 
      alt="Muro" 
      class="w-full h-auto object-cover rounded-lg border-20 border-white shadow-sm"
    >
  </div>
 
</section>
 




</template>


<style scoped>

</style>