<template>
  <div id="hero-animation">
    <div class="background">
      <img id="smudge1" class="background-smudge" :style="smudge1style" src="@/assets/smudge_01@2x.png" alt="smudge">      
      <img id="smudge2" class="background-smudge" :style="smudge2style" src="@/assets/smudge_02@2x.png" alt="smudge">
    </div>
    <div class="main-content">
      <img id="drone" src="@/assets/drone.svg" alt="drone">
      <photographer :style="photographerStyle" id="photographer" />
    </div>
  </div>
</template>

<script>
import Photographer from '@/components/Photographer'
export default {
  name: 'HeroAnimation',
  components: {Photographer},
  data(){
    return {
      smudge1style: {
        transform: 'scale(1.5) translateY(0)'
      },
      smudge2style: {
        transform: 'scale(.85) translateY(0)'
      },
      photographerStyle: {
        transform: 'translateY(0)'
      }
    }
  },
  methods: {
    smudgeParallax(scrollTop){
      let offset1 = Math.floor(scrollTop / 2);
      let offset2 = Math.floor(scrollTop / 1.5);
      if (scrollTop < window.innerHeight * 2) {
        this.smudge1style.transform = `scale(1.5) translateY(${offset1}px)`;
        this.smudge2style.transform = `scale(.85) translateY(${offset1}px)`;
        this.photographerStyle.transform = `translateY(${offset2}px)`;
      }
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
#hero-animation
  min-height: 50vh
.background
  position: relative
  .background-smudge
    position: absolute
    top: 0
    left: 0
    opacity: 1
  #smudge1
    margin-top: -25%

.main-content
  position: relative
  z-index: 10
  min-height: 50vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  & > img
    display: block
  #drone
    width: 250px
    height: auto
    position: absolute
    top: 0
    left: 0
    z-index: 1
    animation: droneAnimation 7.5s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
  #photographer
    width: 45%
    height: auto
    position: absolute
    bottom: 0
    transform: translateX(-25%)
    -webkit-svg-shadow: $shadow-3

@keyframes droneAnimation
  0%
    transform: translate3d(0, 20px, -100px) scale(1.25) rotate(20deg)
    z-index: 1
  25%
    transform: translate3d(250px, 5px, 0px) scale(1.85) rotate(5deg)
    z-index: 1
  45%
    z-index: 1
  50%
    transform: translate3d(500px, 0, 20px) scale(1.5) rotate(-20deg)
    z-index: 0
  75%
    transform: translate3d(250px, 10px, 0) scale(.65) rotate(5deg)
    z-index: 0
  95%
    z-index: 0
  100%
    transform: translate3d(0, 20px, -20px) scale(1.25) rotate(20deg)
    z-index: 1
</style>

