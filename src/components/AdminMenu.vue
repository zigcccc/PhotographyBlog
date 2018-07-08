<template>
  <aside id="admin-menu">
    <div class="admin-menu-header">
      <h3 @click="toAdminHome">admin</h3>
      <hr>
    </div>
    <div class="admin-menu-content">
      <div class="albums">
        <div class="album" v-for="album in albumsNames" :key="album.slug">
          <router-link :to="`admin/${album.slug}`">{{ album.name }}</router-link>
        </div>
      </div>
    </div>
    <div class="admin-menu-footer">
      <hr>
      <div class="logout-btn-container">
        <a @click.prevent="logout"><span><i class="fas fa-sign-out-alt"></i></span>logout</a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AdminMenu',
  props: ['logout', 'toAdminHome'],
  computed: {
    albumsNames() {
      return this.$store.getters.albumsNameAndSlug;
    },
    albums() {
      return this.$store.state.albums
    }
  }
}
</script>

<style lang="sass" scoped>
#admin-menu
  background: white
  border-radius: 5px
  box-shadow: $shadow-1
  min-height: calc(100vh - #{$navbar-height + 35})
  padding: 1em
  display: flex
  flex-direction: column
  justify-content: space-between

  .admin-menu-header
    h3
      font-weight: 900
      text-align: center
      text-transform: uppercase
      +quickEaseTransition
      margin-top: .5em
      &:hover
        cursor: pointer
        text-shadow: 0 5px 10px rgba(0,0,0,.2)

  .admin-menu-content
    flex-grow: 1

  .admin-menu-footer
    .logout-btn-container
      display: flex
      justify-content: center
      margin-bottom: .5em
      & > a
        background: $primary
        color: $black
        padding: .75em 1em
        border-radius: 200px
        font-weight: 900
        font-size: 14px
        box-shadow: $shadow-2
        +bounceTransition(400ms)
        &:hover
          box-shadow: $shadow-4
          transform: translateY(-3px)
        span
          margin-right: .5em
          & > svg
            transform: rotate(180deg) translateY(-1px)
</style>

