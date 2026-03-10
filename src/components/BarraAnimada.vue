<script setup lang="ts">
interface Props {
  texto: string;
  colorFondo?: string; 
}

const props = withDefaults(defineProps<Props>(), {
  colorFondo: 'bg-[rgb(154,106,123)]' 
});
</script>

<template>
  <div :class="['w-full py-2 overflow-hidden border-b border-t border-gray-100 shadow-sm flex items-center', props.colorFondo]">
    <p class="schoolbell-regular whitespace-nowrap text-white text-xl font-bold animate-marquee-lr">
      {{ props.texto }}
    </p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Schoolbell&display=swap');

.schoolbell-regular {
  font-family: "Schoolbell", cursive;
  font-weight: 400;
  font-style: normal;
}

@keyframes marquee-lr {
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
}
.animate-marquee-lr {
  animation: marquee-lr 15s linear infinite;
}
</style>