<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon @click="decreaseFont">mdi-format-font-size-decrease</v-icon>
        </v-btn>
      </template>
      <span>Reduzir tamanho da fonte</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon @click="resetFont">mdi-format-text-variant</v-icon>
        </v-btn>
      </template>
      <span>Resetar tamanho da fonte</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon @click="increaseFont">mdi-format-font-size-increase</v-icon>
        </v-btn>
      </template>
      <span>Aumentar tamanho da fonte</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 18, // Tamanho inicial da fonte
      maxFontSize: 22, // Limite máximo do tamanho da fonte
      minFontSize: 14, // Limite mínimo do tamanho da fonte
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
      this.$emit("font-size-changed", this.fontSize);
    },
  },
};
</script>

<style scoped>
.font-button {
}
</style>
