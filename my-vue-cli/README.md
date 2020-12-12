# 这是一个练习vue2.0的项目

## UI库：mint-ui和Mui

### 主要练习怎么用webpack搭建一个简单的vue2.0项目(没用vue-cli脚手架)

### 关于底部Tabbar说明
一、关于图标的说明
1. 由于Mui的购物车图标在扩展图标库中，所以需要把Mui中的
  icons-extra.css和mui-icons-extra.ttf两个文件复制到项目中(最好参考我的mui目录来放置，不然有可能出现找不到这两个文件的问题)
2. 然后在main.js文件中引入icons-extra.css(不需要引入mui-icons-extra.ttf文件) import './lib/mui/css/icons-extra.css'
3. 在app.vue中，参照此写法创建图标元素：<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
  切记不能省略mui-icon和mui-icon-extra这两个class名。

### 关于路由切换动画
1. 把<router-view></router-view>用<transition></transition>包裹
2. 离场动画.v-leave-to加position:absolute;不然进场动画元素会由于立场动画元素占据文档流，从而被挤压到底部。