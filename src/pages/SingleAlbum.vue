<template>
  <div v-if="album" id="single-album">
    <album-hero :title="albumName()" :desc="album.album_desc" />
    <div class="album-images">
      <div v-for="image in album.images" :key="image.id">
        {{ image.title }}
      </div>
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
    document.title = this.albumName() + ' - Fotografija :: Ziga Krasovec ✌️'
    this.$store.dispatch('updateDescription', this.album.album_desc)
  }
}
</script>

<style lang="sass" scoped>
#single-album
  padding: 0 2em
  min-height: 2000px

.album-images
  margin-top: 200px
</style>
