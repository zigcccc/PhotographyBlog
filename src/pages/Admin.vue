<template>
  <div id="admin">
    <div class="admin-container">
      <admin-menu :logout="logout" :toAdminHome="toAdminHome" />
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import AdminMenu from '@/components/AdminMenu'
export default {
  name: 'Admin',
  components: {AdminMenu},
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('signUserOut')
    },
    toAdminHome() {
      this.$router.push({name: 'Admin'})
    }
  },
  watch: {
    user (value) {
      if (value === null || value === undefined) {
        this.$router.push({name: 'Login'})
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.admin-container
  display: grid
  grid-template-columns: 1fr 4fr
  padding: 0 1em

main
  padding: 1em 2em
</style>
