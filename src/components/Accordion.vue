<template>
  <v-expansion-panels
    accordion
    focusable
    class="text-body-1 rounded-lg"
    v-model="activePanel"
  >
    <slot></slot>
  </v-expansion-panels>
</template>

<script>
export default {
  data() {
    return {
      activePanel: 0,
    };
  },
};
</script>

<style>
.v-expansion-panel::before {
  box-shadow: none !important;
  border: solid 1px #eee;
}

.v-expansion-panels {
  border: solid 1px #ddd;
}
</style>
