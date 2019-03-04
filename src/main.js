// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import resource from './resource/vue-resource.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
resource(router)
Vue.config.productionTip = false

Vue.http.get('static/assets/config.json').then(({data}) => {
  ({'root': Vue.http.options.root} = data)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    data () {
      return {
        config: data
      }
    }
  })
})
