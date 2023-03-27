<template>
  <div class="products">
    <div class="title">Our Products</div>
    <div v-if="isLoading" :class="{loader: isLoading}"></div>
    <div class="card-wrapper" v-else>
      <ka-card v-for="product in products"
               :product="product"
      ></ka-card>
    </div>
  </div>
</template>

<script>
import KaCard from '@/components/Card';
export default {
  name: "KaProducts",
  components: {KaCard},
  mounted() {
    this.$store.dispatch('getProducts');
  },

  computed: {
    isLoading() {
      return this.$store.state.products.isLoading;
    },

    products() {
      return this.$store.state.products.allProducts;
    }
  }
}
</script>

<style scoped>

.products {
  margin-top: 50px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.card-wrapper {
  margin-top: 50px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>