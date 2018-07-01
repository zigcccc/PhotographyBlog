<template>
  <div id="single-image" :class="{'is-expanded' : isExpanded}">
    <div v-if="image" class="columns">
      <div id="image-column" class="column is-three-fifths">
        <div class="bg-image" :style="{backgroundImage: `url(${image.image})`}"></div>
        <a id="close-btn" @click.prevent="closeImage">
          <i class="fas fa-times"></i><span>zapri</span>
        </a>
        <div class="full-image-container">
          <img :src="image.image" :alt="image.title" />
        </div>
      </div>
      <div id="description-column" class="column is-vertical-aligned">
        <div class="tags-container" v-if="image.tags.length > 0">
          <span v-for="tag in image.tags" :key="tag" class="tag">#{{ tag }}</span>
        </div>
        <h3>{{ image.title }}</h3>
        <div class="image-description">
          <span>
            <i class="fas fa-quote-left"></i>
          </span>
          <p>{{ image.description }}</p>
        </div>
        <div class="spacer"></div>
        <div id="image-navigation">
          <a @click.prevent="toPrev">nazaj</a>
          <span>{{ index }} / {{ allImages }}</span>
          <a @click.prevent="toNext">naprej</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleImage',
  props: ['isExpanded', 'image', 'closeImage', 'toNext', 'toPrev', 'allImages', 'index'],
  created() {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 27 && this.isExpanded) {
        this.closeImage()
      }
    })
  },
  destroyed() {
    window.removeEventListener('keydown', this.closeImage)
  }
}
</script>

<style lang="sass" scoped>
.spacer
  flex: 1
#single-image
  width: 100vw
  height: 100vh
  position: fixed
  z-index: 100000
  //opacity: 0
  visibility: hidden
  top: 0
  left: 0
  background: $white
  transform: translate3d(100%, 0, 0)
  +quickEaseTransition(400ms)
  &.is-expanded
    //opacity: 1
    visibility: visible
    transform: translate3d(0, 0, 0)
    .full-image-container
      & > img
        transform: translate3d(0, 0, 0)
        opacity: 1


.columns
  height: 100vh
  margin: 0

#image-column
  height: 100vh
  margin: 0
  padding: 0
  overflow: hidden
  position: relative
.bg-image
  background-size: cover
  width: 100%
  height: 100%
  transform: scale(1.25)
  filter: blur(20px) grayscale(100%)

#close-btn
  position: absolute
  top: 1em
  left: 1em
  background: $primary
  color: $black
  padding: .75em 1em
  border-radius: 200px
  box-shadow: $shadow-2
  font-size: .85em
  display: flex
  align-items: center
  line-height: 1
  +bounceTransition(300ms)
  z-index: 10000
  &:hover
    transform: translate3d(0, -3px, 0)
    box-shadow: $shadow-4
  span
    text-transform: uppercase
    font-weight: 900
    margin-left: .5em
    margin-top: .1em


.full-image-container
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0
  display: flex
  justify-content: center
  align-items: center
  padding: 10vh 5vw
  & > img
    transform: translate3d(25%, 0, 0)
    +bounceTransition(600ms)
    transition-delay: 250ms
    opacity: 0
    object-fit: contain
    max-width: 100%
    max-height: 100%
    box-shadow: $shadow-4

#description-column
  padding: 0 2em
  margin-top: 25%
  h3
    font-size: 4.5em
    font-family: $family-serif
    color: $black
    font-weight: 900
    text-shadow: 0 5px 10px transparentize($black, .75)
    line-height: 1.1
    &::after
      content: ''
      width: 200px
      height: 4px
      border-radius: 100px
      background: $primary
      box-shadow: $shadow-2
      display: block
      margin: .5em 0
      transform: translate3d(-50%, 0, 0)

  .image-description
    position: relative
    margin-top: 2em
    span
      font-size: 5em
      line-height: 1
      position: absolute
      opacity: .1
      top: -50%

  p
    max-width: 75%
    display: block
    margin-left: auto
    margin-right: auto
    text-align: left

  .tags-container
    display: flex
    margin-bottom: 1.5em
    .tag
      background: $primary
      padding: .75em 1em
      border-radius: 200px
      box-shadow: $shadow-1
      font-size: .65em
      text-transform: uppercase
      color: $black
      font-weight: 900
      margin-right: 1.5em

#image-navigation
  display: flex
  justify-content: space-between
  padding: 2em
</style>
