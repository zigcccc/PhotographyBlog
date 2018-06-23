<template>
  <div id="hero" class="columns">
    <div class="column">
      <hero-animation />
    </div>
    <div class="column is-vertical-aligned">
      <h1>Fotografija - Seminar</h1>
      <h2>Žiga Krašovec, GMT</h2>
      <p>Predstavitev mojih fotografskih nalog in del tekom predmeta fotografija2 na Naravoslovnotehniški fakulteti Ljubljana, program Grafična in medijska tehnika.</p>
      <my-button @click.prevent.native="scrollPastHero" href="#" className="btn-hero" :inverted="false">Razišči fotografije &nbsp;<i class="fas fa-chevron-down"></i></my-button>
    </div>
  </div>
</template>

<script>
import HeroAnimation from '@/components/HeroAnimation'
export default {
  name: 'Hero',
  components: {HeroAnimation},
  data(){
    return {
      heroHeight: 0
    }
  },
  methods: {
    scrollPastHero(){
      window.scroll({
        top: window.innerHeight - (this.heroHeight / 2),
        left: 0,
        behavior: 'smooth'
      })
    },
    getHeroHeight(){
      return this.$el.clientHeight;
    }
  },
  mounted(){
    this.heroHeight = this.getHeroHeight()
  }
}
</script>

<style lang="sass" scoped>
  .columns
    padding: 1em
    .column
      &.is-vertical-aligned
        justify-content: flex-end
        z-index: 1000
        @media screen and (max-width: 768px)
          background: $white
      h1
        font-family: $family-serif
        font-weight: 900
        font-size: 2.75em
        margin-top: 150px
        @media screen and (max-width: 768px)
          font-size: 2em
      h2
        font-family: $family-sans-serif
        font-weight: 300
        font-size: 2em
        color: $black
        @media screen and (max-width: 768px)
          font-size: 1.5em
      p
        margin-top: 30px
        max-width: 75%
      
</style>
