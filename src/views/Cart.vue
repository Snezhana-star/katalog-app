<template>
  <div class="cart">

    <div class="title">Your Cart</div>
    <div v-if="isLoading" :class="{loader: isLoading}"></div>

<!--    <div class="card-wrapper" v-else>-->
<!--      <ka-card v-for="product in products"-->
<!--               :product="product"-->
<!--      ></ka-card>-->
<!--    </div>-->
  </div>

</template>

<script>
export default {
  name: "KaCart",

  mounted() {
    this.$store.dispatch('getCart', {token: this.token});
  },

  computed: {
    isLoading() {
      return this.$store.state.products.isLoading;
    },

    products() {
      return this.$store.state.products.products;
    },

    token() {
      return this.$store.state.auth.userToken;
    }
  }
}
</script>

<style scoped>

.cart {
  margin-top: 50px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

</style>