<template>
  <ul class="errors">
    <li v-for="(message, index) in messages" :key="message">{{message}}</li>
  </ul>
</template>

<script>
export default {
  name: "KaValidationErrors",
  props: {
    messages: {
      type: Array,
      required: false,
    }
  },
}
</script>

<style scoped>
.errors {
  min-height: 20px;
  list-style-type: none;
  text-align: left;
  font-size: 14px;
  color: red;
}

.errors li:first-child {
  margin-top: 5px;
}
</style>