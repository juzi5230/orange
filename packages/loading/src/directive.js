import Vue from 'vue'
// import Loading from './loading.vue'
// var Mask = Vue.extend(Loading)

function insertDom(ele, binding, bindStatus) {
  const el = binding.modifiers.body ? document.body : ele
  console.log('in loading directive')
  console.log(ele.instance)
  const originPosition = el.style.position
  const originOverflow = el.style.overflow
  if (binding.value) {
    const loadingEle = document.createElement('div')
    loadingEle.className = 'orange-loading-customer'
    loadingEle.innerHTML = '加载中'
    console.log('....', el.style.position)
    el.style.position ? '' : el.style.position = 'relative'
    el.style.overflow = 'hidden'
    loadingEle.style.cssText = 'position: absolute; top: 0; bottom: 0; left: 0; right: 0; text-align: center; line-height: 100%; z-index: 9999999; background: rgba(200, 200, 200, 0.3)'
    el.appendChild(loadingEle)
  } else if (!bindStatus) {
    el.style.position = originPosition
    el.style.overflow = originOverflow
    console.log('dddddd')
    const loadingTemp = el.querySelector('.orange-loading-customer')
    console.log(loadingTemp && loadingTemp.length, 'ppp')
    loadingTemp ? el.removeChild(loadingTemp) : ''
  }
}
Vue.directive('orange-loading', {
  bind: function(ele, binding) {
    console.log('bind')
    insertDom(ele, binding, true)
  },
  update: function(ele, binding) {
    console.log('update')
    insertDom(ele, binding, false)
  }
})
