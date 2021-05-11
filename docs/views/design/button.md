---
sidebarDepth: 0
---

# 按钮

::: slot sizeNormal
## 展示size=normal、不同类型的按钮
:::

::: slot disabledSnippet1

### 代码示例如下所示

  ::: details 查看演示代码
  <<< @/docs/.vuepress/components/OrangeButton.vue#snippet1{1}
  <!-- ::: -->
:::


::: slot sizeMidium

## 展示size=medium、不同类型的按钮

:::

::: slot disabledSnippet2

  ### 代码示例如下所示
  ::: details 查看演示代码
  <<< @/docs/.vuepress/components/OrangeButton.vue#snippet2{1}
  <!-- ::: -->
:::

::: slot sizeSmall
## 展示size=small、不同类型的按钮
:::

::: slot disabledSnippet3
### 代码示例如下所示：
  ::: details 查看演示代码
  <<< @/docs/.vuepress/components/OrangeButton.vue#snippet4{1}
  <!-- ::: -->
:::

::: slot sizeMini
## 展示size=mini、不同类型的按钮
:::

::: slot disabledSnippet4
### 代码示例如下所示：
  ::: details 查看演示代码
  <<< @/docs/.vuepress/components/OrangeButton.vue#snippet4{1}
  <!-- ::: -->
:::

::: slot disabled
## disabled=true、不同类型的按钮
:::

::: slot disabledSnippet5
### 代码示例如下所示：
  ::: details 查看演示代码
  <<< @/docs/.vuepress/components/OrangeButton.vue#snippet5{1}
  <<< @/docs/.vuepress/components/OrangeButton.vue#snippet6{1}
  <!-- ::: -->
:::
<OrangeButton></OrangeButton>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|type| 按钮类型 | string | 'primary', 'info', 'success', 'warning', 'danger' | 'primary' |
|size| 按钮尺寸 | string | 'normal', 'medium', 'small', 'mini' | normal |
|disabled| 是否禁用按钮 | boolean | true, false | false |

<font size=5>methods</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
|click| 按钮点击事件 | function | - | - |


<animate-words />
