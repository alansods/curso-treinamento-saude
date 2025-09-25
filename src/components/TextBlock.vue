<template>
  <div class="rounded-lg py-1 flex-grow-1">
    <Topico :titulo="topico" v-if="topico" />
    <Subtopico :titulo="subTopico" v-if="subTopico" />
    <slot></slot>
  </div>
</template>

<script>
import Topico from "./Topico.vue";
import Subtopico from "./Subtopico.vue";

export default {
  props: {
    topico: {
      type: String,
      required: false,
    },
    subTopico: {
      type: String,
      required: false,
    },
  },

  components: {
    Topico,
    Subtopico,
  },
};
</script>

<style></style>
