import Vue from 'vue'
import Router from 'vue-router'
import { Loading } from 'element-ui'

Vue.use(Router)

const options = {
  routes: [
    {
      path: '/',
      component: resolve => require(['./../views/home'], resolve)
    }
  ].concat({
    path: '*',
    component: resolve => require(['./../views/Error'])
  })
}

const router = new Router(options)

router.beforeEach((to, from, next) => {
  console.log('to: ' + to.path + ' from: ' + from.path)
  Loading.service(options)
  next()
})

router.afterEach(route => {
  // let loadingInstance = Loading.service(options)
  // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
  //   loadingInstance.close()
  // })
  let app = router.app
  let loadingInstance = Loading.service(options)
  app.$nextTick(() => {
    loadingInstance.close()
  })
})
export default router
