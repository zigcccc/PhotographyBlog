<template>
  <div :class="['btn-container', align]">
    <a v-if="href === '#'" :href="href" :class="['btn', className, inverted ? 'is-inverted' : '']">
      <slot></slot>
    </a>
    <router-link v-else :to="href" :class="['btn', className, inverted ? 'is-inverted' : '']">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    align: {
      type: String,
      required: false
    },
    href: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: false
    },
    inverted: {
      type: Boolean,
      require: false
    }
  }
}
</script>

<style lang="sass" scoped>
.btn-container
  display: flex
  margin: 2em 0 1em
  &.center
    justify-content: center
  &.right
    justify-content: flex-end
  & > a
    background: $primary
    color: $black
    padding: 1.25em 1.5em
    border-radius: 200px
    box-shadow: $shadow-1
    +quickEaseTransition(300ms)
    font-weight: 800
    font-family: $family-sans-serif
    text-transform: uppercase
    font-size: .9em
    line-height: 1
    &.small-cta
      font-size: .75em
    &.is-inverted
      background: $black
      color: $white
    &:hover
      box-shadow: $shadow-3
      transform: translateY(-3px)

</style>


