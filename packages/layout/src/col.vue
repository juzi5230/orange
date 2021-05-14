<template>
  <div class="orange-col" :class="customerClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'OrangeCol',
  props: {
    size: {
      type: Number,
      default: 24
    }
  },
  data() {
    return {
      offset: 0
    }
  },
  computed: {
    customerClass: function() {
      const classTemp = []
      console.log('......', this.offset)
      classTemp.push(`col-width-${this.size}`)
      classTemp.push(`col-offset-${this.offset}`)
      return classTemp.join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
.orange-col {
  display: inline-block;
  box-sizing: border-box;
  @for $i from 1 through 24{
    &.col-width-#{$i}
    {
      width: 100% / 24 * $i;
    }
    &.col-offset-#{$i} {
      padding-left: 100% / 24 * $i / 2;
      padding-right: 100% / 24 * $i / 2;
    }
  }
}
</style>
