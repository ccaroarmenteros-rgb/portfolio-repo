import { ref, onMounted, onUnmounted } from 'vue'

export const useFadeIn = () => {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement | null>(null)

  const checkVisibility = () => {
    if (!elementRef.value) return
    const rect = elementRef.value.getBoundingClientRect()
    if (rect.top <= window.innerHeight * 0.8) {
      isVisible.value = true
    }
  }

  onMounted(() => window.addEventListener('scroll', checkVisibility))
  onUnmounted(() => window.removeEventListener('scroll', checkVisibility))

  return { isVisible, elementRef }
}