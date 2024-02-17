import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './public-path';


// 生产环境不再输出信息
Vue.config.productionTip = false

let instance = null;

function render(props = {}) {
  if (instance) return;
  const { container } = props;
  // 创建 Vue 实例
  instance = new Vue({
    router, // 使用 router 插件
    render: (h) => h(App),
  });

  // 使用 $mount 方法替代 mount
  instance.$mount(container ? container.querySelector("#app-child-vue") : "#app-child-vue");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}

export async function unmount() {
  // 移除可选链操作符
  instance.$destroy();
  instance.$el.innerHTML = ''; // 清空实例的 HTML 内容
  instance = null;
}
