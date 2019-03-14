<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    if (!window.localStorage['userInfo'] && !window.sessionStorage['userInfo']) {
      this.$go('/login')
    }
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  border-box: box-sizing;
  background-color: #EBF2FA;
}
</style>
