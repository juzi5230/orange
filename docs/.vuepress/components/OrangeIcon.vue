<template>
  <div>
    <Content slot-key="colorfull-icon"/>
    <div class="icon-wrapper">
      <div class="icon-item" v-for="item in listColorfull">
        <orange-icon :name="item.font_class" :width="'40px'" :height="'40px'" :color="'#ff00ff'"></orange-icon>
      </div>
    </div>
    <Content slot-key="color-changeable-icon"/>
    <div class="icon-wrapper">
      <div class="icon-item" v-for="item in list">
        <orange-icon :name="item.font_class" :width="'40px'" :height="'40px'"></orange-icon>
      </div>
    </div>
    <Content slot-key="examples"/>
    <div>
      <!-- #region snippet1 -->
      <orange-icon :name="'cishan'" :width="'50px'" :height="'50px'"></orange-icon>
      <orange-icon :width="'50px'" :height="'50px'" :color="'#ff00ff'"></orange-icon>
      <orange-icon :name="'cishan'" :color="'#ff00ff'"></orange-icon>
      <!-- #endregion snippet1 -->
    </div>
    <Content slot-key="examples-snippet"/>
    <component v-if="dynamicComponent" :is="dynamicComponent"></component>
  </div>
</template>

<script>
import OrangeIcon from '../../../packages/icon'

