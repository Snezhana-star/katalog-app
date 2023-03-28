<template>
  <div class="order">
    <div class="top">
      <h2 class="title" >Заказ: #{{id}}</h2>
      <div class="sum">{{sum}}$</div>
    </div>

    <div class="content">

      <div class="product"
           v-for="product in products"
           :key="product.id"
      >
       <div class="name">{{product.name}}</div>
       <div class="amount">{{product.amount}}</div>
      </div> <!-- product -->

    </div>

  </div>
</template>

<script>
export default {
  name: "KaOrder",
  props: {
    id: {
      type: Number,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    sum: {
      type: Number,
      required: true
    },

    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

.order {
  margin-top: 30px;
}

.top {
  padding: 10px 20px;
  background-color: #b7b7b7;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sum {
  font-size: 22px;
  color: green;
  font-weight: bold;
}

.product {

  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  font-size: 18px;
  font-weight: bold;
}

.product .name {}

</style>