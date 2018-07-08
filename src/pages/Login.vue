<template>
  <div id="login">
    <div class="form-container" :class="{error : error}">
      <h2>Login to the admin panel</h2>
      <input type="email" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
      <div class="submit-container">
        <input type="submit" value="login" @click="login">
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: false,
      errorMsg: ''
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    login() {
      if (this.email.length > 0 && this.password.length > 0) {
        let auth = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('signUserIn', auth)
      }
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push({name: 'Admin'})
      }
    }
  },
  created() {
    if (firebase.auth().currentUser !== null) {
      this.$router.push({name: 'Admin'})
    }
    document.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        this.login()
      }
    })
  },
  destroyed() {
    document.removeEventListener('keydown', this.login)
  }
}
</script>

<style lang="sass" scoped>
.form-container
  background: white
  border-radius: 5px
  box-shadow: $shadow-1
  max-width: 500px
  margin: 1em auto 0
  padding: 2em
  transform: translateX(7%)
  &.error
    animation: error 200ms linear
    animation-iteration-count: 2

h2
  color: $black
  font-weight: 900
  font-family: $family-sans-serif
  text-align: center
  font-size: 1em
  text-transform: uppercase
  margin-bottom: 1em
input
  display: block
  width: 100%
  margin: 1em 0
  outline: none
  border: none
  border-bottom: 2px solid $black
  padding: .5em
  &[type="submit"]
    background: $primary
    border: none
    display: inline
    text-transform: uppercase
    font-weight: 900
    padding: .75em 1em
    border-radius: 200px
    max-width: 200px
    box-shadow: $shadow-2
    +bounceTransition(500ms)
    &:hover
      cursor: pointer
      transform: translateY(-3px)
      box-shadow: $shadow-4

.submit-container
  display: flex
  justify-content: center
  margin-top: 1.5em

@keyframes error
  0%
    transform: translateX(7%)
  25%
    transform: translateX(2%)
  50%
    transform: translateX(7%)
  75%
    transform: translateX(12%)
  100%
    transform: translateX(7%)
</style>

