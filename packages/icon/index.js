// 导入组件，组件必须声明 name
import OrangeIcon from './src/icon.vue'
// 为组件提供 install 安装方法，供按需引入
OrangeIcon.install = function(Vue) {
  Vue.component(OrangeIcon.name, OrangeIcon)
}

// 默认导出组件
export default OrangeIcon
