<template>
  <div style="display: none">
    <v-btn @click="decreaseFont">A-</v-btn>
    <v-btn @click="resetFont">A</v-btn>
    <v-btn @click="increaseFont">A+</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 18, // Tamanho inicial da fonte
      maxFontSize: 24, // Limite máximo do tamanho da fonte
      minFontSize: 12, // Limite mínimo do tamanho da fonte
    };
  },
  methods: {
    decreaseFont() {
      this.fontSize = Math.max(this.fontSize - 2, this.minFontSize);
      this.updateFontSize();
    },
    resetFont() {
      this.fontSize = 18;
      this.updateFontSize();
    },
    increaseFont() {
      this.fontSize = Math.min(this.fontSize + 2, this.maxFontSize);
      this.updateFontSize();
    },
    updateFontSize() {
      document.documentElement.style.fontSize = this.fontSize + "px";
    },
  },
};
</script>
