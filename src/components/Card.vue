<template>
  <div class="card">
    <div class="top">
      <div class="title">{{product.name}}</div>
      <div class="price">{{product.price}}$</div>
    </div>
    <div class="desc">{{product.description}}</div>

    <div class="actions">
      <button v-if="!isAnonymous && status==='products'"
              class="add"
              type="button"
              @click="addToCart(product.id)"
      >Add to Cart</button>

      <template v-else-if="status==='cart'">
        <button class="add rm">Remove all</button>
        <div class="right">
          <button class="count" @click="deleteProduct">-</button>
          <span class="amount">{{amount}}</span>
          <button class="count" @click="addProduct(product.id)">+</button>
        </div>
      </template>

    </div>

  </div>
</template>

<script>
export default {
  name: "KaCard",
  props: {
    product: {
      type: Object,
      required: true
    },

    status: {
      type: String,
      required: true
    }
  },

  computed: {
    isAnonymous() {
      return this.$store.getters.isAnonymous;
    },

    token() {
      return this.$store.state.auth.userToken;
    },

    amount() {
      if(typeof this.product.productIds !== 'undefined' && this.product.productIds !== null) {
        return this.product.productIds.length;
      } else return 0;
    }

  },

  methods: {
    addToCart(productId) {
      this.$store.dispatch('addToCart', {productId: productId, token: this.token});
    },

    addProduct(productId) {
      this.$store.dispatch('addProduct', {productId: productId, token: this.token});
    },

    deleteProduct() {
      this.$store.dispatch('deleteProductFromCart', {productIds: [this.product.productIds[0]], token: this.token});
    }
  }
}
</script>

<style scoped>

.card {
  max-width: 320px;
  width: 100%;
  padding: 15px;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card:nth-child(n + 4) {
  margin-top: 20px;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 22px;
  font-weight: bold;

  display: flex;
}

.price {
  align-self: flex-start;
  color: green;
}

.desc {
  font-size: 18px;
  margin-top: 15px;
}

.actions {
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
}

.actions .add {
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 10px 5px;
  background-color: #52b4f6;

  transition: background-color 0.1s linear;
}

.actions .add:hover {
  cursor: pointer;
  background-color: #ff5031;
}

.actions .add:active {
  transform: scale(95%);
}

.actions .right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 30%;
}

.actions .right .count {
  width: 20px;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
}

.actions .right .count:hover {
  cursor: pointer;
}

.actions .right .count:active {
  transform: scale(90%);
}

.actions .right .count:last-child {
  background-color: green;
}

.actions .right .count:first-child {
  background-color: red;
}

.actions .add.rm {
  flex-basis: 40%;
  background-color: red;
  color: white;
}


</style>