
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Phone,Mail, Instagram,} from 'lucide-vue-next'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { DateValue } from 'reka-ui'
import { ref } from 'vue'
const dies = ref<DateValue>()

import NavBar from '@/components/NavBar.vue'

</script>


<template>
     <main class="w-full flex flex-col min-h-screen">
    
    <NavBar ruta="/" />
      <section class="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden">
     
        <h1 class="schoolbell-regular relative z-20 text-5xl md:text-7xl font-bold text-[rgb(154,106,123)] transition-all px-4 flex items-center justify-center gap-6">
            <span>¿QUIÉN SOY?</span>
            
            <img 
              src="/imagenes/Home/BotónInformación.png"
              alt="" 
              class="h-35 md:h-52 w-auto object-contain hover:opacity-90 transition-all cursor-pointer" 
            />
        </h1>
     </section>
     <section class="w-full bg-[rgb(154,106,123)] text-white">
      <div class="max-w-5xl mx-auto p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div class="w-full md:w-1/2 text-left">
         
          <p class="text-lg md:text-2xl opacity-80 funnel-display">
            Me llamo Cristina Caro Armenteros y soy estudiante de 2º año en el grado de Diseño y Tecnologías Creativas impartido por la UPV.
            Tengo habilidades en campos como el diseño, tipografía o ilustración pero estoy más especializada en trabajos de modelado o de audiovisual.
            En cuanto a softwares, controlo sin problemas los programas de Adobe como  Photoshop, Ilustrator, InDesign o Premiere. También manejo programas de ilustración y animación como Procreate o Dreams.
          </p>
        </div>
        <div class="w-full md:w-1/3">
          <a href="https://www.instagram.com/ccris.is/" target="_blank" class="block hover:opacity-90 transition-opacity">
            <img 
              src="/imagenes/Home/FotoYo.jpeg" 
              alt="" 
              class="w-full h-auto rounded-xl shadow-lg object-cover"
            >
          </a>
        </div>
      </div>
    </section>

 </main>
  <section id="contactus" class="w-full py-12 bg-[rgb(208,180,190)]">


  <div class="container mx-auto max-w-5xl px-4">


    <h2 class=" schoolbell-regular text-3xl font-bold text-[rgb(154,106,123)] mb-8 text-center">¡Contáctame!</h2>
         
    <div class="flex flex-col lg:flex-row gap-8 items-center">


   
      <div class="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <div class="aspect-square">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.9350118127413!2d-0.3466125878486056!3d39.48372267148631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488259073375%3A0xfb410ba707ca33c9!2sUPV%20-%20Facultad%20de%20Bellas%20Artes%20BBAA!5e1!3m2!1ses!2ses!4v1771255889705!5m2!1ses!2ses"
           width="600"
           height="450"
           class="w-full h-full rounded-lg"
           :style="{border: 0}"
           allowfullscreen
           loading="lazy"
           referrerpolicy="no-referrer-when-downgrade"
       ></iframe>
        </div>
      </div>


          
      <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
        <form  class=" schoolbell-regular space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square">
          <div class="space-y-2">
                 
               <Label for="nomen">Nombre</Label>
               <Input id="nomen" required />


          </div>
               
          <div class="space-y-2">
             
         <Label for="cognomen">Apellidos</Label>
               <Input id="cognomen" required />


          </div>


          <div class="space-y-2">
              <Select required>
                  <SelectTrigger class="border-gray-200 bg-white text-gray-900 schoolbell-regular ">
                    <SelectValue placeholder="Selecciona tu campo de interés" />
                  </SelectTrigger>
                  <SelectContent class="bg-white 
                  ">
                    <SelectItem value="rescatare">
                      Modelado
                    </SelectItem>
                    <SelectItem value="investigare">
                      Diseño
                    </SelectItem>
                    <SelectItem value="persequi">
                     Ilustración
                    </SelectItem>
                 
                  </SelectContent>
                </Select>


          </div>


          <div class="space-y-2">


            <Label>Fecha de la consulta</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <span v-if="dies">
                     {{ dies.day}}/{{ dies.month }}/{{ dies.year }}
                    </span>
                     <span v-else>
                      Selecciona una fecha
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>  
                  <Calendar v-model="dies" />
                </PopoverContent>
              </Popover>
          </div>


          <Button
          type="submit"
          class="w-full bg-[rgb(154,106,123)] hover:bg-[rgb(216,170,186)] text-white text-md mt-4">
            Enviar solicitud
          </Button>
             
        </form>
      </div>
    </div>
  </div>
</section>


    <footer class="w-full bg-[rgb(154,106,123)] text-gray-300 py-12">
      <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">


        <div class="space-y-4 text-center md:text-left">


          <h3 class=" schoolbell-regular text-xl font-bold text-white">Información de Contacto</h3>
               
            <div class="space-y-2">
              <p class="flex items-center gap-2 justify-center md:justify-start text-white">
                <Phone class="w-5 h-5"/>
                (+34) 611 03 03 32


              </p>
              <p class="flex items-center gap-2 justify-center md:justify-start text-white">
                <Mail class= "w-5 h-5" />
                ccaroarmenteros@gmail.com


              </p>
              <p class="flex items-center gap-2 justify-center md:justify-start text-white">
                <MapPin class= "w-5 h-5"/>
                Valencia, Spain


              </p>
            </div>
          </div>


         
          <div class="space-y-4 text-center md:text-left text-white">
            <h3 class=" schoolbell-regular text-xl font-bold text-white">Sígueme</h3>
            <div class="flex gap-8 justify-center">
            <Instagram class= "w-10 h-10 hover:text-[rgb(216,170,186)]"/>
            <p class="text-lg md:text-3xl opacity-80 mb-4 font-bold">
              @ccris.is</p>
            </div>
        </div>
      </div>
    </footer>

</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Schoolbell&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap');
.schoolbell-regular {
  font-family: "Schoolbell", cursive;
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