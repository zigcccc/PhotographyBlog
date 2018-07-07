<template>
  <footer>
    <div v-if="isHomePage" class="container">
      <small>&copy; <a @click="trackEmailClick" href="mailto:zkrasovec@gmail.com">Žiga Krašovec</a>, {{ date }}</small>
    </div>
    <cookie-law @accept="cookiesAccepted" theme="mytheme" buttonText="Razumem" :style="cookieStyle">
      <div slot="message">
        Spletna stran za nemoteno delovanje uporablja piškotke, več o tem si lahko preberete na <a target="_blank" href="http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm">tej povezavi</a>.
      </div>
    </cookie-law>
  </footer>
</template>

<script>
import CookieLaw from 'vue-cookie-law';
export default {
  name: 'PageFooter',
  components: {CookieLaw},
  data() {
    return {
      cookieStyle: {
        transform: 'translateY(0)',
        opacity: 1,
        transition: '300ms ease-in-out all'
      }
    }
  },
  computed: {
    date() {
      return new Date().getFullYear()
    },
    isHomePage() {
      return this.$route.name === 'Home'
    }
  },
  methods: {
    removeCookiesOnScroll(scrollTop) {
      if (scrollTop > 100) {
        this.cookiesAccepted();
      }
    },
    cookiesAccepted() {
      this.cookieStyle.transform = 'translateY(100%)'
      this.cookieStyle.opacity = 0
    },
    trackEmailClick() {
      this.$gtm.trackEvent({
        event: 'EmailClick',
        category: 'Click Event',
        action: 'click',
        label: 'zkrasovec@gmail.com'
      })
    }
  },
  created() {
    document.addEventListener('scroll', e => {
      this.removeCookiesOnScroll(e.target.scrollingElement.scrollTop)
    })
  },
  destroyed() {
    document.removeEventListener('scroll', this.removeCookiesOnScroll)
  }
}
</script>

<style lang="sass" scoped>
small
  text-align: center
  width: 100%
  display: block
  padding-bottom: 45px
  color: $black
  a
    font-weight: 900
    color: $black
</style>
