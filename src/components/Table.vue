<template>
  <div>
    <v-simple-table fixed-header height="auto">
      <template v-slot:default>
        <slot></slot>
      </template>
    </v-simple-table>

    <SmallText>Quadro 1: Lista de Doenças Relacionadas ao Trabalho.</SmallText>
    <SmallText>Fonte: (BRASIL, 2005; 2008).</SmallText>
  </div>
</template>

<script>
import SmallText from "@/components/SmallText.vue";

export default {
  components: {
    SmallText,
  },

  props: ["legenda", "fonte"],
};
</script>

<style>

.v-data-table--fixed-header > .v-data-table__wrapper {
  border-radius: 8px;
  border: solid 1px #eee;
  margin-bottom: 5px;
}
</style>
