<template>
  <div id="home-page">
    <Hero />
    <h1>HomePage</h1>
  </div>
</template>

<script>
  import Hero from '@/components/Hero'
  export default {
    name: 'Home',
    components: {Hero}
  }
</script>

<style lang="sass" scoped>
h1
  font-weight: 900
  font-size: 2em
</style>

