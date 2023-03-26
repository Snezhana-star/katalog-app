<template>
  <div class="register">
    <h2 class="title">Register</h2>
    <form action="/" @submit.prevent="onSubmit">
      <div class="item">
        <input type="text" placeholder="First name" v-model="firstName">
        <ul class="errors">
          <li>Ошибка имени</li>
          <li>Ошибка имени</li>
        </ul>
      </div>

      <div class="item">
        <input type="text" placeholder="Patronymic" v-model="patronymic">
        <ul class="errors"></ul>
      </div>

      <div class="item">
        <input type="text" placeholder="Last name" v-model="lastName">
        <ul class="errors"></ul>
      </div>

      <div class="item">
        <input type="email" placeholder="E-mail">
        <ul class="errors"></ul>
      </div>

      <div class="item">
        <input type="password" placeholder="Password">
        <ul class="errors"></ul>
      </div>

      <div class="item">
        <input type="password" placeholder="Confirm password">
        <ul class="errors"></ul>
      </div>
      <input class="btn" type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "KaRegister",
  data() {
    return {
      firstName: '',
      patronymic: '',
      lastName: '',
    }
  },

  computed: {
    fio() {
      return `${this.lastName} ${this.firstName} ${this.patronymic}`;
    }
  },

  watch: {
    fio() {
      console.log('Изменено');
    }
  },

  methods: {
    onSubmit() {
      console.log('Форма отправлена');
    }
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

.errors {
  min-height: 15px;
  list-style-type: none;
  text-align: left;
  font-size: 14px;
  color: red;
}

.errors li:first-child {
  margin-top: 3px;
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
  transition: all 0.2s linear;
  margin-top: 20px;
}

input.btn:hover {
  cursor: pointer;
  background-color: #0378ea;
}

</style>