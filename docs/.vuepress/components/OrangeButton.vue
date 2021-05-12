<template>
  <div>
    <Content slot-key="sizeNormal"/>
    <!-- #region snippet1 -->
    <orange-button @click="clickDefault">default</orange-button>
    <orange-button class="demo-button" :type="'info'" @click="clickDefault">info</orange-button>
    <orange-button class="demo-button" :type="'success'" @click="clickDefault">success</orange-button>
    <orange-button class="demo-button" :type="'warning'" @click="clickDefault">warning</orange-button>
    <orange-button class="demo-button" :type="'danger'" @click="clickDefault">danger</orange-button>
    <!-- #endregion snippet1 -->
    <Content slot-key="disabledSnippet1"/>
    <br/><hr/>
    <Content slot-key="sizeMidium"/>
    <!-- #region snippet2 -->
    <orange-button class="demo-button" :size="'medium'" @click="clickDefault">default</orange-button>
    <orange-button class="demo-button" :type="'info'" :size="'medium'" @click="clickDefault">info</orange-button>
    <orange-button class="demo-button" :type="'success'" :size="'medium'" @click="clickDefault">success</orange-button>
    <orange-button class="demo-button" :type="'warning'" :size="'medium'" @click="clickDefault">warning</orange-button>
    <orange-button class="demo-button" :type="'danger'" :size="'medium'" @click="clickDefault">danger</orange-button>
    <!-- #endregion snippet2 -->
    <Content slot-key="disabledSnippet2"/>
    <br/><hr/>
    <Content slot-key="sizeSmall"/>
    <!-- #region snippet3 -->
    <orange-button@click="clickDefault" :size="'small'">default</orange-button@click=>
    <orange-button class="demo-button" :type="'info'" :size="'small'" @click="clickDefault">info</orange-button>
    <orange-button class="demo-button" :type="'success'" :size="'small'" @click="clickDefault">success</orange-button>
    <orange-button class="demo-button" :type="'warning'" :size="'small'" @click="clickDefault">warning</orange-button>
    <orange-button class="demo-button" :type="'danger'" :size="'small'" @click="clickDefault">danger</orange-button>
    <!-- #endregion snippet3 -->
    <Content slot-key="disabledSnippet3"/>
    <Content slot-key="sizeMini"/>
    <!-- #region snippet4 -->
    <orange-button@click="clickDefault" :size="'mini'">default</orange-button@click=>
    <orange-button class="demo-button" :type="'info'" :size="'mini'" @click="clickDefault">info</orange-button>
    <orange-button class="demo-button" :type="'success'" :size="'mini'" @click="clickDefault">success</orange-button>
    <orange-button class="demo-button" :type="'warning'" :size="'mini'" @click="clickDefault">warning</orange-button>
    <orange-button class="demo-button" :type="'danger'" :size="'mini'" @click="clickDefault">danger</orange-button>
    <!-- #endregion snippet4 -->
    <Content slot-key="disabledSnippet4"/>
    <br/><hr/>
    <Content slot-key="disabled"/>
    <!-- #region snippet5 -->
    <orange-button @click="clickDefault" :disabled="true">default</orange-button>
    <orange-button class="demo-button" :type="'info'" :size="'small'" :disabled="true" @click="clickDefault">info</orange-button>
    <orange-button class="demo-button" :type="'success'" :size="'medium'" :disabled="true" @click="clickDefault">success</orange-button>
    <orange-button class="demo-button" :type="'warning'" :size="'mini'" :disabled="true" @click="clickDefault">warning</orange-button>
    <orange-button class="demo-button" :type="'danger'" :size="'mini'" :disabled="true" @click="clickDefault">danger</orange-button>
    <!-- #endregion snippet5 -->
    <Content slot-key="disabledSnippet5"/>
  </div>
</template>

<script>
// #region snippet6
import orangeButton from '../../../packages/button'
export default {
  components: {
    orangeButton
  },
  methods: {
    clickDefault() {
      alert('trigger click event： clickDefault')
    },
    clickInfo() {
      alert('trigger click event： clickInfo')
    },
    clickSuccess() {
      alert('trigger click event： clickSuccess')
    }
  }
}
// #endregion snippet6
</script>

<style lang="scss" scoped>
.demo-button {
  margin-left: 10px;
}
</style>