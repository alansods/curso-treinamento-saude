<template>
  <h5 class="font-weight-bold primary--text text-h5 text-sm-h4 mb-10">
    {{ titulo }}
  </h5>
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
