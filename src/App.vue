<template>
  <div id="app">
    <navbar />
    <page-container>
      <router-view></router-view>
    </page-container>
    <page-footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import PageFooter from '@/components/PageFooter'
export default {
  name: 'app',
  components: {Navbar, PageFooter},
  metaInfo: {
    title: 'Fotografija',
    titleTemplate: '%s :: Ziga Krasovec ✌️',
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {property: 'og:title', content: 'Fotografija :: Ziga Krasovec'},
      {property: 'og:site_name', content: 'Predstavitev fotografskih del'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'http://fotografija.zigakrasovec.ga'},
      {property: 'og:image', content: 'http://fotografija.zigakrasovec.ga/zk_logo_white_bg@2x.png'},
      {property: 'og:description', content: 'Predstavitev fotografskih del v okviru predmeta fotografija2 na Naravoslovno tehnični fakulteti v Ljubljani.'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'http://fotografija.zigakrasovec.ga'},
      {name: 'twitter:title', content: 'Fotografija :: Ziga Krasovec'},
      {name: 'twitter:description', content: 'Predstavitev fotografskih del v okviru predmeta fotografija2 na Naravoslovno tehnični fakulteti v Ljubljani.'},
      {name: 'twitter:creator', content: '@ZigaKrasovec'},
      {name: 'twitter:image:src', content: 'http://fotografija.zigakrasovec.ga/zk_logo_white_bg@2x.png'},
      {itemprop: 'name', content: 'Fotografija :: Ziga Krasovec'},
      {itemprop: 'description', content: 'Predstavitev fotografskih del v okviru predmeta fotografija2 na Naravoslovno tehnični fakulteti v Ljubljani.'},
      {itemprop: 'image', content: 'http://fotografija.zigakrasovec.ga/zk_logo_white_bg@2x.png'}
    ]
  },
  methods: {
    updateSiteDescription() {
      document.head.querySelector('meta[name=description]').content = this.$store.state.siteDescription;
    }
  },
  created(){
    this.updateSiteDescription();
  },
  updated(){
    this.updateSiteDescription();
  }
}
</script>

<style lang="sass">
html
  background: $white
body
  background: $white
  min-height: 100vh
  overflow-x: hidden
#app
  font-family: $family-sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $black

p
  font-family: $family-sans-serif
  line-height: 1.618
  color: lighten($black, 20%)
.column
  &.is-vertical-aligned
    display: flex !important
    flex-direction: column
    justify-content: center
    position: relative
    @media screen and (max-width: 768px)
      display: block !important

.Cookie--mytheme
  background: $black
  color: $white
  padding: 1em
  font-size: 12px
  box-shadow: 0 -5px 10px rgba(0,0,0,.2)

  .Cookie__content
    a
      color: $primary

  .Cookie__button
    background: $primary
    padding: .75em 1em
    border-radius: 200px
    color: $black
    font-weight: 900
    font-family: $family-sans-serif
    box-shadow: $shadow-3
    +bounceTransition
    &:hover
      transform: translateY(-3px)
      box-shadow: $shadow-5
</style>
