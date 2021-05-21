<template>
  <div>
    <h2 @click="changePart">点击部分loading</h2>
    <div v-orange-loading="partLoading" class="loading-wrapper"></div>
    <h2 @click="changeFull">点击全屏loading</h2>
    <div v-orange-loading.body="fullLoading" class="loading-wrapper"></div>
  </div>
</template>

<script>
import '../../../packages/loading/index'
export default {
  name: 'OrangeLoading',
  data () {
    return {
      fullLoading: false,
      partLoading: false
    }
  },
  methods: {
    changeFull() {
      console.log('trigger full')
      this.fullLoading = !this.fullLoading
      const _this = this
      setTimeout(function() {
        console.log('...')
        _this.fullLoading = !_this.fullLoading
      }, 3000)
    },
    changePart() {
      console.log('trigger part')
      this.partLoading = !this.partLoading
      const _this = this
      setTimeout(function() {
        _this.partLoading = !_this.partLoading
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-wrapper {
  width: 300px;
  height: 300px;
  background: blueviolet;
}
</style>