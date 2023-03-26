<template>
  <div class="login">
    <h2 class="title">Login</h2>
    <form action="/" @submit.prevent="onSubmit">

      <div class="item">
        <input type="email" placeholder="email" v-model="formData.email">
        <ka-validation-errors v-if="isErrors" :messages="isErrors.email"></ka-validation-errors>
      </div>

      <div class="item">
        <input type="password" placeholder="password" v-model="formData.password">
        <ka-validation-errors v-if="isErrors" :messages="isErrors.password"></ka-validation-errors>
      </div>

      <input class="btn" :class="{margin: !isErrors}" type="submit">
    </form>
  </div>
</template>

<script>
import KaValidationErrors from '@/components/ValidationErrors';
export default {
  name: "KaLogin",
  components: {KaValidationErrors},
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    isErrors() {
      return this.$store.getters.isErrors;
    },

    payload() {
      return {
        "email": this.formData.email,
        "password": this.formData.password
      }
    }
  },

  methods: {
    onSubmit() {
      this.$store.commit('validateFields', this.formData);
      if(!this.isErrors) this.$store.dispatch('login', this.payload).then(resolved => {
        this.$router.push({name: 'products'});
      });
    }
  }
}
</script>

<style scoped>

.login {
  max-width: 350px;
  width: 100%;

  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: white;
  padding: 30px 40px;
  margin-top: 50px;
}

.item {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.item.margin:nth-child(n + 2) {
  margin-top: 20px;
}

input {
  border: 0;
  border-bottom: 2px solid #989898;
  font-size: 20px;
  padding: 10px 5px;
}

input::placeholder {
  color: #b7b7b7;
}

input:focus {
  outline: none;
}

input.btn {
  border: 0;
  background-color: dodgerblue;
  color: white;
  margin-top: 20px;
  transition: background-color 0.2s linear;
}

input.btn.margin {
  margin-top: 40px;
}

input.btn:hover {
  cursor: pointer;
  background-color: #0378ea;
}

</style>