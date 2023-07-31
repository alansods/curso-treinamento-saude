<template>
  <div>
    <v-simple-table fixed-header height="auto" class="custom-table">
      <template v-slot:default>
        <slot></slot>
      </template>
    </v-simple-table>
    <small>Quadro 1: Lista de Doenças Relacionadas ao Trabalho.</small>
    <small>Fonte: (BRASIL, 2005; 2008).</small>
  </div>
</template>

<script>
export default {
  props: ["legenda", "fonte"],
};
</script>

<style>
.custom-table {
  border: solid 1px #eee;
  border-radius: 8px;
  margin-bottom: 5px;
}
</style>
