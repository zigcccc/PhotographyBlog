<template>
  <div id="page-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageContainer'
}
</script>


<style lang="sass" scoped>
#page-container
  padding: calc(#{$navbar-height} + 1em) 1em 0
  min-height: 10000px
</style>
