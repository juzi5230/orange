# orange

## Project setup

``` 

npm install
```

### Compiles and hot-reloads for development

``` 

npm run serve // 项目启动

npm run docs:dev // 启动vuepress文档
```

### Compiles and minifies for production

```

npm run docs:build // 文档打包

npm run lib // 组件打包
```

### Lints and fixes files

```

npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

components library

```

├── docs               # 项目文档
│   ├── .vuepress           # vuepress 配置
│       ├── components    # 组件
│       ├── config    # vuepress配置
│   ├── *    # 导航对应页面

│   ├── packages         # 组件源码 components library

│   ├── examples         # 组件实例 
│       ├── home      # 示例目录
│           ├── main.vue      # 页面入口
│           ├── children      # 子页面 如果有
│           ├── components      # 本页面级别的公用组件在此存放 如果有
│   ├── store      # vuex目录        
│   ├── router      # 项目路由       
│   ├── plugins      # 项目公用js和公用配置       
│       ├── vant.js      # 项目公用 vantjs和需要用到的ui组件
│       ├── axios.js      # axios的一些基础配置
│   ├── plugins      # 项目公用js和公用配置       
│   └──  main.js      # vue项目入口文件
├── package.json      # 依赖包
├── vue.config.js      # 项目配置文件，具体使用说明可查看[https://cli.vuejs.org/zh/config/#vue-config-js](https://cli.vuejs.org/zh/config/#vue-config-js)
└── readme.md         # 项目说明

```

### reference

See [reference](https://juejin.cn/post/6844903843478667271)

```javascript
 *
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃ 　
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug　　
 * 　　　┃　　　┃　　+
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 *
 ```
