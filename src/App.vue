<template>
  <div id="app">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'app',
  components: {Sidebar}
}
</script>

<style lang="sass">
#app
  font-family: $family-sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $black
  background: $white
  min-height: 100vh
  display: flex
</style>
