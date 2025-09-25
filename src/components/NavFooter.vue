<template>
  <div class="container">
    <NavButton
      :name="prevName"
      :link="prevLink"
      color="primary"
      icon="mdi-arrow-left-bold-circle"
      :left="true"
    ></NavButton>

    <div class="container-buttons">
      <NavButton
        v-if="lastTopico"
        name="Referências"
        :link="referenciasLink"
        color="secondary"
        icon="mdi-book-open-variant"
        :left="true"
      ></NavButton>

      <NavButton
        v-if="lastTopico"
        name="Iniciar Avaliação"
        :link="atividadeLink"
        color="success"
        icon="mdi-text-box-edit"
        :left="true"
      ></NavButton>

      <NavButton
        v-if="nextName"
        :name="nextName"
        :link="nextLink"
        color="primary"
        icon="mdi-arrow-right-bold-circle"
        :right="true"
        :endCourse="endCourse"
      ></NavButton>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton.vue";

export default {
  props: {
    prevName: {
      type: String,
      required: true,
    },

    nextName: {
      type: String,
      required: false,
    },

    prevLink: {
      type: String,
      required: true,
    },

    nextLink: {
      type: String,
      required: false,
    },

    lastTopico: {
      type: Boolean,
      required: false,
      default: false,
    },

    atividadeLink: {
      type: String,
      required: false,
    },

    referenciasLink: {
      type: String,
      required: false,
    },
  },

  components: {
    NavButton,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0;
}

.container-buttons {
  display: flex;
  gap: 20px;
}

@media (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
  }

  .container-buttons {
    flex-direction: column-reverse;
  }
}
</style>
