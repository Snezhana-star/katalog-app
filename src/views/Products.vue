<template>
  <div class="products">
    products
  </div>
</template>

<script>
export default {
  name: "KaProducts",
  mounted() {
    this.$store.dispatch('getProducts');
  }
}
</script>

<style scoped>

</style>