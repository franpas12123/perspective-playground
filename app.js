
const vm = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!!',
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    }
  },
  computed: {
    boxSettings() {
      const style = {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      }
      return style
    }
  },
  methods: {
    reset() {
      this.perspective = 0
      this.rotateX = 0
      this.rotateY = 0
      this.rotateZ = 0
    },
    copy() {
      const text = `transform: ${this.boxSettings.transform};`
      navigator.clipboard.writeText(text)
      alert('CSS copied to clipboard!')
    }
  },
}).mount('#app')