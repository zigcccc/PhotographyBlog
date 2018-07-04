<template>
  <div @click="expandImage(image, index)" class="image-preview">
    <div class="image-container">
      <img :src="image.image" :alt="image.title" />
    </div>
    <h2>{{ image.title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ImagePreview',
  props: {
    image: {
      type: Object,
      required: true
    },
    expandImage: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.image-preview
  flex: 1
  margin: 0 .5em
  +bounceTransition(600ms)
  overflow: hidden
  position: relative
  box-shadow: $shadow-2
  @media screen and (max-width: 768px)
    min-width: 43%
    height: 150px
    margin: .5em
  &:hover
    cursor: pointer
    flex-grow: 2
    h2
      transform: translate3d(0,0,0)

  h2
    position: absolute
    bottom: 0
    left: 0
    right: 0
    padding: 1em
    transform: translate3d(0,100%,0)
    display: block
    text-align: center
    background: $primary
    color: $black
    text-transform: uppercase
    font-size: .75em
    font-weight: 900
    +quickEaseTransition(400ms)


.image-container
  display: flex
  height: 350px
  & > img
    object-fit: cover
</style>
