<template>
  <div class="cart">

    <div class="title">Your Cart</div>
    <div v-if="isLoading" :class="{loader: isLoading}"></div>
    <div v-if="amount === 0">Empty</div>

    <div class="card-wrapper" v-else>
      <ka-card v-for="product in products"
               :product="product"
               :status="status"
      ></ka-card>
    </div>

    <div class="footer">
      <div class="sum">Sum: {{sum}}$</div>
      <button v-if="amount !== 0" class="order" @click="toOrder">to order</button>
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
    },

    amount() {
      if(typeof this.products !== "undefined" && this.products !== null) {
        return this.products.length;
      } else return null;
    },

    sum() {
      return this.$store.state.products.sum;
    }
  },

  methods: {
    toOrder() {
      this.$store.dispatch('toOrder', {token: this.token}).then(resolved => {
        this.$router.push({name: 'products'});
      });
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

.footer {
  background-color: #52b4f6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  margin-top: 30px;
  border-radius: 10px;
}

.footer .sum {
  font-size: 24px;
}

.footer .order {
  border: 0;
  background-color: yellow;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 20px;
}

.footer .order:hover {
  cursor: pointer;
  background-color: #ff5031;
}

.footer .order:active {
  transform: scale(95%);
}

</style>