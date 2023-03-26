<template>
  <div class="register">
    <h2 class="title">Register</h2>
    <form action="/" @submit.prevent="onSubmit">

      <div class="item">
        <input type="text" placeholder="First name" v-model="formData.firstName">
        <ka-validation-errors v-if="isErrors" :messages="isErrors.firstName"></ka-validation-errors>
      </div>

      <div class="item" :class="{margin: !isErrors}">
        <input type="text" placeholder="Patronymic" v-model="formData.patronymic">
        <ka-validation-errors v-if="isErrors" :messages="isErrors.patronymic"></ka-validation-errors>
      </div>

      <div class="item" :class="{margin: !isErrors}">
        <input type="text" placeholder="Last name" v-model="formData.lastName">
        <ka-validation-errors v-if="isErrors" :messages="isErrors.lastName"></ka-validation-errors>
      </div>

      <div class="item" :class="{margin: !isErrors}">
        <input type="email" placeholder="E-mail" v-model="formData.email">
        <ka-validation-errors v-if="isErrors" :messages="isErrors.email"></ka-validation-errors>
      </div>

      <div class="item" :class="{margin: !isErrors}">
        <input type="password" placeholder="Password" v-model="formData.password1">
        <ka-validation-errors v-if="isErrors" :messages="isErrors.password1"></ka-validation-errors>
      </div>

      <div class="item" :class="{margin: !isErrors}">
        <input type="password" placeholder="Confirm password" v-model="formData.password2">
        <ka-validation-errors v-if="isErrors" :messages="isErrors.password2"></ka-validation-errors>
      </div>

      <input class="btn" :class="{margin: !isErrors}" type="submit">
    </form>
  </div>
</template>

<script>
import KaValidationErrors from "@/components/ValidationErrors.vue";

export default {
  name: "KaRegister",
  components: {KaValidationErrors},
  data() {
    return {
      formData: {
        firstName: '',
        patronymic: '',
        lastName: '',
        password1: '',
        password2: '',
        email: '',
      }
    }
  },

  computed: {
    fio() {
      return `${this.formData.lastName} ${this.formData.firstName} ${this.formData.patronymic}`;
    },

    payload() {
      return {
        "fio": this.fio,
        "email": this.formData.email,
        "password": this.formData.password1
      }
    },

    isErrors() {
      return this.$store.getters.isErrors;
    }
  },

  methods: {
    onSubmit() {
      this.$store.commit('validateFields', this.formData);
      if(!this.isErrors) this.$store.dispatch('register', this.payload).then(resolved => {
        this.$router.push({name: 'products'});
      });
    },

  }
}
</script>

<style scoped>

.register {
  max-width: 350px;
  width: 100%;

  margin: 0 auto;
  text-align: center;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: white;
  padding: 30px 40px;
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