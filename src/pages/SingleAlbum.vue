<template>
  <div v-if="album" id="single-album">
    <album-hero :title="albumName()" :desc="album.album_desc" />
    <div class="album-images">
      <image-preview v-for="image in album.images" :key="image.id" :image="image" />
    </div>
  </div>
</template>

<script>
import router from '@/router'
import AlbumHero from '@/components/AlbumHero'
import ImagePreview from '@/components/ImagePreview'

export default {
  name: 'SingleAlbum',
  components: {AlbumHero, ImagePreview},
  data(){
    return {
      album: null
    }
  },
  methods: {
    albumName(){
      return this.$route.params.albumId.split('-').join(' ').capitalize();
    },
    getAlbum(){
      this.album = this.$store.getters.getSpecificAlbum(this.$route.params.albumId);
      if (!this.album) {
        router.push({name: 'NotFound'})
      }
      document.title = this.albumName() + ' - Fotografija :: Ziga Krasovec ✌️'
      this.$store.dispatch('updateDescription', this.album.album_desc)
    }
  },
  created(){
    this.getAlbum();
  },
  beforeUpdate(){
    this.getAlbum();
  }
}
</script>

<style lang="sass" scoped>
#single-album
  padding: 0 2em
  min-height: 2000px

.album-images
  margin-top: 200px
  display: flex
  justify-content: space-between
  padding: 0 2em
  position: relative
  z-index: 50
</style>
