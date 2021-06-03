import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './styles/index.css'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
