<template>
  <div id="admin">
    <div class="admin-container">
      <aside>
        <div class="admin-menu-header">
          <h3>admin</h3>
        </div>
        <div class="admin-menu-content"></div>
        <div class="admin-menu-footer">
          <div class="logout-btn-container">
            <a @click.prevent="logout">logout</a>
          </div>
        </div>
      </aside>
      <main>kjk</main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  methods: {
    logout() {

    }
  }
}
</script>

<style lang="sass" scoped>
.admin-container
  display: grid
  grid-template-columns: 1fr 4fr
  padding: 0 1em

aside
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

main
  padding: 1em 2em
</style>
