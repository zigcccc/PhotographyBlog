<template>
  <div v-if="album" id="single-album">
    <div class="container">
      <album-hero :title="albumName()" :desc="album.album_desc" />
    </div>
  </div>
</template>

<script>
import router from '@/router'
import AlbumHero from '@/components/AlbumHero'
export default {
  name: 'SingleAlbum',
  components: {AlbumHero},
  data(){
    return {
      album: null
    }
  },
  methods: {
    albumName(){
      return this.$route.params.albumId.split('-').join(' ').capitalize();
    }
  },
  created(){
    this.album = this.$store.getters.getSpecificAlbum(this.$route.params.albumId);
    if (!this.album) {
      router.push({name: 'NotFound'})
    }
  }
}
</script>

<style lang="sass" scoped>
#single-album
  min-height: 2000px
</style>
