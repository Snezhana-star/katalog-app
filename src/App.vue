<template>
  <div class="page">
    <div class="page-container">
      <router-view/>
    </div>
  </div>
</template>

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