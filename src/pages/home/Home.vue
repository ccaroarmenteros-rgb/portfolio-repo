 <script lang="ts" setup>
import { Button } from '@/components/ui/button'






</script>




<template>


<div class="bg-[rgb(255,255,255)] h-screen text-black font-sans text-center w-screen flex flex-col justify-center items-center gap-12 fixed overflow-hidden">





<h1 class="text-5xl md:text-7xl lg:text-7xl font-bold pb-1 md:pb-1 z-10 transition-all">
  <span>Cristina Caro</span>
</h1>

<p class="text-lg md:text-2xl transition-all">
 Diseño y modelado
</p>



<div class="z-10">
   <Button class="bg-[rgb(162,196,70)] mr-2 md: py-5 md:px-6 md: text-lg hover:bg-[rgb(162,196,70,0.7)] transition-all">
      <RouterLink to="/informacion">¿Quién soy?</RouterLink>
   </Button>


    <Button class="bg-[rgb(162,196,70)] mr-2 md: py-5 md:px-6 md: text-lg hover:bg-[rgb(162,196,70,0.7)] transition-all">
      <RouterLink to="/modelado">Modelado</RouterLink>
   </Button>


    <Button class="bg-[rgb(162,196,70)] mr-2 md: py-5 md:px-6 md: text-lg hover:bg-[rgb(162,196,70,0.7)] transition-all">
      <RouterLink to="/diseño">Diseño</RouterLink>
   </Button>


    <Button class="bg-[rgb(162,196,70)] mr-2 md: py-5 md:px-6 md: text-lg hover:bg-[rgb(162,196,70,0.7)] transition-all">
    <RouterLink to="/ilustración">Ilustración</RouterLink>
   </Button>
  


    </div>


   </div>
</template>


<style scoped>
 




</style>

