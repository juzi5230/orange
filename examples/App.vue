<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/1.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ColorPicker :list="list" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ColorPicker from '@/color-picker'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ColorPicker
  },
  data() {
    return {
      list: [
        {
          color: '#DC9FB4',
          cnName: '撫子',
          jpName: 'NADESHIKO'
        },
        {
          color: '#E16B8C',
          cnName: '紅梅',
          jpName: 'KOHBAI'
        },
        {
          color: '#8E354A',
          cnName: '蘇芳',
          jpName: 'SUOH'
        },
        {
          color: '#F8C3CD',
          cnName: '退紅',
          jpName: 'TAIKOH'
        },
        {
          color: '#F4A7B9',
          cnName: '一斥染',
          jpName: 'IKKONZOME'
        },
        {
          color: '#64363C',
          cnName: '桑染',
          jpName: 'KUWAZOME'
        },
        {
          color: '#F596AA',
          cnName: '桃',
          jpName: 'MOMO'
        },
        {
          color: '#B5495B',
          cnName: '苺',
          jpName: 'ICHIGO'
        },
        {
          color: '#E87A90',
          cnName: '薄紅',
          jpName: 'USUBENI'
        },
        {
          color: '#D05A6E',
          cnName: '今様',
          jpName: 'IMAYOH'
        },
        {
          color: '#DB4D6D',
          cnName: '中紅',
          jpName: 'NAKABENI'
        },
        {
          color: '#FEDFE1',
          cnName: '桜',
          jpName: 'SAKURA'
        },
        {
          color: '#DC9FB4',
          cnName: '撫子',
          jpName: 'NADESHIKO'
        },
        {
          color: '#E16B8C',
          cnName: '紅梅',
          jpName: 'KOHBAI'
        },
        {
          color: '#8E354A',
          cnName: '蘇芳',
          jpName: 'SUOH'
        },
        {
          color: '#F8C3CD',
          cnName: '退紅',
          jpName: 'TAIKOH'
        },
        {
          color: '#F4A7B9',
          cnName: '一斥染',
          jpName: 'IKKONZOME'
        },
        {
          color: '#64363C',
          cnName: '桑染',
          jpName: 'KUWAZOME'
        },
        {
          color: '#F596AA',
          cnName: '桃',
          jpName: 'MOMO'
        },
        {
          color: '#B5495B',
          cnName: '苺',
          jpName: 'ICHIGO'
        },
        {
          color: '#E87A90',
          cnName: '薄紅',
          jpName: 'USUBENI'
        },
        {
          color: '#D05A6E',
          cnName: '今様',
          jpName: 'IMAYOH'
        },
        {
          color: '#DB4D6D',
          cnName: '中紅',
          jpName: 'NAKABENI'
        },
        {
          color: '#FEDFE1',
          cnName: '桜',
          jpName: 'SAKURA'
        }
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background: #f0d1ad;
}
</style>
