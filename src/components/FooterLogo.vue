<template>
  <v-footer class="footer white">
    <v-img :src="require('../assets/logo-footer-light.svg')" class="footer-img"/>
  </v-footer>
</template>

<script>

export default {

}
</script>

<style scoped>
.footer {
  border-top: solid 1px #F2F2F2 !important;
  padding-top: 20px;
  height: 162px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.footer-img {
  max-width: 236px;
  height: 103px;
}
</style>