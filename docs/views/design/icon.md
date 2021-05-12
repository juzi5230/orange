---
sidebarDepth: 0
---

# icon

::: slot colorfull-icon
## 不可以修改色值的icon
:::

::: slot color-changeable-icon
## 可以修改色值的icon
:::

::: slot examples
## 示例
:::

::: slot examples-snippet
  ::: details 查看演示代码
  <<< @/docs/.vuepress/components/OrangeIcon.vue#snippet1
:::

<ClientOnly>
  <OrangeIcon/>
</ClientOnly>

## 使用方法

```js
  <OrangeIcon :name="item.font_class" :width="'40px'" :height="'40px'"></OrangeIcon>
```

### 可选icon元素

::: details
```js
 list: [{
    "icon_id": "735284",
    "name": "四叶草",
    "font_class": "icon10",
    "unicode": "e615",
    "unicode_decimal": 58901
  },
  {
    "icon_id": "2468491",
    "name": "26类花边配饰x16",
    "font_class": "leihuabianpeishix",
    "unicode": "e691",
    "unicode_decimal": 59025
  },
  {
    "icon_id": "3093089",
    "name": "四叶草",
    "font_class": "shuyeu",
    "unicode": "e612",
    "unicode_decimal": 58898
  },
  {
    "icon_id": "3758250",
    "name": "花",
    "font_class": "hua",
    "unicode": "e60e",
    "unicode_decimal": 58894
  },
  {
    "icon_id": "3904415",
    "name": "笑脸",
    "font_class": "xiaolian",
    "unicode": "e60b",
    "unicode_decimal": 58891
  },
  {
    "icon_id": "5029089",
    "name": "花蛤",
    "font_class": "huage",
    "unicode": "e616",
    "unicode_decimal": 58902
  },
  {
    "icon_id": "5167861",
    "name": "花椰菜",
    "font_class": "huayecai",
    "unicode": "e607",
    "unicode_decimal": 58887
  },
  {
    "icon_id": "13077299",
    "name": "food-西蓝花 ",
    "font_class": "beifen-xiaotubiao_food-xilanhua",
    "unicode": "e65f",
    "unicode_decimal": 58975
  },
  {
    "icon_id": "19463547",
    "name": "花 喇叭花 鲜花",
    "font_class": "hualabahuaxianhua",
    "unicode": "e62a",
    "unicode_decimal": 58922
  },
  {
    "icon_id": "20384666",
    "name": "orange",
    "font_class": "orange",
    "unicode": "eccc",
    "unicode_decimal": 60620
  },
  {
    "icon_id": "20519826",
    "name": "笑脸",
    "font_class": "xiaolian1",
    "unicode": "e60c",
    "unicode_decimal": 58892
  },
  {
    "icon_id": "21419393",
    "name": "设置",
    "font_class": "shezhi",
    "unicode": "e6a7",
    "unicode_decimal": 59047
  },
  {
    "icon_id": "21419398",
    "name": "分类2",
    "font_class": "fenlei2",
    "unicode": "e6a8",
    "unicode_decimal": 59048
  },
  {
    "icon_id": "21430499",
    "name": "链接",
    "font_class": "xian1-04",
    "unicode": "e60d",
    "unicode_decimal": 58893
  },
  {
    "icon_id": "21430500",
    "name": "筛选",
    "font_class": "xian1_huaban1",
    "unicode": "e60f",
    "unicode_decimal": 58895
  },
  {
    "icon_id": "21430501",
    "name": "分享",
    "font_class": "xian1-03",
    "unicode": "e610",
    "unicode_decimal": 58896
  },
  {
    "icon_id": "21430502",
    "name": "链接02",
    "font_class": "xian1-05",
    "unicode": "e611",
    "unicode_decimal": 58897
  },
  {
    "icon_id": "21430503",
    "name": "下一级",
    "font_class": "xian1-02",
    "unicode": "e613",
    "unicode_decimal": 58899
  },
  {
    "icon_id": "21430504",
    "name": "选择",
    "font_class": "xian1-09",
    "unicode": "e614",
    "unicode_decimal": 58900
  },
  {
    "icon_id": "21430505",
    "name": "添加",
    "font_class": "xian1-07",
    "unicode": "e617",
    "unicode_decimal": 58903
  },
  {
    "icon_id": "21430506",
    "name": "指针",
    "font_class": "xian1-08",
    "unicode": "e618",
    "unicode_decimal": 58904
  },
  {
    "icon_id": "21430507",
    "name": "任务",
    "font_class": "xian1-13",
    "unicode": "e619",
    "unicode_decimal": 58905
  },
  {
    "icon_id": "21430508",
    "name": "选中",
    "font_class": "xian1-12",
    "unicode": "e61a",
    "unicode_decimal": 58906
  },
  {
    "icon_id": "21430509",
    "name": "上一个",
    "font_class": "xian1-06",
    "unicode": "e61b",
    "unicode_decimal": 58907
  },
  {
    "icon_id": "21430510",
    "name": "标签",
    "font_class": "xian1-14",
    "unicode": "e61c",
    "unicode_decimal": 58908
  },
  {
    "icon_id": "21430511",
    "name": "搜索",
    "font_class": "xian1-20",
    "unicode": "e61d",
    "unicode_decimal": 58909
  },
  {
    "icon_id": "21430512",
    "name": "下载",
    "font_class": "xian1-16",
    "unicode": "e61e",
    "unicode_decimal": 58910
  },
  {
    "icon_id": "21430513",
    "name": "搜索刷新",
    "font_class": "xian1-10",
    "unicode": "e61f",
    "unicode_decimal": 58911
  },
  {
    "icon_id": "21430514",
    "name": "添加",
    "font_class": "xian1-11",
    "unicode": "e620",
    "unicode_decimal": 58912
  },
  {
    "icon_id": "21430515",
    "name": "分享",
    "font_class": "xian1-18",
    "unicode": "e621",
    "unicode_decimal": 58913
  },
  {
    "icon_id": "21430516",
    "name": "分享2",
    "font_class": "xian1-17",
    "unicode": "e622",
    "unicode_decimal": 58914
  },
  {
    "icon_id": "21430517",
    "name": "标签2",
    "font_class": "xian1-19",
    "unicode": "e623",
    "unicode_decimal": 58915
  },
  {
    "icon_id": "21430518",
    "name": "退出",
    "font_class": "xian1-15",
    "unicode": "e624",
    "unicode_decimal": 58916
  },
  {
    "icon_id": "21466081",
    "name": "047-boy",
    "font_class": "047-boy",
    "unicode": "e727",
    "unicode_decimal": 59175
  },
  {
    "icon_id": "21466082",
    "name": "050-girl",
    "font_class": "050-girl",
    "unicode": "e728",
    "unicode_decimal": 59176
  },
  {
    "icon_id": "21490687",
    "name": "洗衣服",
    "font_class": "002-laundry",
    "unicode": "e70f",
    "unicode_decimal": 59151
  },
  {
    "icon_id": "21490688",
    "name": "摇篮",
    "font_class": "003-cradle",
    "unicode": "e710",
    "unicode_decimal": 59152
  },
  {
    "icon_id": "21490756",
    "name": "家人",
    "font_class": "012-family",
    "unicode": "e711",
    "unicode_decimal": 59153
  },
  {
    "icon_id": "21490806",
    "name": "树",
    "font_class": "021-familytree",
    "unicode": "e714",
    "unicode_decimal": 59156
  },
  {
    "icon_id": "21490843",
    "name": "拉钩",
    "font_class": "029-pinkypromise",
    "unicode": "e717",
    "unicode_decimal": 59159
  }]
```

:::

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|name| icon名称 | string | 'shuyeu', 'hua' 等 | '' |
|width| icon宽度 | string |  | 20px |
|height| icon高度 | string |  | 20px |
|color| icon色值 | rgb / 16进制色值 |  |  |

