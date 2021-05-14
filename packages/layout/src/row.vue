<template>
  <div class="orange-row" :class="customerClass" :style="rowStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'OrangeRow',
  props: {
    // 用于控制row中元素在主轴上的对齐方式
    justify: {
      type: String,
      default: () => 'start',
      validator: (val) => {
        return ['start', 'end', 'center', 'between', 'around'].includes(val)
      }
    },
    direction: {
      type: String,
      default: () => 'row',
      validator: (val) => {
        return ['row', 'row-reverse', 'column', 'column-reverse'].includes(val)
      }
    },
    offset: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    customerClass: function() {
      const classTemp = []
      classTemp.push(`justify-${this.justify}`)
      return classTemp.join(' ')
    },
    rowStyle: function() {
      return this.direction ? `flex-direction: ${this.direction}` : 'column'
    }
  },
  mounted() {
    this.$children.forEach((vm, index) => {
      vm.offset = this.offset
    })
  }
}
</script>

<style lang="scss" scoped>
.orange-row {
  display: flex;
  flex-wrap: wrap;
  &.justify-start {
    justify-content: flex-start;
  }
  &.justify-end {
    justify-content: flex-end;
  }
  &.justify-center {
    justify-content: center;
  }
  &.justify-between {
    justify-content: space-between;
  }
  &.justify-around {
    justify-content: space-around;
  }
}
</style>
