<template>
  <div class="products">

    <ul v-if="amountSuccessMessages" class="messages-wrapper">
      <li class="message" v-for="(message, index) in successMessages" :key="index">
        <span class="close" @click="removeSuccessMessage(index)">x</span>
        {{message}}
      </li>
    </ul>

    <div class="title">Our Products</div>
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
  name: "KaProducts",
  components: {KaCard},

  data() {
    return {
      status: 'products'
    }
  },

  mounted() {
    this.$store.dispatch('getProducts');
  },

  computed: {
    isLoading() {
      return this.$store.state.products.isLoading;
    },

    products() {
      return this.$store.state.products.products;
    },

    amountSuccessMessages() {
      let sM = this.$store.state.products.successMessages;
      let amount = Object.keys(sM).length;
      if(amount !== 0) return true;
      else return false;
    },

    successMessages() {
      return this.$store.state.products.successMessages;
    }
  },

  methods: {
    removeSuccessMessage(index) {
      this.$store.commit('removeSuccessMessage', index);
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

.messages-wrapper {
  max-width: 325px;
  width: 100%;
  list-style-type: none;

  position: fixed;
  right: 25px;
  bottom: 25px;
}

.message {
  padding: 15px 20px;
  text-align: center;
  font-size: 20px;
  color: white;
  border-radius: 5px;

  background-color: rgb(0, 0, 0, 0.5);
  position: relative;
}

.message:nth-child(n + 2) {
  margin-top: 10px;
}

.message .close {
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 24px;
}

.message .close:hover {
  cursor: pointer;
  color: black;
}

</style>