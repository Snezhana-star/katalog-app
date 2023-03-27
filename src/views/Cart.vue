<template>
  <div class="cart">

    <div class="title">Your Cart</div>
    <div v-if="isLoading" :class="{loader: isLoading}"></div>

    <div class="card-wrapper" v-else>
      <ka-card v-for="product in products"
               :product="product"
               :status="status"
      ></ka-card>
    </div>
  </div>

</template>

<script>
import KaCard from '@/components/Card';
export default {
  name: "KaCart",
  components: {KaCard},

  data() {
    return {
      status: 'cart'
    }
  },

  mounted() {
    this.$store.dispatch('getCart', {token: this.token}).then(resolved => {
      this.$router.push({name: 'login'});
    });
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

.card-wrapper {
  margin-top: 50px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

</style>