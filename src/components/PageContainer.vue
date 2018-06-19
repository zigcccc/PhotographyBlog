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
  margin-left: 200px
  padding: 1em
  min-height: 10000px
</style>
