import Vue from 'vue'
import VueResource from 'vue-resource'
// import { Message } from 'element-ui'
import {Loading, MessageBox} from 'element-ui'
// import { Loading } from 'element-ui'
Vue.use(VueResource)

export default (store, router) => {
  let options = {
    background: '#dddd'
  }
  Vue.http.interceptors.push((request, next) => {
    request.headers.set('Content-Type', 'application/json; charset=UTF-8')
    let token = window.localStorage['token']
    if (token) {
      request.headers.set('token', token)
    }
    if (!request.timeout || request.timeout === 0) {
      // 设置请求超时时间
      request.timeout = 3 * 60 * 1000
    }
    Loading.service(options)
    next((response) => {
      let loadingInstance = Loading.service(options)
      loadingInstance.close()
      let {data, status, statusText} = response
      console.log(statusText)
      if (typeof data === 'string') data = JSON.parse(data)
      let {code, message} = data || {code: 1, message: data}
      if (code && code !== 0) {
        if (code === 2) {
          router.replace({path: '/login'})
        } else if (code === 1) {
          MessageBox.alert(message, {type: 'error'})
        } else {
          MessageBox.alert(message)
        }
        response.ok = false
        response.status = 'bhgx_500'
        response.statusText = message
      } else if (status !== 200) {
        MessageBox.alert('数据加载出错，请联系系统管理员！', {
          type: 'error'
        })
      } else {
        ({result: response.data = data} = data)
      }
    })
  })
}
