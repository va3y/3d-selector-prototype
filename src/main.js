import Vue from 'vue'
import App from './App.vue'
import * as ModelViewer from "@google/model-viewer"





Vue.use(ModelViewer);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

