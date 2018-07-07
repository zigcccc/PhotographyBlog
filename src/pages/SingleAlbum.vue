<template>
  <div v-if="album" id="single-album">
    <album-hero :title="albumName" :desc="album.album_desc" />
    <div class="album-images" :class="[{'has-many-images' : numOfImages > 5}, {loading : isLoading}]">
      <image-preview :expandImage="expandImage" v-for="(image, i) in album.images" :key="image.id" :image="image" :index="i + 1" />
    </div>
    <album-navigation :prev="prevAlbum" :next="nextAlbum" />
    <single-image
      :isExpanded="imageExpanded"
      :closeImage="closeImage"
      :image="singleImage"
      :index="currentSingleImage"
      :toNext="toNext"
      :toPrev="toPrev"
      :allImages="numOfImages"
    />
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
  components: {AlbumHero, ImagePreview, AlbumNavigation, SingleImage},
  data(){
    return {
      album: null,
      albumId: null,
      isLoading: true,
      imageExpanded: false,
      singleImage: null,
      currentSingleImage: null
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
    },
    expandImage(image, index){
      this.imageExpanded = true
      this.singleImage = image
      this.currentSingleImage = index
      this.$gtm.trackEvent({
        event: 'SingleImageView',
        category: this.albumName,
        action: 'click',
        label: `${image.title} - ${this.albumName}`,
        noninteraction: false
      })
    },
    closeImage(){
      this.imageExpanded = false
      this.currentSingleImage = null
      //this.singleImage = null
    },
    toNext(){
      if (this.currentSingleImage < this.numOfImages) {
        let newImage = this.album.images[(this.currentSingleImage + 1) - 1];
        this.singleImage = newImage;
        this.currentSingleImage++;
        this.$gtm.trackEvent({
          event: 'SingleImageView',
          category: this.albumName,
          action: 'click',
          label: newImage.title,
          noninteraction: false
        })
      }
    },
    toPrev(){
      if (this.currentSingleImage > 1) {
        let newImage = this.album.images[(this.currentSingleImage - 1) - 1];
        this.singleImage = newImage;
        this.currentSingleImage--;
        this.$gtm.trackEvent({
          event: 'SingleImageView',
          category: this.albumName,
          action: 'click',
          label: newImage.title,
          noninteraction: false
        })
      }
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
  padding: 0 2em 120px

.album-images
  margin-top: 200px
  display: flex
  justify-content: space-between
  padding: 0 2em
  position: relative
  z-index: 50
  background: $white
  +quickEaseTransition(600ms)
  @media screen and (max-width: 768px)
    margin-top: 20px
    flex-wrap: wrap
    padding: 0
  &.loading
    opacity: 0
    transform: translate3d(0, 50%, 0)
  &.has-many-images
    flex-wrap: wrap
    & > .image-preview
      flex-basis: 20%
      margin-bottom: 1em
</style>
