import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 配置路由
const routes = [
  {
    path: '/child-vue',
    component: () => import('@/views/childVue/index.vue'),
  },
  {
    path: '/child-ng',
    component: () => import('@/views/childNg/index.vue'),
  },
  {
    path: '/child-react',
    component: () => import('@/views/childReact/index.vue'),
  }

];

// 创建路由实例
const router = new VueRouter({
  routes,
  mode: 'history', // 如果你想使用 history 模式，需要配置这个选项
});

// 导出路由
export default router;
