import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve)
		},
    {
      path: '/component',
      name: '动态组件',
      component: resolve => require(['@/pages/component'], resolve)
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/vconsole',
      name: 'vconsole',
      component: resolve => require(['@/components/vconsole/vconsole.vue'], resolve)
    },
    {
      path: '/mockjs',
      name: '假数据mock',
      component: resolve => require(['@/components/mockjs/mockjs.vue'], resolve)
    },
    {
      path: '/radio',
      name: '单选框',
      component: resolve => require(['@/components/radio/index.vue'], resolve)
    },
    {
      path: '/radioCustom',
      name: '自定义单选框',
      component: resolve => require(['@/components/radio-custom/index.vue'], resolve)
    },
    {
      path: '/confirmBox',
      name: '确认框',
      component: resolve => require(['@/components/confirmBox/index.vue'], resolve)
    },
    {
      path: '/progressBar',
      name: '加载进度条',
      component: resolve => require(['@/components/progress-bar/index.vue'], resolve)
		},
    {
      path: '/DPlayer',
      name: '视频播放器',
      component: resolve => require(['@/components/Dplayer.vue'], resolve)
		},
    {
      path: '/toast',
      name: '提示框',
      component: resolve => require(['@/components/toast/toast.vue'], resolve)
		},
    {
      path: '/switchBox',
      name: '转化开关',
      component: resolve => require(['@/components/switch-box/demo.vue'], resolve)
		},
    {
      path: '/camera',
      name: '拍照上传',
      component: resolve => require(['@/components/camera/index.vue'], resolve)
		}
  ]
})
