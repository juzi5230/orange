// 导入组件，组件必须声明 name
import OrangeCol from './src/col.vue'
import OrangeRow from './src/row.vue'
// 为组件提供 install 安装方法，供按需引入
OrangeCol.install = function(Vue) {
  Vue.component(OrangeCol.name, OrangeCol)
}
OrangeRow.install = function(Vue) {
  Vue.component(OrangeRow.name, OrangeRow)
}

// 默认导出组件
export { OrangeCol, OrangeRow }

