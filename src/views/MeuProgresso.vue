<template>
  <AulaTemplate
    :titulo="$store.state.modulos[0].titulo"
    :numero="$store.state.modulos[0].numero"
    titleSize="3"
  >
    <TextBlock topico="Meu Progresso">
      <h3 class="text-h6 font-weight-bold">Módulo 01</h3>
      <v-progress-linear
        :value="porcentagem_modulo_01"
        height="25"
        color="success"
        class="rounded"
      >
        <strong>{{ porcentagem_modulo_01 }}%</strong>
      </v-progress-linear>

      <h3 class="text-h6 font-weight-bold mt-8">Módulo 02</h3>
      <v-progress-linear value="0" height="25" color="success" class="rounded">
        <strong>0%</strong>
      </v-progress-linear>
    </TextBlock>
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
  },

  computed: {
    porcentagem_modulo_01() {
      return this.$store.state.progresso_modulo_01.porcentagem
    }
  },

  methods: {
    calcularPorcentagem(progresso) {
      const totalItens = Object.keys(progresso).length;
      const itensCompletos = Object.values(progresso).filter(valor => valor).length;
      const porcentagem = Math.round((itensCompletos / totalItens) * 100);
      this.$store.state.progresso_modulo_01.porcentagem = porcentagem
}
  },

  created() {
    this.calcularPorcentagem(this.$store.state.progresso_modulo_01.items)
  }
};
</script>

<style></style>
