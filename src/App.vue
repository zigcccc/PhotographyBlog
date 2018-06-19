<template>
  <div id="app">
    <Navbar />
    <PageContainer>
      <router-view></router-view>
    </PageContainer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {Navbar}
}
</script>

<style lang="sass">
body
  background: $white
  min-height: 100vh
#app
  font-family: $family-sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $black
</style>
