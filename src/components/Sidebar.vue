<template>
  <nav>
    <div class="logo-container">
      <router-link to="/">
        <div class="huge-letters">
          <span class="huge-letter">Ž</span>
          <span class="huge-letter">K</span>
        </div>
        <span class="logo-text">žiga<strong>krašovec</strong></span>
      </router-link>
    </div>
    <div class="menu-container"></div>
    <div class="legal-container">
      <p>&copy;{{ getCurrentYear }}, Žiga Krašovec</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    currentRoute: String
  },
  computed: {
    getCurrentYear(){
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="sass" scoped>
nav
  width: 30%
  max-width: 200px
  display: flex
  flex-direction: column
  justify-content: space-between
  padding: 1em
  position: fixed
  top: 0
  left: 0
  height: 100vh
  box-shadow: $shadow-2
  background: $white

.logo-container
  position: relative
  .huge-letters
    position: relative
  .logo-text
    position: relative

.legal-container
  font-size: .75em
  text-align: center
  color: $dark

</style>

