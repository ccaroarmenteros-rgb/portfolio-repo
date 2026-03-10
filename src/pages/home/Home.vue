 <script lang="ts" setup>
</script>

<template>
  <div class="bg-contain bg-center bg-no-repeat min-h-screen w-screen overflow-x-hidden flex flex-col justify-center items-center gap-6 md:gap-8 py-8 px-4 font-sans">
  
    <section>
      <div>
        <img 
          src="/imagenes/Home/Cristina.png"
          alt="Cristina" 
          class="w-full max-w-48 md:max-w-55 max-h-[20vh] object-contain hover:opacity-90 transition-all cursor-pointer" 
        />
      </div>
    </section>

    <section class="w-full max-w-300">
      <div class="z-10 grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-sm md:max-w-full mx-auto">

        <RouterLink to="/modelado" class="group relative transition-transform duration-300 hover:scale-105 md:hover:scale-110 flex justify-center">
          <img 
            src="/imagenes/Home/BotónModelado.png" 
            alt="Modelado" 
            class="w-full max-w-32 md:max-w-55 max-h-[20vh] object-contain transition-opacity duration-300 group-hover:opacity-0 cursor-pointer" 
          />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            <span class="schoolbell-regular text-[rgb(154,106,123)] text-lg md:text-2xl font-bold text-center">Modelado</span>
          </div>
        </RouterLink>

        <RouterLink to="/diseño" class="group relative transition-transform duration-300 hover:scale-105 md:hover:scale-110 flex justify-center">
          <img 
            src="/imagenes/Home/BotónDiseño.png"
            alt="Diseño" 
            class="w-full max-w-32 md:max-w-55 max-h-[20vh] object-contain transition-opacity duration-300 group-hover:opacity-0 cursor-pointer" 
          />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            <span class="schoolbell-regular text-[rgb(154,106,123)] text-lg md:text-2xl font-bold text-center">Diseño</span>
          </div>
        </RouterLink>

        <RouterLink to="/ilustración" class="group relative transition-transform duration-300 hover:scale-105 md:hover:scale-110 flex justify-center">
          <img 
            src="/imagenes/Home/BotónIlustración.png"
            alt="Ilustración" 
            class="w-full max-w-32 md:max-w-55 max-h-[20vh] object-contain transition-opacity duration-300 group-hover:opacity-0 cursor-pointer" 
          />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            <span class="schoolbell-regular text-[rgb(154,106,123)] text-lg md:text-2xl font-bold text-center">Ilustración</span>
          </div>
        </RouterLink>

        <RouterLink to="/informacion" class="group relative transition-transform duration-300 hover:scale-105 md:hover:scale-110 flex justify-center">
          <img 
            src="/imagenes/Home/BotónInformación.png"  
            alt="¿Quién soy?" 
            class="w-full max-w-32 md:max-w-55 max-h-[20vh] object-contain transition-opacity duration-300 group-hover:opacity-0 cursor-pointer" 
          />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            <span class="schoolbell-regular text-[rgb(154,106,123)] text-lg md:text-2xl font-bold text-center">¿Quién soy?</span>
          </div>
        </RouterLink>

      </div>
    </section>

    <section>
      <div class="flex flex-col items-center gap-2">
        <img 
          src="/imagenes/Home/Portfolio.png"
          alt="Portfolio" 
          class="w-full max-w-32 md:max-w-55 max-h-[15vh] object-contain hover:opacity-90 transition-all cursor-pointer" 
        />
        <img 
          src="/imagenes/Home/Yo.png"
          alt="Yo" 
          class="w-full max-w-32 md:max-w-55 max-h-[15vh] object-contain hover:opacity-90 transition-all cursor-pointer" 
        />
      </div>
    </section>
    
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