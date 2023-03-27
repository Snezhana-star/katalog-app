<template>
  <div class="card">
    <div class="top">
      <div class="title">{{product.name}}</div>
      <div class="price">{{product.price}}$</div>
    </div>
    <div class="desc">{{product.description}}</div>
    <div class="actions">
      <button class="add" type="button">Add to Cart</button>
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
    }
  }
}
</script>

<style scoped>

.card {
  max-width: 320px;
  width: 100%;
  padding: 10px;
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
}

.actions .add {
  width: 100%;
  border: 0;
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


</style>