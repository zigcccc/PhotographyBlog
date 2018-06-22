<template>
  <div id="album-hero-container">
    <h1>{{ title }}</h1>
      {{ desc }}
  </div>
</template>

<script>
export default {
  name: 'AlbumHero',
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
