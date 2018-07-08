<template>
  <div id="admin-single-album">
    <header>
      <div class="title-container">
        <h2>Edit album:</h2><input type="text" plecholder="Album title" v-model="title">
      </div>
      <div class="album-actions">
        <div class="cta-container album-delete">
          <a @click.prevent="deleteAlbum"><span><i class="fas fa-trash-alt"></i></span> Delete</a>
        </div>
        <div class="cta-container album-update" :class="{disabled : !hasChanges}">
          <a v-if="hasChanges" @click.prevent="updateAlbum"><span><i class="fas fa-sync-alt"></i></span> Update</a>
          <a v-else class="disabled"><span><i class="fas fa-sync-alt"></i></span> Update</a>
        </div>
      </div>
    </header>
    <hr>
    <div class="description-container">
      <h3>Album description:</h3>
      <div class="field">
        <textarea class="textarea" type="text" placeholder="Album description" name="description" id="description" v-model="description"></textarea>
      </div>
    </div>
    <div class="images-container">
      <h3>Album images:</h3>
      <div class="image-row heading-row">
        <div class="image">Image</div>
        <div class="title">Title</div>
        <div class="description">Description</div>
        <div class="featured">Featured</div>
        <div class="actions"></div>
      </div>
      <div class="image-row" v-for="image in images" :key="image.id">
        <div class="image">
          <img :src="image.image" :alt="image.title">
        </div>
        <div class="title">
          <div class="field">
            <div class="control">
              <input class="input" placeholder="Image title" type="text" v-model="image.title">
            </div>
          </div>
        </div>
        <div class="description">
          <div class="field">
            <textarea class="textarea" placeholder="Image description" v-model="image.description"></textarea>
          </div>
        </div>
        <div class="featured">
          <toggle-button v-model="image.featured" />
        </div>
        <div class="actions">
          <a @click.prevent="deleteImage"><span><i class="fas fa-trash-alt"></i></span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminSingleAlbum',
  data() {
    return {
      originalAlbum: {},
      description: '',
      title: '',
      images: [],
    }
  },
  computed: {
    albumName() {
      return this.$store.getters.capitalize(this.$route.params.albumId.split('-').join(' '))
    },
    album() {
      return this.$store.getters.getSpecificAlbum(this.$route.params.albumId)
    },
    hasChanges() {
      let obj1 = JSON.stringify({title: this.title, description: this.description, images: this.images});
      let obj2 = JSON.stringify({title: this.albumName, description: this.album.album_desc, images: this.originalAlbum.images});
      console.log('###################################################')
      console.log('New object: ', obj1)
      console.log('-------------------------')
      console.log('Original object: ', obj2)
      console.log('###################################################')
      return obj1 !== obj2
    }
  },
  methods: {
    deleteAlbum() {
      let choice = window.confirm('Are you sure you want to delete this album? This action cannot be undone...');
      if (choice) {
        console.log('Album deleted')
      }
    }
  },
  created() {
    this.originalAlbum = this.$store.getters.getSpecificAlbum(this.$route.params.albumId)
    this.description = this.album.album_desc
    this.title = this.albumName
    this.images = this.album.images
  }
}
</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between
  align-items: center
.album-actions
  display: flex
  .cta-container
    background: $primary
    margin-left: 1em
    padding: .75em 1em
    border-radius: 200px
    font-size: 12px
    box-shadow: $shadow-1
    +bounceTransition(500ms)
    &:hover
      box-shadow: $shadow-3
      transform: translateY(-3px)
    &.disabled,
    .disabled
      opacity: .5
      box-shadow: none
      &:hover
        cursor: no-drop
        transform: translateY(0)
    &.album-delete
      background: $redAccent
      & > a
        color: $white
    & > a
      color: $black
      padding: .75em 1em

.title-container
  display: flex
  h2
    font-weight: 900
    font-size: 1.5em
  input
    outline: none
    border: none
    background: $white
    border-bottom: 2px solid $black
    font-size: 1.5em
    margin-left: .5em
hr
  background: transparentize($black, .5)
.description-container
  .field
    margin-top: 1em

.images-container
  margin-top: 2em

.image-row
  display: grid
  grid-template-columns: 1fr 2fr 3fr 1fr .5fr
  grid-gap: 10px
  align-items: center
  margin: 2em 0
  &.heading-row
    font-weight: 900
    margin-bottom: 0
    text-align: center
    .image
      height: auto
      box-shadow: none
      display: block
    .featured,
    .actions
      display: block
  .image
    height: 120px
    display: flex
    align-self: start
    box-shadow: $shadow-2
    & > img
      object-fit: cover
  .title
    align-self: start
  .featured,
  .actions
    display: flex
    justify-content: center
  .actions
    & > a
      background: $redAccent
      color: $white
      +getSquare(40px)
      display: flex
      justify-content: center
      align-items: center
      border-radius: 200px
      box-shadow: $shadow-2

</style>


