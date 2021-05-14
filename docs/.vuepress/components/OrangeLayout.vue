<template>
  <div class="layout-example">
    <!-- #region snippet1 -->
    <orange-row :direction="'row-reverse'" :offset="1">
      <orange-col :size="12">
        <div class="content">1223</div>
      </orange-col>
      <orange-col :size="12">
        <div class="content">32332</div>
      </orange-col>
      <orange-col :size="12">
        <div class="content">1223...</div>
      </orange-col>
      <orange-col :size="12">
        <div class="content">32332...</div>
      </orange-col>
    </orange-row>
    <orange-row :offset="1">
      <orange-col :size="6">
        <div class="content">1223</div>
      </orange-col>
      <orange-col :size="6">
        <div class="content">32332</div>
      </orange-col>
      <orange-col :size="6">
        <div class="content">1223...</div>
      </orange-col>
      <orange-col :size="6">
        <div class="content">32332...</div>
      </orange-col>
    </orange-row>
    <!-- #endregion snippet1 -->
    <Content slot-key="snippet1"/>
    <component v-if="dynamicComponent" :is="dynamicComponent"></component>
  </div>
</template>

<script>
import OrangeRow from '../../../packages/layout/src/row'
import OrangeCol from '../../../packages/layout/src/col'
export default {
  name: 'OrangeLayout',
  components: {
    OrangeRow,
    OrangeCol
  },
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted () {
    import('./animate-words').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>

<style lang="scss" scoped>
.layout-example {
  .content {
    width: 100%;
    background: #de6e2d8f;
    height: 40px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 40px;
  }
}
</style>