<template>
  <v-btn
    :color="color"
    :height="height"
    large
    :block="block"
    class="rounded-lg elevation-0 custom-btn white--text px-8"
    @click="handleButtonClick"
    :disabled="disabled"
  >
    <v-icon left v-if="left">
      {{ icon }}
    </v-icon>
    {{ name }}
    <v-icon right v-if="right">
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: [
    "color",
    "name",
    "icon",
    "right",
    "left",
    "height",
    "block",
    "link",
    "disabled",
  ],

  methods: {
    handleButtonClick() {
      if (this.link) {
        this.$router.push(`/${this.link}`);
        return;
      }

      this.$emit("button-click");
    },
  },
};
</script>

<style scoped>
.custom-btn:hover {
  transform: translateY(-5px);
}
</style>
