<template>
  <div ref="fan" class="fan">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="item"
      :style="getItemStyle(item.color,index)"
      @click="selectColor(item)"
    />
  </div>
</template>
<script>
export default {
  name: 'ColorPicker',
  // props: {
  //   list: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  data() {
    return {
      isOpen: false,
      list: [
        // {
        //   color: '#ff0000',
        //   cnName: '红',
        //   jpName: 'NADESHIKO'
        // },
        // {
        //   color: '#ff3300',
        //   cnName: '橙红',
        //   jpName: 'KOHBAI'
        // },
        // {
        //   color: 'ff6600',
        //   cnName: '橙',
        //   jpName: 'SUOH'
        // },
        // {
        //   color: '#ff9900',
        //   cnName: '橙黄',
        //   jpName: 'TAIKOH'
        // },
        // {
        //   color: '#ffff00',
        //   cnName: '黄',
        //   jpName: 'IKKONZOME'
        // },
        // {
        //   color: '#99ff00',
        //   cnName: '黄绿',
        //   jpName: 'KUWAZOME'
        // },
        // {
        //   color: '#00ff00',
        //   cnName: '绿',
        //   jpName: 'MOMO'
        // },
        // {
        //   color: '#00ffff',
        //   cnName: '蓝绿',
        //   jpName: 'ICHIGO'
        // },
        // {
        //   color: '#0000ff',
        //   cnName: '蓝',
        //   jpName: 'USUBENI'
        // },
        // {
        //   color: '#6600ff',
        //   cnName: '蓝紫',
        //   jpName: 'IMAYOH'
        // },
        // {
        //   color: '#ff00ff',
        //   cnName: '紫',
        //   jpName: 'NAKABENI'
        // },
        // {
        //   color: '#ff0066',
        //   cnName: '紫红',
        //   jpName: 'SAKURA'
        // }
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
  },
  watch: {
    isOpen(val) {
      Array.from(this.$refs.fan.children).forEach((item, index) => {
        if (val) {
          const degree = 150 / this.list.length * index
          item.style.transform = `rotate(${degree - 73}deg)`
        } else {
          item.style.transform = 'none'
        }
      })
    }
  },
  mounted() {
    this.addFanDot()
  },
  methods: {
    selectColor(item) {
      this.$emit('selectColor', item)
    },

    addFanDot() {
      var dot = document.createElement('div')
      dot.style.cssText = 'height:14px;width:14px;background:#fff;border-radius:50%;position:absolute;bottom:4px;left:8px'
      this.$refs.fan.lastChild.appendChild(dot)
      dot.addEventListener('click', () => {
        this.isOpen = !this.isOpen
      })
    },
    getItemStyle(color, index) {
      // let degree = 150/this.list.length*index
      return { backgroundColor: color, transformOrigin: '10px 140px', zIndex: index }
    }
  }
}
</script>
<style lang="scss" scoped>
.fan{
  width:320px;
  height: 170px;
  position: relative;
  display: inline-block;
}
.item{
  position: absolute;
  left:50%;
  margin-left:-15px;
  top:10px;
  width: 30px;
  height: 140px;
  transition: 2s;
  &:hover{
    opacity: .65;
  }
}

</style>
