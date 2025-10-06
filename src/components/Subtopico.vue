<template>
  <h6 class="font-weight-bold text-h5 mb-10">{{ titulo }}</h6>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
