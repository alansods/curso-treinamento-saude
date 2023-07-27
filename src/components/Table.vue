<template>
  <div>
    <v-card class="rounded-lg pt-2 pb-1 my-1">
      <v-simple-table fixed-header height="auto">
        <template v-slot:default>
          <slot></slot>
        </template>
      </v-simple-table>
    </v-card>
    <small>Quadro 1: Lista de Doenças Relacionadas ao Trabalho.</small>
    <small>Fonte: (BRASIL, 2005; 2008).</small>
  </div>
</template>

<script>
export default {
  props: ["legenda", "fonte"]
};
</script>

<style></style>
