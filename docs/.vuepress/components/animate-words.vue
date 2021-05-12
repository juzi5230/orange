<template>
  <div></div>
</template>

<script>
export default {
  name: 'animateWords',
  data () {
    return {
      a: [ "🌹 🌹 🌹 🌹 🌹", "🌸 🌸 🌸 🌸 🌸 🌸", "😊😊 😊 😊😊", "🍊🍊🍊🍊🍊", "🍎 🍎 🍎 🍎", "✨ ✨ ✨ ✨", "🦉 🦉 🦉 🦉 🦉 🦉", "🔔 🔔 🔔 🔔", "❤️❤️❤️❤️❤️", "🌞 🌞 🌞 🌞", "🍉 🍉 🍉 🍉", "😄😄😄😄😄😄", 'ヾ(Ő∀Ő๑)ﾉ', '◔̯◔', '^O^', 'ฅ( ̳• ε • ̳)ฅ', '( ͡° ͜ʖ ͡°)', 'ʕ•̫͡•ʕ*̫͡*ʕ•͓͡•ʔ-̫͡-ʕ•̫͡•ʔ*̫͡*ʔ-̫͡-ʔ', 'ฅ( ̳• ◡ • ̳)ฅ', '(◎｀・ω・´)人(´・ω・｀*)', '人生若只如初见', '何事秋风悲画扇', '等闲变却故人心', '却道故人心易变', '骊山语罢清宵半', '泪雨霖铃终不怨', '何如薄幸锦衣郎', '比翼连枝当日愿' ],
      b: [ "#f37b1d", "#fbbd08", "#8dc63f", "#39b54a", "#1cbbb4", "#e03997", "#ef8ce2", "#989a55", "#bdbf78", "#efff51" ],
      c: [ "12", "14", "16", "18", "20", "22", "24", "26", "28", "30" ]
    }
  },
  mounted() {
    document.getElementById('app').addEventListener('click', this.handler)
  },
  methods: {
    handler: function (e) {
      var $i = document.createElement('span')
      $i.className = 'animate-words'
      var a_idx = parseInt(Math.random()* this.a.length), b_idx = parseInt(Math.random() * this.b.length), c_idx = parseInt(Math.random()* this.c.length)
      a_idx = (a_idx + 1) % this.a.length
      b_idx = (b_idx + 1) % this.b.length
      c_idx = (c_idx + 1) % this.c.length
      $i.innerHTML = this.a[a_idx]
      var x = e.pageX,
        y = e.pageY
      $i.style.cssText =
       `z-index: 9999;
        top: ${y - 20}px;
        left: ${x}px;
        position: absolute;
        font-weight: bold;
        font-size: ${this.c[c_idx]}px;
        color: ${this.b[b_idx]}`
      document.body.append($i);
      var animate = $i.animate([
        { "top": y - 180 + 'px', "opacity": 0 }
      ], {
        duration: 1500,
        iterations: 1
      });
      let _this = this
      animate.onfinish = function () {
        let s = document.querySelector('.animate-words')
        if($i.innerHTML === _this.a[a_idx]) {
          $i.innerHTML = ''
          document.body.removeChild(s)
        }
      }
    }
  },
  beforeDestroy() {
    document.getElementById('app').removeEventListener('click', this.handler)
  }
}
</script>
