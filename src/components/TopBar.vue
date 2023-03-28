<template>
  <div class="topbar">
    <router-link class="link home" to="products">My katalog</router-link>
    <nav>
      <template v-if="isAnonymous">
        <router-link class="link" to="register">Register</router-link>
        <router-link class="link" to="login">Login</router-link>
      </template>

      <template v-else>
        <router-link class="link" to="products">Products</router-link>
        <router-link class="link" to="cart">Cart</router-link>
        <router-link class="link" to="order">Order</router-link>
        <router-link class="link" to="logout">Logout</router-link>
      </template>
    </nav>
  </div>
</template>

<script>
export default {
  name: "KaTopBar",
  computed: {
    isAnonymous() {
      return this.$store.getters.isAnonymous;
    }
  }
}
</script>

<style scoped>

.topbar {
  width: 100%;
  height: 70px;
  background-color: #232323;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.link {
  text-decoration: none;
  color: #e8e8e8;
  font-size: 20px;
}

nav .link:nth-child(n + 2) {
  margin-left: 10px;
}

nav .link:hover {
  color: #ff5031;
}

.link.home {
  font-size: 26px;
  font-weight: bold;
  text-transform: capitalize;
}

</style>