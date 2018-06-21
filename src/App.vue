<template>
  <div id="app">
    <navbar />
    <page-container>
      <router-view></router-view>
    </page-container>
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

p
  font-family: $family-sans-serif
  line-height: 1.618
  color: lighten($black, 20%)
.column
  &.is-vertical-aligned
    display: flex !important
    flex-direction: column
    justify-content: center
    position: relative
</style>
