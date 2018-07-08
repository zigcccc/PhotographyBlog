<template>
  <div id="admin">
    <div class="admin-container">
      <admin-menu :logout="logout" :toAdminHome="toAdminHome" />
      <main>kjk</main>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from '@/main'
import AdminMenu from '@/components/AdminMenu'
export default {
  name: 'Admin',
  components: {AdminMenu},
  methods: {
    logout() {
      firebaseApp.auth()
        .signOut()
        .then(() => {
          this.$store.dispatch('removeUser');
          this.$router.replace({name: 'Login'})
        })
    },
    toAdminHome() {
      this.$router.push({name: 'Admin'})
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