export default {
  data () {
    return {
      dynamicComponent: null,
      list: [
        {
          "icon_id": "21481848",
          "name": "慈善",
          "font_class": "cishan",
          "unicode": "e720",
          "unicode_decimal": 59168
        },
        {
          "icon_id": "21481849",
          "name": "服装",
          "font_class": "fuzhuang",
          "unicode": "e721",
          "unicode_decimal": 59169
        },
        {
          "icon_id": "21481850",
          "name": "购物",
          "font_class": "gouwu",
          "unicode": "e722",
          "unicode_decimal": 59170
        },
        {
          "icon_id": "21481851",
          "name": "户外",
          "font_class": "huwai",
          "unicode": "e723",
          "unicode_decimal": 59171
        },
        {
          "icon_id": "21481852",
          "name": "健康",
          "font_class": "jiankang",
          "unicode": "e724",
          "unicode_decimal": 59172
        },
        {
          "icon_id": "21481853",
          "name": "电影",
          "font_class": "dianying",
          "unicode": "e725",
          "unicode_decimal": 59173
        },
        {
          "icon_id": "21481854",
          "name": "家",
          "font_class": "jia",
          "unicode": "e726",
          "unicode_decimal": 59174
        },
        {
          "icon_id": "21481855",
          "name": "教育",
          "font_class": "jiaoyu",
          "unicode": "e729",
          "unicode_decimal": 59177
        },
        {
          "icon_id": "21481856",
          "name": "家庭",
          "font_class": "jiating",
          "unicode": "e72a",
          "unicode_decimal": 59178
        },
        {
          "icon_id": "21481857",
          "name": "科学",
          "font_class": "kexue",
          "unicode": "e72b",
          "unicode_decimal": 59179
        },
        {
          "icon_id": "21481858",
          "name": "商业",
          "font_class": "shangye",
          "unicode": "e72c",
          "unicode_decimal": 59180
        },
        {
          "icon_id": "21481859",
          "name": "会议",
          "font_class": "huiyi",
          "unicode": "e72d",
          "unicode_decimal": 59181
        },
        {
          "icon_id": "21481860",
          "name": "音乐",
          "font_class": "yinle",
          "unicode": "e72e",
          "unicode_decimal": 59182
        },
        {
          "icon_id": "21481861",
          "name": "信仰",
          "font_class": "xinyang",
          "unicode": "e72f",
          "unicode_decimal": 59183
        },
        {
          "icon_id": "21481862",
          "name": "旅行",
          "font_class": "lvhang",
          "unicode": "e730",
          "unicode_decimal": 59184
        },
        {
          "icon_id": "21481863",
          "name": "文学",
          "font_class": "wenxue",
          "unicode": "e731",
          "unicode_decimal": 59185
        },
        {
          "icon_id": "21481864",
          "name": "戏剧",
          "font_class": "xiju",
          "unicode": "e732",
          "unicode_decimal": 59186
        },
        {
          "icon_id": "21481865",
          "name": "游戏",
          "font_class": "youxi",
          "unicode": "e733",
          "unicode_decimal": 59187
        },
        {
          "icon_id": "21481866",
          "name": "食物",
          "font_class": "shiwu",
          "unicode": "e734",
          "unicode_decimal": 59188
        },
        {
          "icon_id": "21481867",
          "name": "运动",
          "font_class": "yundong",
          "unicode": "e735",
          "unicode_decimal": 59189
        },
        {
          "icon_id": "21481868",
          "name": "兴趣",
          "font_class": "xingqu",
          "unicode": "e75e",
          "unicode_decimal": 59230
        },
        {
          "icon_id": "735284",
          "name": "四叶草",
          "font_class": "icon10",
          "unicode": "e615",
          "unicode_decimal": 58901
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
      ],
      listColorfull: [{
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
        },
        {
          "icon_id": "3783390",
          "name": "花",
          "font_class": "hua2",
          "unicode": "e62b",
          "unicode_decimal": 58923
        },
        {
          "icon_id": "3788857",
          "name": "花菜-1",
          "font_class": "huacai-",
          "unicode": "e601",
          "unicode_decimal": 58881
        },
        {
          "icon_id": "21466372",
          "name": "happy (2)",
          "font_class": "happy2",
          "unicode": "e736",
          "unicode_decimal": 59190
        },
        {
          "icon_id": "21466373",
          "name": "alien",
          "font_class": "alien",
          "unicode": "e737",
          "unicode_decimal": 59191
        },
        {
          "icon_id": "21466374",
          "name": "laughing",
          "font_class": "laughing",
          "unicode": "e738",
          "unicode_decimal": 59192
        },
        {
          "icon_id": "21466375",
          "name": "happy",
          "font_class": "happy",
          "unicode": "e739",
          "unicode_decimal": 59193
        },
        {
          "icon_id": "21466376",
          "name": "crying (2)",
          "font_class": "crying2",
          "unicode": "e73a",
          "unicode_decimal": 59194
        },
        {
          "icon_id": "21466377",
          "name": "child",
          "font_class": "child",
          "unicode": "e73b",
          "unicode_decimal": 59195
        },
        {
          "icon_id": "21466378",
          "name": "confused",
          "font_class": "confused",
          "unicode": "e73c",
          "unicode_decimal": 59196
        },
        {
          "icon_id": "21466379",
          "name": "cool",
          "font_class": "cool",
          "unicode": "e73d",
          "unicode_decimal": 59197
        },
        {
          "icon_id": "21466380",
          "name": "ninja",
          "font_class": "ninja",
          "unicode": "e73e",
          "unicode_decimal": 59198
        },
        {
          "icon_id": "21466381",
          "name": "puzzle",
          "font_class": "puzzle",
          "unicode": "e73f",
          "unicode_decimal": 59199
        },
        {
          "icon_id": "21466382",
          "name": "romantic",
          "font_class": "romantic",
          "unicode": "e740",
          "unicode_decimal": 59200
        },
        {
          "icon_id": "21466383",
          "name": "dull",
          "font_class": "dull",
          "unicode": "e741",
          "unicode_decimal": 59201
        },
        {
          "icon_id": "21466384",
          "name": "drunk",
          "font_class": "drunk",
          "unicode": "e742",
          "unicode_decimal": 59202
        },
        {
          "icon_id": "21466385",
          "name": "shy",
          "font_class": "shy",
          "unicode": "e743",
          "unicode_decimal": 59203
        },
        {
          "icon_id": "21466386",
          "name": "wondering",
          "font_class": "wondering",
          "unicode": "e744",
          "unicode_decimal": 59204
        },
        {
          "icon_id": "21466387",
          "name": "sleepy",
          "font_class": "sleepy",
          "unicode": "e745",
          "unicode_decimal": 59205
        },
        {
          "icon_id": "21466388",
          "name": "thief",
          "font_class": "thief",
          "unicode": "e746",
          "unicode_decimal": 59206
        },
        {
          "icon_id": "21466389",
          "name": "sweating",
          "font_class": "sweating",
          "unicode": "e747",
          "unicode_decimal": 59207
        },
        {
          "icon_id": "21466390",
          "name": "surprise",
          "font_class": "surprise",
          "unicode": "e748",
          "unicode_decimal": 59208
        },
        {
          "icon_id": "21466391",
          "name": "grinning",
          "font_class": "grinning",
          "unicode": "e749",
          "unicode_decimal": 59209
        },
        {
          "icon_id": "21466392",
          "name": "clown",
          "font_class": "clown",
          "unicode": "e74a",
          "unicode_decimal": 59210
        },
        {
          "icon_id": "21466393",
          "name": "muted",
          "font_class": "muted",
          "unicode": "e74b",
          "unicode_decimal": 59211
        },
        {
          "icon_id": "21466394",
          "name": "angel",
          "font_class": "angel",
          "unicode": "e74c",
          "unicode_decimal": 59212
        },
        {
          "icon_id": "21466395",
          "name": "amazed",
          "font_class": "amazed",
          "unicode": "e74d",
          "unicode_decimal": 59213
        },
        {
          "icon_id": "21466396",
          "name": "cheeky",
          "font_class": "cheeky",
          "unicode": "e74e",
          "unicode_decimal": 59214
        },
        {
          "icon_id": "21466397",
          "name": "dead",
          "font_class": "dead",
          "unicode": "e74f",
          "unicode_decimal": 59215
        },
        {
          "icon_id": "21466398",
          "name": "devil",
          "font_class": "devil",
          "unicode": "e750",
          "unicode_decimal": 59216
        },
        {
          "icon_id": "21466399",
          "name": "angry",
          "font_class": "angry",
          "unicode": "e751",
          "unicode_decimal": 59217
        },
        {
          "icon_id": "21466400",
          "name": "baffled",
          "font_class": "baffled",
          "unicode": "e752",
          "unicode_decimal": 59218
        },
        {
          "icon_id": "21466401",
          "name": "nerd (2)",
          "font_class": "nerd2",
          "unicode": "e753",
          "unicode_decimal": 59219
        },
        {
          "icon_id": "21466402",
          "name": "hockey",
          "font_class": "hockey",
          "unicode": "e754",
          "unicode_decimal": 59220
        },
        {
          "icon_id": "21466403",
          "name": "famous",
          "font_class": "famous",
          "unicode": "e755",
          "unicode_decimal": 59221
        },
        {
          "icon_id": "21466404",
          "name": "nerd",
          "font_class": "nerd",
          "unicode": "e756",
          "unicode_decimal": 59222
        },
        {
          "icon_id": "21466405",
          "name": "in-love",
          "font_class": "in-love",
          "unicode": "e757",
          "unicode_decimal": 59223
        },
        {
          "icon_id": "21466406",
          "name": "wink",
          "font_class": "wink",
          "unicode": "e758",
          "unicode_decimal": 59224
        },
        {
          "icon_id": "21466407",
          "name": "kiss",
          "font_class": "kiss",
          "unicode": "e759",
          "unicode_decimal": 59225
        },
        {
          "icon_id": "21466408",
          "name": "pukin",
          "font_class": "pukin",
          "unicode": "e75a",
          "unicode_decimal": 59226
        },
        {
          "icon_id": "21466409",
          "name": "crying",
          "font_class": "crying",
          "unicode": "e75b",
          "unicode_decimal": 59227
        },
        {
          "icon_id": "21466410",
          "name": "greed",
          "font_class": "greed",
          "unicode": "e75c",
          "unicode_decimal": 59228
        },
        {
          "icon_id": "21466411",
          "name": "sad",
          "font_class": "sad",
          "unicode": "e75d",
          "unicode_decimal": 59229
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
        }
      ]
    }
  },
  mounted () {
    import('./animate-words').then(module => {
      this.dynamicComponent = module.default
    })
  },
  components: {
    OrangeIcon
  }
}
</script>

<style lang="scss" scoped>
.icon-wrapper {
//   overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .icon-item {
    // display: flex;
    // flex: 1;
    width: 60px;
    height: 40px;
    padding: 20px;
    align-items:flex-start;
  }
}
</style>