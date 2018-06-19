<template>
  <div id="app">
    <Sidebar />
    <PageContainer>
      <router-view></router-view>
    </PageContainer>
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
body
  background: lighten($white, 2%)
  min-height: 100vh
#app
  font-family: $family-sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $black
  display: flex
</style>
