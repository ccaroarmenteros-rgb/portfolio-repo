<script setup lang="ts">

</script>


<template >
  <main class="w-full flex flex-col min-h-screen">
    
    <nav class="relative z-30 w-full bg-white px-6 py-4 shadow-md flex items-center justify-between">
      <button 
        @click="$router.push('/modelado')" 
        class=" schoolbell-regular px-4 py-2 bg-[rgb(73,25,21)] hover:bg-[rgb(112,55,50)] text-white font-medium rounded-md transition-colors flex items-center gap-2"
      >
        <span>&larr;</span> Volver a Modelado
      </button>
    </nav>

    <section class="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden bg-red-950">
      <img 
        src="/imagenes/Modelado/Montaña.jpg" 
        alt="Fondo de montaña" 
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="absolute inset-0 bg-black/60 z-10"></div>

      <div class=" wallpoet-regular relative z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 class="   text-9xl md:text-8xl  text-white mb-4">
          Miniatura
        </h1>
        <img 
          src="/imagenes/Modelado/SantaCruz.png" 
          alt="Modelo de Santa Cruz" 
          class="w-48 md:w-64 h-auto object-contain"
        >
      </div>
    </section>

    <section class="py-12 px-4 w-full bg-[rgb(184,199,191)]"> 
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row w-full overflow-hidden rounded-xl shadow-sm">
        
        <div class="w-full md:w-1/2 bg-[rgb(73,25,21)] flex flex-col md:flex-row items-center p-6 gap-6">
          <div class="w-full md:w-1/2">
            <img 
              src="/imagenes/Modelado/CartelBici2.jpg" 
              alt="" 
              class="w-full h-auto shadow-lg object-cover"
            >
          </div>
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <p class=" funnel-display text-center md:text-left text-white">
              Para la realización de este proyecto me propusieron crear una miniatura de la bicicleta Santa Cruz Nomad C OxBlood.
              Antes de comenzar a modelar, hice un análisis completo de la bici, realicé múltiples fotografías y cree una plantilla para utilizar como base.
              Para modelar la bicicleta, fui creando cada parte de esta por separado, con base de alambre recubierta de "Sculpey". Una vez las partes estaban horneadas y pintadas comencé a montar la bicicleta ayudándome de pequeños clavos y pegamento. 
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
            <p class="funnel-display text-center md:text-left text-gray-700">
              Para añadir los últimos detalles, como los nombres de las marcas de los componentes de la bici, maqueté e imprimí unos cuantos elementos.
              Por último, realicé un diseño de packaging y un folleto con toda la información.
              La bicleta una vez finalizada mide 7cm de alto y 12cm de largo.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section class="flex flex-col md:flex-row w-full gap-4 items-center justify-center"> 
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
    
  </main>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Schoolbell&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Wallpoet&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap');

.schoolbell-regular {
  font-family: "Schoolbell", cursive;
  font-weight: 400;
  font-style: normal;
}

.wallpoet-regular {
  font-family: "Wallpoet", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.funnel-display {
  font-family: "Funnel Display", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}


</style>