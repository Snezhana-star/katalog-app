<template>
  <div class="page">
    <ka-top-bar></ka-top-bar>
    <div class="page-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import KaTopBar from '@/components/TopBar';
  export default {
    name: 'App',
    components: {KaTopBar},
  }
</script>

<style>
* {
  padding: 0;
  margin: 0;

  box-sizing: border-box;
}

body {
  background-color: #eeeeee;
}

.page-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

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