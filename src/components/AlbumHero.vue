<template>
  <div id="album-hero-container">
    <div class="columns">
      <div class="column is-vertical-aligned">
        <div class="smudges-container">
          <img id="smudge1" :style="smudge1style" class="background-smudge" src="@/assets/smudge_01@2x.png" alt="smudge">
          <img id="smudge2" :style="smudge2style" class="background-smudge" src="@/assets/smudge_02@2x.png" alt="smudge">
        </div>
        <div class="title-container">
          <span class="huge-title">
            {{ title }}
          </span>
          <h1>{{ title }}</h1>
        </div>
      </div>
      <div class="column is-vertical-aligned">
        <p class="album-description">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumHero',
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      smudge1style: {
        transform: 'translate3d(0,0,0)'
      },
      smudge2style: {
        transform: 'translate3d(0,0,0)'
      }
    }
  },
  methods: {
    smudgeParallax(scrollTop) {
      this.smudge1style.transform = `translate3d(0, -${scrollTop / 4}px, 0`;
      this.smudge2style.transform = `translate3d(0, -${scrollTop / 2}px, 0`;
    }
  },
  created(){
    document.addEventListener('scroll', e => {
      this.smudgeParallax(e.target.scrollingElement.scrollTop)
    })
  },
  destroyed(){
    document.removeEventListener('scroll', this.smudgeParallax)
  }
}
</script>

<style lang="sass" scoped>
.smudges-container
  position: relative
  @media screen and (max-width: 768px)
    display: none
  .background-smudge
    position: absolute
    top: 0
    left: 0
    opacity: 1
    @media screen and (max-width: 768px)
      opacity: .5
  #smudge1
    margin-top: -25%
    z-index: 2
  #smudge2
    //margin-top: -15%

.title-container
  margin-top: 150px
  margin-right: 2em
  text-align: right
  position: relative
  @media screen and (max-width: 768px)
    margin-top: 0px
  h1
    font-size: 3.5em
    font-weight: 900
    font-family: $family-serif
    position: relative
    z-index: 10
    text-align: right
    text-shadow: 0 5px 10px rgba(0,0,0,.35)
    @media screen and (max-width: 768px)
      text-align: center
      font-size: 2em
  .huge-title
    font-size: 150px
    position: absolute
    right: 0
    opacity: .25
    top: 0
    line-height: 1
    z-index: 10
    font-family: $family-sans-serif
    font-weight: 900
    margin-top: -65px
    white-space: nowrap
    @media screen and (max-width: 768px)
      display: none

.album-description
  max-width: 75%
  transform: translateY(120px)
  line-height: 1.618
  @media screen and (max-width: 768px)
    transform: translateY(0)
    max-width: 100%


</style>
