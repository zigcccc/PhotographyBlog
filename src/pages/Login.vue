<template>
  <div id="login">
    <div class="form-container" :class="{loading : isLoading}">
      <div class="overlay">
        <div class="spinner">
          <img src="@/assets/spinner.gif" alt="Loading...">
        </div>
      </div>
      <h2>Login to the admin panel</h2>
      <input id="email" required type="email" v-model="email" placeholder="email">
      <input id="password" required type="password" v-model="password" placeholder="password">
      <div class="submit-container">
        <input type="submit" value="login" @click="login">
      </div>
      <div class="errors" :class="{'has-errors' : errors}" v-if="errors">
        <h3>Error</h3>
        <p>{{ errors.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    errors() {
      return this.$store.getters.loginError;
    }
  },
  methods: {
    login() {
      let auth = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signUserIn', auth)
    },
    focusOnEmail() {
      document.getElementById('email').focus();
    },
    focusOnPassword() {
      document.getElementById('password').focus();
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push({name: 'Admin'})
      }
    },
    errors(value) {
      if (value !== null && value.code === 'auth/invalid-email') {
        this.focusOnEmail();
      }
      if (value !== null && value.code === 'auth/wrong-password') {
        this.focusOnPassword();
      }
    }
  },
  created() {
    if (this.user !== null && this.user !== undefined) {
      this.$router.push({name: 'Admin'})
    }
    document.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        this.login()
      }
    })
  },
  mounted() {
    this.focusOnEmail();
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
  position: relative
  .overlay
    display: none
    justify-content: center
    align-items: center
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: transparentize($black, .5)
    .spinner
      width: 75px
      height: auto

  &.loading
    .overlay
      display: flex
  .errors
    margin-top: 1em
    background: $redAccent
    border-radius: 5px
    box-shadow: $shadow-2
    padding: .5em
    & > h3
      font-weight: 900
      text-align: center
      color: $white
    & > p
      text-align: center
      color: $white
      font-size: 14px
    &.has-errors
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
    transform: translateX(0%)
  25%
    transform: translateX(-5%)
  50%
    transform: translateX(0%)
  75%
    transform: translateX(5%)
  100%
    transform: translateX(0%)
</style>

