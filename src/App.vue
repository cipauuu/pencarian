<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin: 3vw auto;
  padding: 0vw 30vw;
}

@media only screen and (max-width: 600px) {
  #app {
    padding: 0vw 0vw;
  }
}

.body {
  padding: 2vw 0;
  border: 2px solid #f2f2f2;
  border-top: 0;
}
</style>
