// 导入组件，组件必须声明 name
import OrangeButton from './src/button.vue'
// 为组件提供 install 安装方法，供按需引入
OrangeButton.install = function(Vue) {
  Vue.component(OrangeButton.name, OrangeButton)
}

// 默认导出组件
export default OrangeButton
