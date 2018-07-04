<template>
  <div id="home-page">
    <hero />
    <div id="albums-container">
      <div v-for="(album, key, index) in albums" :key="key" class="album-container">
        <album-preview v-for="image in album.images" :key="image.id" v-if="image.featured" :title="key" :featuredImage="image" :index="index + 1">{{ album.album_desc }}</album-preview>
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from '@/components/Hero'
  import AlbumPreview from '@/components/AlbumPreview'

  export default {
    name: 'Home',
    components: {Hero, AlbumPreview},
    data() {
      return {
        albums: []
      }
    },
    created(){
      this.albums = this.$store.state.albums
      this.$store.dispatch('updateDescription', 'Predstavitev fotografskih del v okviru predmeta fotografija2 na Naravoslovno tehnični fakulteti v Ljubljani.')
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
#albums-container
  margin-top: 25vh
  @media screen and (max-width: 768px)
    margin-top: 0
</style>

