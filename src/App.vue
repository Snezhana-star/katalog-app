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

</style>