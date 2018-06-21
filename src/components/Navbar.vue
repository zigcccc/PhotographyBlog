<template>
  <div id="navbar">
    <nav>
      <router-link to="/" class="logo-container">
        <logo />
      </router-link>
      <div class="social-links">
        <a href="https://www.facebook.com/zkrasovec" target="_blank" class="social-link"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/ziga_krasovec/?hl=en" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/zigakrasovec/" target="_blank" class="social-link"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    <div id="main-menu" :class="['menu-container', {'menu-open' : menuOpen}]">
      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <router-link to="#">Category 1</router-link>
      <router-link to="#">Category 2</router-link>
      <router-link to="#">Category 3</router-link>
      <router-link to="#">Category 4</router-link>
      <router-link to="#">Category 5</router-link>
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
      menuOpen: false
    }
  },
  methods: {
    toggleMenu(){
      this.menuOpen ? this.menuOpen = false : this.menuOpen = true
    }
  },
  created() {
    window.addEventListener('keydown', e => {
      if(e.keyCode === 27 && this.menuOpen) {
        this.toggleMenu()
      }
    })
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
  z-index: 10000
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

.menu-btn
  +getSquare(50px)
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
  z-index: 10000
  background: transparentize($primary, 0)
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  transform: translateY(-250%) scale(4)
  opacity: 0
  +quickEaseTransition(500ms)
  &.menu-open
    transform: translateY(0) scale(1)
    opacity: 1
    .menu-btn
      opacity: 1
      visibility: visible
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
    font-size: 2em
    padding: 1em 0
    text-transform: uppercase
    +bounceTransition(400ms)
    @media screen and (max-width: 768px)
      font-size: 1.5em
      padding: .5em 0
    &:hover
      transform: scale(1.25)


</style>

