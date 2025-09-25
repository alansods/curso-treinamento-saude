<template>
  <span
    class="font-weight-bold voce_sabia cursor-pointer px-1"
    style="white-space: nowrap"
    @click="toggleGlossario">

    <v-icon class="mr-1" size="20" color="white">mdi-help-circle</v-icon>
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: [],

  methods: {
    toggleGlossario() {
      this.$emit('onToggleGlossario');
    }
  }
};
</script>

<style></style>
