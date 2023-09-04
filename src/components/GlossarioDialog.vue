<template>
  <v-bottom-sheet inset v-model="$store.state.showGlossario">
    <v-sheet class="text-center rounded-t-lg py-5" height="auto">
      <div class="py-3 px-5">
        <h5 class="text-h5 font-weight-bold mb-2 orange--text">Glossário</h5>
          <slot></slot>
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
};
</script>

<style></style>
