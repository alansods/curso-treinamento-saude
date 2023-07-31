<template>
  <div class="d-flex">
    <v-card class="rounded-lg px-2 py-1 flex-grow-1">
      <v-card-text>
        <Topico :titulo="topico" v-if="topico" />
        <Subtopico :titulo="subTopico" v-if="subTopico" />
          <slot></slot>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Topico from "./Topico.vue";
import Subtopico from "./Subtopico.vue";

export default {
  props: [ "topico", "subTopico" ],

  components: {
    Topico,
    Subtopico,
  },
};
</script>

<style></style>
