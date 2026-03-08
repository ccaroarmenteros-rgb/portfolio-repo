 <script lang="ts" setup>

</script>
<template>
  <div class="bg-[url('/imagenes/Home/Portada.jpg')] bg-contain bg-center bg-no-repeat h-screen w-screen fixed overflow-hidden flex flex-col justify-center items-center font-sans">

   <div class="z-10 flex flex-row justify-center items-center gap-2 md:gap-4 w-full px-2">

      <RouterLink to="/modelado" class="transition-transform duration-300 hover:scale-110 w-full flex justify-center">
        <img 
          src="/imagenes/Home/BotónModelado.PNG" 
          alt="Modelado" 
          class="w-full max-w-37.5 md:max-w-112.5 aspect-square object-contain hover:opacity-90 transition-all cursor-pointer" 
        />
      </RouterLink>

      <RouterLink to="/diseño" class="transition-transform duration-300 hover:scale-110 w-full flex justify-center">
        <img 
          src="/imagenes/Home/BotónDiseño.PNG"
          alt="Diseño" 
          class="w-full max-w-37.5 md:max-w-112.5 aspect-square object-contain hover:opacity-90 transition-all cursor-pointer" 
        />
      </RouterLink>

      <RouterLink to="/ilustración" class="transition-transform duration-300 hover:scale-110 w-full flex justify-center">
        <img 
          src="/imagenes/Home/BotónIlustración.PNG"
          alt="Ilustración" 
          class="w-full max-w-37.5 md:max-w-112.5 aspect-square object-contain hover:opacity-90 transition-all cursor-pointer" 
        />
      </RouterLink>

      <RouterLink to="/informacion" class="transition-transform duration-300 hover:scale-110 w-full flex justify-center">
        <img 
          src="/imagenes/Home/BotónInformación.PNG"  
          alt="¿Quién soy?" 
          class="w-full max-w-37.5 md:max-w-112.5 aspect-square object-contain hover:opacity-90 transition-all cursor-pointer" 
        />
      </RouterLink>

</div>
</div>
</template>
<style scoped>
 




</style>

