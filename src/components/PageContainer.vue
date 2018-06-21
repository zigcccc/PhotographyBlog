<template>
  <div id="page-container">
    <slot></slot>
    <div id="vertical-line"></div>
  </div>
</template>

<script>
export default {
  name: 'PageContainer'
}
</script>


<style lang="sass" scoped>
#page-container
  padding: calc(#{$navbar-height} + 1em) 0 0
  min-height: 10000px
  posiition: relative

#vertical-line
  height: 100%
  width: 2px
  background: $black
  position: fixed
  z-index: 1000
  height: 90vh
  top: calc(#{$navbar-height} + 1em)
  right: calc(1em + 22px)
</style>
