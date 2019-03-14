import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import util from './util/util.js'
import resource from './resource/vue-resource.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(util)
Vue.use(ElementUI)
resource(router)

Vue.config.productionTip = false

Vue.http.get('./../static/assets/config.json').then(({data}) => {
  ({'root': Vue.http.options.root} = data)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    data () {
      return {
        config: data,
        yearList: [
          {id: '2015', name: '2015'},
          {id: '2016', name: '2016'},
          {id: '2017', name: '2017'},
          {id: '2018', name: '2018'},
          {id: '2019', name: '2019'}
        ]
      }
    },
    mounted () {
    }
  })
})
