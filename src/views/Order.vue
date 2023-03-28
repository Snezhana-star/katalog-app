<template>
  <div class="orders">
    <div class="title">Your Orders</div>

    <div class="ordes-wrapper">
      <div v-for="(order, index) in orders" :ket="order.orderId" class="order">
        {{order}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KaOrder",

  computed: {
    token() {
      return this.$store.state.auth.userToken;
    },

    orders() {
      if(this.$store.state.products.orders !== null) return this.$store.state.products.orders
      else return null;
    }
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

.order {
  margin-top: 30px;
}

</style>