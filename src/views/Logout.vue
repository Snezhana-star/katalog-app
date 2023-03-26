<template>
  <div :class="{loader: isLoading}"></div>
</template>

<script>
export default {
  name: "KaLogout",
  mounted() {
    this.$store.dispatch('logout', {token: this.$store.getters.userToken}).then(resolved => {
      this.$router.push({name: 'products'});
    });
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isSubmitting;
    }
  }
}
</script>

<style scoped>

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  margin: 0 auto;
  margin-top: 200px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>