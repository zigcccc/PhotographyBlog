<template>
  <div class="container album-preview" :class="{'is-inverted' : even}">
    <div v-if="!even" class="columns">
      <div class="column">
        <div class="image-container">
          <div class="image-border-offset"></div>
          <img :src="image" :alt="imageAlt">
        </div>
      </div>
      <div class="column is-vertical-aligned">
        <h3 class="album-preview-title">{{ albumTitle() }}</h3>
        <p class="album-preview-desc">
          <slot></slot>
        </p>
        <div class="cta-container" :class="{'is-visible' : parallaxCta}">
          <my-button :href="albumSlug()" className="small-cta" :inverted="!even" align="center">vse fotografije &nbsp;<i class="fas fa-chevron-right"></i></my-button>
        </div>
      </div>
    </div>
    <div v-else class="columns">
      <div class="column is-vertical-aligned">
        <h3 class="album-preview-title">{{ albumTitle() }}</h3>
        <p class="album-preview-desc">
          <slot></slot>
        </p>
        <div class="cta-container" :class="{'is-visible' : parallaxCta}">
          <my-button :href="albumSlug()" className="small-cta" :inverted="!even" align="center">vse fotografije &nbsp;<i class="fas fa-chevron-right"></i></my-button>
        </div>
      </div>
      <div class="column">
        <div class="image-container">
          <div class="image-border-offset"></div>
          <img :src="image" :alt="imageAlt">
        </div>
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
      even: false,
      parallaxCta: false
    }
  },
  methods: {
    isEven(){
      return this.index % 2 === 0;
    },
    albumSlug(){
      return this.title.split('_').join('-');
    },
    albumTitle(){
      return this.title.split('_').join(' ');
    },
    albumOffset(scrollTop){
      let elementOffset = this.$el.offsetTop;
      return (elementOffset - scrollTop) < (window.innerHeight / 2)
    }
  },
  mounted(){
    this.even = this.isEven();
  },
  created(){
    document.addEventListener('scroll', e => {
      this.parallaxCta = this.albumOffset(e.target.scrollingElement.scrollTop)
    })
  },
  destroyed(){
    document.removeEventListener('scroll', this.albumOffset)
  }
}
</script>

<style lang="sass" scoped>
.album-preview
  position: relative
  z-index: 10
  padding-bottom: 20vh
  &.is-inverted
    color: $primary
    .image-container
      .image-border-offset
        left: 7.5%
        border-color: $primary
    .album-preview-title
      text-shadow: 0 5px 10px transparentize($primary, .75)
      &::after
        background: $black
    .cta-container
      transform: translateX(-200%)

  .image-container
    position: relative
    display: flex
    height: 450px
    .image-border-offset
      content: ''
      width: 100%
      height: 100%
      display: block
      position: absolute
      z-index: 1
      top: -10%
      left: -7.5%
      border: 20px solid $black
    & > img
      object-fit: cover
      position: relative
      z-index: 10
      box-shadow: $shadow-4

  .is-vertical-aligned
    padding: 2em

  .album-preview-title
    font-family: $family-serif
    font-weight: 900
    font-size: 2.5em
    margin-bottom: 20px
    text-shadow: 0 5px 10px transparentize($black, .75)
    &::after
      content: ''
      height: 3px
      width: 75px
      background: $primary
      display: block
      margin-top: 10px

  .album-preview-desc
    line-height: 1.618

  .cta-container
    +bounceTransition(1000ms)
    transform: translateX(200%)
    &.is-visible
      transform: translateX(0)

</style>

