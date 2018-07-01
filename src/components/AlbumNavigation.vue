<template>
  <div id="album-navigation">
    <router-link id="prev-album" v-if="prev" :to="prev.albumSlug">
      <i class="fas fa-long-arrow-alt-left"></i><span>{{ prev.albumName }}</span>
    </router-link>
    <p>Navigacija po albumih</p>
    <router-link id="next-album" v-if="next" :to="next.albumSlug">
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
  position: relative
  width: 100%
  padding: 2em 3em
  p
    text-align: center
    font-size: .7em
    text-transform: uppercase
    font-weight: 900
    font-family: $family-sans-serif
    color: $black
  #prev-album,
  #next-album
    position: absolute
    top: 50%
    font-size: 2em
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
    right: 1.5em
    &:hover
      transform: translate3d(10%, -50%, 0)
      span
        transform: translate3d(10%, 0, 0)
    span
      margin-right: 1em
  #prev-album
    left: 1.5em
    &:hover
      transform: translate3d(-10%, -50%, 0)
      span
        transform: translate3d(-10%, 0, 0)
    span
      margin-left: 1em
</style>
