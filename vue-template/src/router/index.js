import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
			name: 'index',
			component: () => import(/* webpackChunkName: "index" */'@/Pages/Home/index.vue'),
      meta: {
				title: '首页',
				keepAlive: false,
				userAuth: false
      }
    },
    {
      path: '/error',
			name: 'notFound',
			component: () => import(/* webpackChunkName: "error" */'@/Pages/notFound/error.vue'),
      meta: {
				title: '出错啦',
				keepAlive: false,
				userAuth: false
      }
		},
    {
      path: '/demo',
			name: 'demo',
			component: () => import(/* webpackChunkName: "demo" */'@/components/HelloWorld.vue'),
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
  document.title = to.meta.title || '';
  next();
});

export default router;
