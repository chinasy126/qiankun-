import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'child-vue',
    entry: '//localhost:3002',
    container: '#child-vue-content',
    activeRule: '/child-vue',
  },
  {
    name: 'child-ng',
    entry: '//localhost:4200',
    container: '#child-ng-content',
    activeRule: '/child-ng',
  },
  {
    name: 'child-react',
    entry: '//localhost:3000',
    container: '#child-react-content',
    activeRule: '/child-react',
  }

]);

start();

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app-base');
