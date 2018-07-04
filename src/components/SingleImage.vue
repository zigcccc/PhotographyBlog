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
          <a @click.prevent="toPrev" :class="{disabled : index === 1}"><i class="fas fa-chevron-left"></i></a>
          <span>{{ index }} / {{ allImages }}</span>
          <a @click.prevent="toNext" :class="{disabled : index === allImages}"><i class="fas fa-chevron-right"></i></a>
        </div>
        <small>Za navigacijo lahko uporabite tudi puščici ← → na tipkovnici.</small>
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
      if (e.keyCode === 37 && this.isExpanded) {
        this.toPrev();
      }
      if (e.keyCode === 39 && this.isExpanded) {
        this.toNext();
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

  small
    font-size: .75em
    text-align: center
    padding-bottom: 1em
    @media screen and (max-width: 768px)
      display: none


.columns
  height: 100vh
  margin: 0
  @media screen and (max-width: 991px)
    display: flex
    flex-direction: column

#image-column
  height: 100vh
  margin: 0
  padding: 0
  overflow: hidden
  position: relative
  @media screen and (max-width: 991px)
    height: 50vh
    width: 100vw
  @media screen and (max-width: 768px)
    min-height: 60vh
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
  margin-top: 25vh
  @media screen and (max-width: 991px)
    margin-top: 2em
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  @media screen and (max-width: 768px)
    margin-top: -1em
  h3
    font-size: 4.5em
    font-family: $family-serif
    color: $black
    font-weight: 900
    text-shadow: 0 5px 10px transparentize($black, .75)
    line-height: 1.1
    @media screen and (max-width: 991px)
      font-size: 3.5em
    @media screen and (max-width: 768px)
      font-size: 1.75em
      text-align: center
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
      @media screen and (max-width: 991px)
        transform: translate3d(0, 0, 0)
        margin: .5em auto 0

  .image-description
    position: relative
    margin-top: 2em
    @media screen and (max-width: 991px)
      margin: 2em auto
    @media screen and (max-width: 768px)
      margin: 1em auto
    span
      font-size: 5em
      line-height: 1
      position: absolute
      opacity: .1
      top: -50%
      @media screen and (max-width: 991px)
        top: -50%
        left: 25%
      @media screen and (max-width: 768px)
        left: -5%
        font-size: 3em

    p
      max-width: 75%
      display: block
      margin-left: auto
      margin-right: auto
      text-align: left
      margin-top: 20px
      @media screen and (max-width: 991px)
        margin-top: 0
        width: 50%
        max-width: unset
        min-width: 300px
        text-align: center
      @media screen and (max-width: 768px)
        width: 100%
        font-size: 14px

  .tags-container
    display: flex
    margin-bottom: 1.5em
    @media screen and (max-width: 768px)
      justify-content: center
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
  align-items: center
  padding: 1em
  @media screen and (max-width: 768px)
    padding: 0
    position: absolute
    bottom: 0
    width: calc(100% - 4em)
  a
    padding: 1em
    color: $black
    font-size: 1.5em
    +bounceTransition
    @media screen and (max-width: 768px)
      font-size: 2em
      padding: 0
    &.disabled
      opacity: .5
      &:first-of-type,
      &:last-of-type
        &:hover
          cursor: default
          transform: translateX(0)
    &:first-of-type
      &:hover
        transform: translateX(-5px)
    &:last-of-type
      &:hover
        transform: translateX(5px)

</style>
