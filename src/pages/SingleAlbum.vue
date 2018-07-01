<template>
  <div v-if="album" id="single-album">
    <album-hero :title="albumName" :desc="album.album_desc" />
    <div class="album-images" :class="[{'has-many-images' : numOfImages > 5}, {loading : isLoading}]">
      <image-preview v-for="image in album.images" :key="image.id" :image="image" />
    </div>
    <hr>
    <album-navigation :prev="prevAlbum" :next="nextAlbum" />
    <single-image />
  </div>
</template>

<script>
import router from '@/router'
import AlbumHero from '@/components/AlbumHero'
import ImagePreview from '@/components/ImagePreview'
import AlbumNavigation from '@/components/AlbumNavigation'
import SingleImage from '@/components/SingleImage'

export default {
  name: 'SingleAlbum',
  components: {AlbumHero, ImagePreview, AlbumNavigation},
  data(){
    return {
      album: null,
      albumId: null,
      isLoading: true
    }
  },
  computed: {
    numOfImages(){
      return this.album.images.length
    },
    albumName(){
      return this.$route.params.albumId.split('-').join(' ').capitalize();
    },
    prevAlbum(){
      return this.$store.getters.getPreviousAlbum(this.albumId);
    },
    nextAlbum(){
      return this.$store.getters.getNextAlbum(this.albumId);
    }
  },
  methods: {
    getAlbum(){
      this.albumId = this.$route.params.albumId;
      this.album = this.$store.getters.getSpecificAlbum(this.albumId);
      if (!this.album) {
        router.push({name: 'NotFound'})
      }
      document.title = this.albumName + ' - Fotografija :: Ziga Krasovec ✌️';
      this.$store.dispatch('updateDescription', this.album.album_desc);
    }
  },
  created(){
    this.getAlbum();
  },
  mounted(){
    this.$nextTick(() => {
      this.isLoading = false
    })
  },
  beforeUpdate(){
    this.getAlbum();
  }
}
</script>

<style lang="sass" scoped>
#single-album
  padding: 0 2em
  //min-height: 2000px

  hr
    border: 1px solid $black
    width: 100px
    display: block
    margin: 40px auto 0

.album-images
  margin-top: 200px
  display: flex
  justify-content: space-between
  padding: 0 2em
  position: relative
  z-index: 50
  +quickEaseTransition(600ms)
  &.loading
    opacity: 0
    transform: translate3d(0, 50%, 0)
  &.has-many-images
    flex-wrap: wrap
    & > .image-preview
      flex-basis: 20%
      margin-bottom: 1em
</style>
