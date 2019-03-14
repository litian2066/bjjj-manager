import Vue from 'vue'
import Router from 'vue-router'
import { Loading } from 'element-ui'

Vue.use(Router)

const options = {
  routes: [
    {
      path: '/',
      component: resolve => require(['./../views/login'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['./../views/login'], resolve)
    },
    {
      path: '/home',
      component: resolve => require(['./../views/home'], resolve),
      children: [
        {
          path: 'index',
          component: resolve => require(['./../views/index'], resolve)
        },
        {
          path: 'budget/item-wjw',
          component: resolve => require(['./../views/budget/items/item-wjw'], resolve)
        },
        {
          path: 'budget/item-before',
          component: resolve => require(['./../views/budget/items/item-before'], resolve)
        },
        {
          path: 'budget/item-wrappage',
          component: resolve => require(['./../views/budget/items/item-wrappage'], resolve)
        }
      ].concat({
        path: '*',
        component: resolve => require(['./../views/Error'])
      })
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
  let app = router.app
  let loadingInstance = Loading.service(options)
  // 以服务的方式调用的 Loading 需要异步关闭
  app.$nextTick(() => {
    loadingInstance.close()
  })
})
export default router
