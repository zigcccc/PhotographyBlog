<template>
  <div>
    <h1>Ooops, page not found...</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  created(){
    document.title = 'Iskana stran ne obstaja - Fotografija :: Ziga Krasovec ✌️'
    this.$store.dispatch('updateDescription', 'Predstavitev fotografskih del v okviru predmeta fotografija2 na Naravoslovno tehnični fakulteti v Ljubljani.')
  }
}
</script>

