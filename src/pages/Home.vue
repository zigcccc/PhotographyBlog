<template>
  <div id="home-page">
    <Hero />
    <div v-for="image in predmeti" :key="image.id">
      <router-link :to="`/photos/${image.slug}`">
        <img :src="image.image" :alt="image.title">
      </router-link>
    </div>
    <div v-for="image in akti" :key="image.id">
      <router-link :to="`/photos/${image.slug}`">
        <img :src="image.image" :alt="image.title">
      </router-link>
    </div>
  </div>
</template>

<script>
  import Hero from '@/components/Hero'
  import { akti, figure, hrana, ljudje_na_ulici, poljubne, portreti_studio, portreti_tematski_sklop, predmeti } from '@/structure/images.json'

  export default {
    name: 'Home',
    components: {Hero},
    data() {
      return {
        akti: akti,
        predmeti: predmeti,
        figure: figure,
        hrana: hrana,
        ljudje_na_ulici: ljudje_na_ulici,
        poljubne: poljubne,
        portreti_studio: portreti_studio,
        portreti_tematski_sklop: portreti_tematski_sklop
      }
    }
  }
</script>

<style lang="sass" scoped>
h1
  font-weight: 900
  font-size: 2em
img
  max-width: 100%
  height: auto
</style>

