<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  unmounted() {
    localStorage.clear()
  }
}
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url("@/assets/切片/图层 8.png"),url("@/assets/切片/BG.png"),url("@/assets/切片/图层 6.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
