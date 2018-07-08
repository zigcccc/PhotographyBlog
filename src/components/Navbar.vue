<template>
  <div id="navbar">
    <nav>
      <router-link to="/" class="logo-container">
        <logo />
      </router-link>
      <div v-if="!isAdminArea" class="social-links">
        <a @click="socialLinkClick('facebook')" href="https://www.facebook.com/zkrasovec" target="_blank" class="social-link"><i class="fab fa-facebook-f"></i></a>
        <a @click="socialLinkClick('instagram')" href="https://www.instagram.com/ziga_krasovec/?hl=en" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
        <a @click="socialLinkClick('linkedin')" href="https://www.linkedin.com/in/zigakrasovec/" target="_blank" class="social-link"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <div class="right-side">
        <div class="admin-area" v-if="userIsAuth">
          <router-link to="admin">Hello, {{ userDisplayName }}</router-link>
        </div>
        <div class="menu-btn" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    <div id="main-menu" :class="['menu-container', {'menu-open' : menuOpen}]">
      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="admin-btn">
        <router-link @click.native="toggleMenu" :to="{name: 'Admin'}"><span><i class="fas fa-user"></i></span></router-link>
      </div>
      <router-link @click.native="toggleMenu" v-for="album in albums" :key="album.slug" :to="album.slug">{{ album.name }}</router-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  name: 'Navbar',
  components: {Logo},
  data() {
    return {
      menuOpen: false,
      albums: []
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userIsAuth() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    },
    isAdminArea() {
      return this.$route.name === 'Admin'
    },
    userDisplayName() {
      return this.user.email.split('@')[0];
    }
  },
  methods: {
    toggleMenu(){
      this.menuOpen ? this.menuOpen = false : this.menuOpen = true
    },
    socialLinkClick(platform) {
      this.$gtm.trackEvent({
        event: 'SocialLinkClick',
        category: 'Link Click',
        action: 'click',
        label: platform,
        noninteraction: false
      })
    }
  },
  created() {
    window.addEventListener('keydown', e => {
      if(e.keyCode === 27 && this.menuOpen) {
        this.toggleMenu()
      }
    })
    this.albums = this.$store.getters.albumsNameAndSlug
  },
  destroyed() {
    window.removeEventListener('keydown', this.toggleMenu)
  }
}
</script>

<style lang="sass" scoped>
nav
  width: 100%
  height: $navbar-height
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  padding: 1em 1em .5em
  position: fixed
  top: 0
  left: 0
  z-index: 100000
  //background: $white

.logo-container
  position: relative
  height: 100%
  & > svg
    max-height: 100%
    height: $navbar-height

.social-links
  display: flex
  @media screen and (max-width: 768px)
    display: none
  .social-link
    background: $black
    border-radius: 50%
    +getSquare(40px)
    box-shadow: $shadow-2
    +simpleTransition(300ms)
    display: flex
    justify-content: center
    align-items: center
    color: $white
    margin: 0 .5em
    &:hover
      box-shadow: $shadow-3
      transform: translateY(-3px)
      background: $primary
      color: $black

.right-side
  display: flex
  align-items: center

.admin-area
  & > a
    color: $black
    font-size: 14px
    +quickEaseTransition
    &:hover
      color: darken($black, 5%)
      text-shadow: 0 5px 10px rgba(0,0,0,.2)

.menu-btn
  +getSquare(50px)
  margin-left: 1em
  background: $primary
  border-radius: 50%
  box-shadow: $shadow-3
  display: flex
  justify-content: space-around
  align-items: center
  flex-direction: column
  padding: .8em 0
  +bounceTransition(500ms)
  z-index: 10000
  position: relative
  &:hover
    box-shadow: $shadow-4
    //transform: translateY(-3px)
    cursor: pointer
    & > span
      &:nth-child(1)
        width: 20%
        margin-left: 30%
      &:nth-child(2)
        width: 50%
        margin-left: 0
      &:nth-child(3)
        width: 40%
        margin-left: 10%
  & > span
    height: 3px
    width: 50%
    background: $black
    +bounceTransition(500ms)
    &:nth-child(2)
      width: 35%
      margin-left: 15%

#main-menu
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 1000000
  background: transparentize($primary, 0)
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  transform: translate3d(0,-250%,0) scale(4) rotate(90deg)
  opacity: 0
  visibility: hidden
  +quickEaseTransition(400ms)
  overflow-y: scroll
  @media screen and (max-width: 768px)
    z-index: 1000000
  &.menu-open
    transform: translate3d(0,0,0) scale(1) rotate(0)
    opacity: 1
    visibility: visible
    .admin-btn
      opacity: 1
      visibility: visible
    .menu-btn
      opacity: 1
      visibility: visible
  .admin-btn
    +getSquare(50px)
    background: $black
    position: fixed
    top: 1.25em
    left: 1em
    color: $white
    display: flex
    justify-content: center
    align-items: center
    border-radius: 200px
    box-shadow: $shadow-3
    opacity: 0
    visibility: hidden
    +bounceTransition(400ms)
    &:hover
      box-shadow: $shadow-4
      transform: translateY(-3px)
    & > a
      color: $white
      padding: 1em
  .menu-btn
    opacity: 0
    visibility: hidden
    position: fixed
    top: 1.25em
    right: 1em
    background: $black
    &:hover
      & > span
        &:nth-child(1)
          transform: rotate(-45deg)
        &:nth-child(3)
          transform: rotate(45deg)
    & > span
      background: $white
      margin: 0
      width: 50%
      height: 4px
      &:nth-child(2)
        display: none
      &:nth-child(1)
        transform: rotate(45deg)
        margin-bottom: -50%
      &:nth-child(3)
        transform: rotate(-45deg)
  & > a
    color: $black
    font-weight: 900
    font-size: 1.5em
    padding: 1em 0
    text-transform: uppercase
    +bounceTransition(400ms)
    @media screen and (max-width: 768px)
      font-size: 1.5em
      padding: .5em 0
    &:hover
      transform: scale(1.25)


</style>

