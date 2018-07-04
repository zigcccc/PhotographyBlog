<template>
  <div id="album-navigation">
    <router-link id="prev-album" v-if="prev !== undefined" :to="prev.albumSlug">
      <i class="fas fa-long-arrow-alt-left"></i><span>{{ prev.albumName }}</span>
    </router-link>
    <p>Navigacija po albumih</p>
    <router-link id="next-album" v-if="next !== undefined" :to="next.albumSlug">
      <span>{{ next.albumName }}</span><i class="fas fa-long-arrow-alt-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AlbumNavigation',
  props: ['prev', 'next']
}
</script>

<style lang="sass" scoped>
#album-navigation
  position: fixed
  bottom: 2em
  left: 50%
  transform: translateX(-50%)
  width: 75%
  max-width: 750px
  padding: 1.5em 3em
  background: lighten($white, 2%)
  border-radius: 200px
  box-shadow: $shadow-1
  z-index: 1000
  @media screen and (max-width: 768px)
    width: 90%
  p
    text-align: center
    font-size: .7em
    text-transform: uppercase
    font-weight: 900
    font-family: $family-sans-serif
    color: $black
    @media screen and (max-width: 768px)
      display: none
  #prev-album,
  #next-album
    position: absolute
    top: 50%
    font-size: 1.5em
    display: flex
    align-items: center
    color: $primary
    perspective: 500px
    transform: translate3d(0,-50%, 0)
    +bounceTransition(300ms)
    span
      font-size: .5em
      font-weight: 900
      text-transform: uppercase
      color: $black
      +bounceTransition(500ms)
  #next-album
    right: 1em
    &:hover
      transform: translate3d(10%, -50%, 0)
      span
        transform: translate3d(10%, 0, 0)
    span
      margin-right: 1em
  #prev-album
    left: 1em
    &:hover
      transform: translate3d(-10%, -50%, 0)
      span
        transform: translate3d(-10%, 0, 0)
    span
      margin-left: 1em
</style>
