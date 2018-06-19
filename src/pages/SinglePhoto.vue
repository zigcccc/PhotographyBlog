<template>
  <div>
    <h1>SinglePhoto Page</h1>
    <div v-if="image">
      <img :src="image.image" :alt="image.title">
    </div>
  </div>
</template>

<script>
import images from '@/structure/images.json'
export default {
  name: 'SinglePhoto',
  data(){
    return {
      image: null
    }
  },
  methods: {
    getAllImages(){
      for (let category in images) {
        for (let image in images[category]) {
          let singleImage = images[category][image];
          if (singleImage.slug === this.$route.params.slug) {
            this.image = singleImage;
          }
        }
      }
    }
  },
  created(){
    this.getAllImages()
  }
}
</script>
