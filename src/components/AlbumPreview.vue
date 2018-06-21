<template>
  <div class="container album-preview" :class="{'is-inverted' : even}">
    <div class="columns">
      <div class="column">
        <div class="image-container">
          <img :src="image" :alt="imageAlt">
        </div>
      </div>
      <div class="column">
        <h3 class="album-preview-title">{{ title }}</h3>
        <slot></slot>
        <my-button :href="albumSlug()" className="small-cta" :inverted="!even" align="center">vse fotografije &nbsp;<i class="fas fa-chevron-right"></i></my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumPreview',
  props: {
    title: {
      type: String,
      required: true
    },
    featuredImage: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      image: this.featuredImage.image,
      imageAlt: this.featuredImage.title,
      even: false
    }
  },
  methods: {
    isEven(){
      return this.index % 2 === 0;
    },
    albumSlug(){
      return this.title.split('_').join('-');
    }
  },
  mounted(){
    this.even = this.isEven();
  }
}
</script>

<style lang="sass" scoped>
.album-preview
  position: relative
  z-index: 10
  &.is-inverted
    color: $primary
</style>

