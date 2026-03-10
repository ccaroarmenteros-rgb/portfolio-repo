
<script setup lang="ts">
import { HouseHeart } from 'lucide-vue-next'
</script>


  <template>
  <div class="min-h-screen">
    
    <div v-if="$route.name === 'modelado'">
       
      <nav class="relative z-30 w-full bg-white px-6 py-4 shadow-md flex items-center justify-between">
        <button @click="$router.push('/')" 
         class="p-2 bg-[rgb(154,106,123)] hover:bg-[rgb(183,132,151)] text-white rounded-md transition-colors flex items-center justify-center"
        aria-label="Volver a Home"
    >
      <HouseHeart class="w-6 h-6" />
        </button>
      </nav>

      <section class="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden">
       
        <h1 class="schoolbell-regular relative z-20 text-5xl md:text-7xl font-bold text-[rgb(154,106,123)] transition-all px-4 flex items-center justify-center gap-6">
            <span>MODELADO</span>
            <img src="/imagenes/Home/BotónModelado.png" alt="Ilustración" class="h-35 md:h-52 w-auto object-contain hover:opacity-90 transition-all cursor-pointer" />
        </h1>
      </section>

      
     <div class="w-full bg-[rgb(154,106,123)] py-2 overflow-hidden border-b border-t border-gray-100 shadow-sm flex items-center">
  <p class="schoolbell-regular whitespace-nowrap text-white text-xl font-bold animate-marquee-lr">
      ♡ Descubre mis trabajos de modelado destacados♡
        </p>
      </div>

      

   <section class="w-full bg-[url('/imagenes/Home/Claro.jpg')] bg-cover bg-center py-12">
  
  <div class="max-w-6xl mx-auto px-4">
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      
      <div class="flex flex-col items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <img 
        src="/imagenes/Modelado/Muñeca.jpg" 
        alt="Muñeca" 
        class="w-full h-64 object-cover rounded-xl shadow-inner"/>
        <router-link
         to="/modelado/muneca" 
         class="schoolbell-regular px-6 py-3 w-full text-center bg-[rgb(154,106,123)] text-white rounded-xl hover:bg-[rgb(122,85,98)] transition-colors font-medium shadow-md"
         >Ver Muñeca
        </router-link>
      </div>

      <div class="flex flex-col items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <img 
        src="/imagenes/Modelado/BiciAzul.jpg" 
        alt="Bici"
         class="w-full h-64 object-cover rounded-xl shadow-inner"/>
        <router-link 
         to="/modelado/bici" 
         class=" schoolbell-regular px-6 py-3 w-full text-center bg-[rgb(154,106,123)] text-white rounded-xl hover:bg-[rgb(122,85,98)] transition-colors font-medium shadow-md"
         >Ver Bici
        </router-link>
      </div>

      <div class="flex flex-col items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <img 
        src="/imagenes/Modelado/PezVerde.jpg"
         alt="Llaveros" 
         class="w-full h-64 object-cover rounded-xl shadow-inner"/>
        <router-link 
         to="/modelado/llaveros"
         class=" schoolbell-regular px-6 py-3 w-full text-center bg-[rgb(154,106,123)] text-white rounded-xl hover:bg-[rgb(122,85,98)] transition-colors font-medium shadow-md"
         >Ver Llaveros
        </router-link>
      </div>

    </div>

  </div>
</section>

    </div> <router-view></router-view>

  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Schoolbell&display=swap');

.schoolbell-regular {
  font-family: "Schoolbell", cursive;
  font-weight: 400;
  font-style: normal;
}

.animate-marquee-lr {
  display: inline-block;
  animation: scroll-left-to-right 35s linear infinite; 
}

@keyframes scroll-left-to-right {
  0% {
    transform: translateX(-100%); 
  }
  100% {
    transform: translateX(100vw); 
  }
}
</style>
