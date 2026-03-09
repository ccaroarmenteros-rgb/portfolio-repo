 <script lang="ts" setup>

</script>
<template>
  <div class="bg-[url('/imagenes/Home/Portada.jpg')] bg-contain bg-center bg-no-repeat h-screen w-screen fixed overflow-hidden flex flex-col justify-center items-center gap-4 md:gap-8 py-4 px-4 font-sans">
  
   
    <section class="w-full max-w-300">
        <div class="z-10 flex flex-row justify-center items-center gap-2 md:gap-6 w-full">

          <RouterLink to="/modelado" class="transition-transform duration-300 hover:scale-110 flex-1 flex justify-center">
            <img 
              src="/imagenes/Home/BotónModelado.png" 
              alt="Modelado" 
              class="w-full max-w-25 md:max-w-55 max-h-[20vh] object-contain hover:opacity-90 transition-all cursor-pointer" 
            />
          </RouterLink>

          <RouterLink to="/diseño" class="transition-transform duration-300 hover:scale-110 flex-1 flex justify-center">
            <img 
              src="/imagenes/Home/BotónDiseño.png"
              alt="Diseño" 
              class="w-full max-w-25 md:max-w-55 max-h-[20vh] object-contain hover:opacity-90 transition-all cursor-pointer" 
            />
          </RouterLink>

          <RouterLink to="/ilustración" class="transition-transform duration-300 hover:scale-110 flex-1 flex justify-center">
            <img 
              src="/imagenes/Home/BotónIlustración.png"
              alt="Ilustración" 
              class="w-full  max-h-[20vh] object-contain hover:opacity-90 transition-all cursor-pointer" 
            />
          </RouterLink>

          <RouterLink to="/informacion" class="transition-transform duration-300 hover:scale-110 flex-1 flex justify-center">
            <img 
              src="/imagenes/Home/BotónInformación.png"  
              alt="¿Quién soy?" 
              class="w-full max-w-25 md:max-w-55 max-h-[20vh] object-contain hover:opacity-90 transition-all cursor-pointer" 
            />
          </RouterLink>

        </div>
    </section>
   
    
 
  </div>
</template>
<style scoped>
 




</style>

