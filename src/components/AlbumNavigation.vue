<template>
  <div id="album-navigation">
    {{ prev.albumName }}
    {{ next.albumName }}
  </div>
</template>

<script>
export default {
  name: 'AlbumNavigation',
  props: ['prev', 'next']
}
</script>

<style lang="sass" scoped>

</style>
