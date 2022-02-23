//导入App类型
import { App } from 'vue'
//引用element-ui全部样式
import 'element-plus/dist/index.css'
//按需引入element-ui组件
import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
} from 'element-plus'

// 全局注册element-ui组件
export default {
  install(app: App): void {
    app.component(ElButton.name, ElButton)
    app.component(ElInput.name, ElInput)
    app.component(ElForm.name, ElForm)
    app.component(ElFormItem.name, ElFormItem)
    app.component(ElTabs.name, ElTabs)
    app.component(ElTabPane.name, ElTabPane)
    app.component(ElIcon.name, ElIcon)
    app.component(ElCheckbox.name, ElCheckbox)
    app.component(ElLink.name, ElLink)
  }
}
