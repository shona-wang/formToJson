import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Widgets from '../src/index';
import main from './pages/home.vue';

Vue.use(Widgets);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(MintUI);
let routes = [
    {
      path: '/',
      name: 'main',
      component: main
    }
  ];
const router = new VueRouter({
  routes
});

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  data:{
  },
  components: { App },
  template: '<App/>'
});
