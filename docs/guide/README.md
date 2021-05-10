---
title: Blogging Like a Hacker
lang: en-US
sidebarDepth: 2
collapsable: false
---

# 1111111

## aa

* ssadsdsddsds

## ∏

### cc

#### ddd

* bbb


<script>
  export default{
    mounted() {
      console.log('...')
      var a = new Array("🌹 🌹 🌹 🌹 🌹", "🌸 🌸 🌸 🌸 🌸 🌸", "😊😊 😊 😊😊", "🍊🍊🍊🍊🍊", "🍎 🍎 🍎 🍎", "✨ ✨ ✨ ✨", "🦉 🦉 🦉 🦉 🦉 🦉", "🔔 🔔 🔔 🔔", "❤️❤️❤️❤️❤️", "🌞 🌞 🌞 🌞", "🍉 🍉 🍉 🍉", "😄😄😄😄😄😄", 'ヾ(Ő∀Ő๑)ﾉ', '◔̯◔', '^O^', 'ฅ( ̳• ε • ̳)ฅ', '( ͡° ͜ʖ ͡°)', 'ʕ•̫͡•ʕ*̫͡*ʕ•͓͡•ʔ-̫͡-ʕ•̫͡•ʔ*̫͡*ʔ-̫͡-ʔ', 'ฅ( ̳• ◡ • ̳)ฅ', '(◎｀・ω・´)人(´・ω・｀*)', '人生若只如初见', '何事秋风悲画扇', '等闲变却故人心', '却道故人心易变', '骊山语罢清宵半', '泪雨霖铃终不怨', '何如薄幸锦衣郎', '比翼连枝当日愿'),
      b = new Array("#f37b1d", "#fbbd08", "#8dc63f", "#39b54a", "#1cbbb4", "#e03997", "#ef8ce2", "#989a55", "#bdbf78", "#efff51"),
      c = new Array("12", "14", "16", "18", "20", "22", "24", "26", "28", "30");
      document.getElementById('app').addEventListener('click', function(e) {
        var $i = document.createElement('span')
        $i.className = 'animate-words'
        var a_idx = parseInt(Math.random()* a.length), b_idx = parseInt(Math.random() *b.length), c_idx = parseInt(Math.random()* c.length);
        a_idx = (a_idx + 1) % a.length;
        b_idx = (b_idx + 1) % b.length;
        c_idx = (c_idx + 1) % c.length;
        $i.innerHTML = a[a_idx]
        var x = e.pageX,
            y = e.pageY;
        $i.style.cssText =
         `z-index: 9999;
          top: ${y - 20}px;
          left: ${x}px;
          position: absolute;
          font-weight: bold;
          font-size: ${c[c_idx]}px;
          color: ${b[b_idx]}`
        document.body.append($i);
        var animate = $i.animate([
          { "top": y - 180 + 'px', "opacity": 0 }
        ], {
          duration: 1500,
          iterations: 1
        });
        animate.onfinish = function () {
          let s = document.querySelector('.animate-words')
          if($i.innerHTML === a[a_idx]) {
            $i.innerHTML = ''
            document.body.removeChild(s)
          }
        }
      })
    }
}
</script>
