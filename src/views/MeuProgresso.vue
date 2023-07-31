<template>
  <AulaTemplate
    :titulo="$store.state.modulos[0].titulo"
    :numero="$store.state.modulos[0].numero"
  >
    <Card topico="Meu Progresso">
      <h3>Módulo 01</h3>
      <v-progress-linear value="30" height="25" color="success" class="rounded">
        <strong>30%</strong>
      </v-progress-linear>

      <h3 class="mt-10">Módulo 02</h3>
      <v-progress-linear value="20" height="25" color="success" class="rounded">
        <strong>20%</strong>
      </v-progress-linear>
    </Card>
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import Card from "@/components/Card.vue";

export default {
  components: {
    AulaTemplate,
    Card,
  },
};
</script>

<style></style>
