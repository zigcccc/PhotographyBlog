<template>
  <div class="columns">
    <div class="column">
      <hero-animation />
    </div>
    <div class="column is-vertical-aligned">
      
    </div>
  </div>
</template>

<script>
import HeroAnimation from '@/components/HeroAnimation'
export default {
  name: 'Hero',
  components: {HeroAnimation}
}
</script>

<style lang="sass" scoped>
  .columns
    padding: 1em
</style>
