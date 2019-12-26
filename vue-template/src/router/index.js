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
        title: '首页'
      }
    },
    {
      path: '/authToken',
      name: 'authToken',
      component: resolve => require(['@/Pages/authToken/authToken.vue'], resolve),
      meta: {
        title: '验证权限'
      }
    },
    // {
    //   path: '*',
    //   name: 'notFound',
		// 	component: resolve => require(['@/Pages/notFound/404.vue'], resolve),
    //   meta: {
    //     title: '404'
    //   }
		// },
    {
      path: '/error',
      name: 'notFound',
			component: resolve => require(['@/Pages/notFound/error.vue'], resolve),
      meta: {
        title: '出错啦'
      }
		},
    {
      path: '/demo',
      name: 'demo',
			component: resolve => require(['@/components/HelloWorld.vue'], resolve),
      meta: {
        title: '测试页'
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
