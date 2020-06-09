import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
			name: 'index',
			component: resolve => require(['@/Pages/Home/index.vue'], resolve),
      meta: {
				title: '首页',
				keepAlive: false,
				userAuth: false
      }
    },
    {
      path: '/error',
      name: 'notFound',
			component: resolve => require(['@/Pages/notFound/error.vue'], resolve),
      meta: {
				title: '出错啦',
				keepAlive: false,
				userAuth: false
      }
		},
    {
      path: '/demo',
      name: 'demo',
			component: resolve => require(['@/components/HelloWorld.vue'], resolve),
      meta: {
				title: '测试页',
				keepAlive: false,
				userAuth: false
      }
    }
  ]
});

// 添加全局更改路由title的方法
router.beforeEach((to, from, next) => {
  // 路由发生变化更改title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
