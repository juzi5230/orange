<template>
  <div class="orange-button" :class="btnClass" @click="clickButton">
    <slot name="icon" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'OrangeButton',
  props: {
    size: {
      type: String,
      require: false,
      default: () => 'normal'
    },
    type: {
      type: String,
      require: false,
      default: () => 'primary'
    },
    disabled: {
      type: Boolean,
      require: false,
      default: () => false
    }
  },
  computed: {
    btnClass() {
      const classArr = []
      classArr.push(`orange_${this.size}_btn`)
      classArr.push(`btn-${this.type}`)
      if (this.disabled) {
        classArr.push(`btn-disabled`)
      }
      return classArr.join(' ')
    }
  },
  methods: {
    clickButton() {
      if (!this.disabled) this.$emit('click')
    }
  }
}
</script>

<style lang='scss' scoped>
// @import '～style/_theme';
@import '../../../style/_theme.scss';
.orange-button {
  display: inline-block;
  cursor: pointer;
  &.btn-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      opacity: 0.5;
    }
  }
}
.orange_normal_btn {
  padding: 12px 20px;
  border-radius: 4px;
}
.orange_medium_btn {
  padding: 10px 20px;
  border-radius: 4px;
}
.orange_small_btn {
  border-radius: 3px;
  padding: 9px 15px;
}
.orange_mini_btn {
  border-radius: 3px;
  padding: 7px 15px;
}
.btn-primary{
  background: $color-primary;
  border-color: $color-primary;
  color:#fff;
  opacity: 0.85;
  &:hover{
    opacity: 1
  }
}
.btn-info{
  background: $color-info;
  border-color:$color-info;
  color:#fff;
  opacity: 0.85;
  &:hover{
    opacity: 1
  }
}
.btn-success{
  background: $color-success;
  border-color:$color-success;
  color:#fff;
  opacity: 0.85;
  &:hover{
    opacity: 1
  }
}
.btn-warning{
  background: $color-warning;
  border-color:$color-warning;
  color:#fff;
  opacity: .85;
  &:hover{
    opacity: 1
  }
}
.btn-danger{
  background: $color-danger;
  border-color:$color-danger;
  color:#fff;
  opacity: .85;
  &:hover{
    opacity: 1
  }
}
</style>
