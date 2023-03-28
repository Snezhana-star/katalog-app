<template>
  <div class="orders">
    <div class="title">Your Orders</div>
    <div v-if="isLoading" :class="{loader: isLoading}"></div>
    <div v-if="amount === 0">Empty</div>
    <div class="orders-wrapper">
      <ka-order
          v-for="(order, index) in orders"
          :key="order.orderId"

          :id="order.orderId"
          :name="order.name"
          :sum="order.sum"
          :products="order.products"
      ></ka-order>
    </div>

  </div>
</template>

<script>
import KaOrder from '@/components/Order.vue';
export default {
  name: "KaOrders",
  components: {KaOrder},

  computed: {
    token() {
      return this.$store.state.auth.userToken;
    },

    orders() {
      if(this.$store.state.products.orders !== null) return this.$store.state.products.orders
      else return null;
    },

    isLoading() {
      return this.$store.state.products.isLoading;
    },

    amount() {
      if(typeof this.orders !== "undefined" && this.orders !== null) {
        return this.orders.length;
      } else return null;
    },
  },

  mounted() {
    this.$store.dispatch('getOrder', {token: this.token}).then(resolved => {
      this.$router.push({name: 'login'});
    });
  },

}
</script>

<style scoped>

.orders {
  margin-top: 50px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

</style>