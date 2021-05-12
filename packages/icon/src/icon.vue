<template>
  <svg
    class="orange-icon"
    aria-hidden="true"
    :style="{color, width, height}"
    @click="clickHandler"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>
<script>
import '../svg'
export default {
  name: 'OrangeIcon',
  props: {
    'name': {
      type: String,
      default: () => 'icon10'
    },
    'color': {
      type: String,
      default: () => ''
    },
    'width': {
      type: String,
      default: () => '20px'
    },
    'height': {
      type: String,
      default: () => '20px'
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
    .orange-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    @keyframes spin {
      0% {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }
    .loading{
      animation: spin 1s infinite linear
    }

</style>
