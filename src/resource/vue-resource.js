import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default (router) => {
  Vue.http.interceptors.push((request, next) => {
    request.headers.set('Content-Type', 'application/json; charset=UTF-8')
    if (window.localStorage['token']) {
      request.headers.set('token', window.localStorage['token'])
    }
    if (!request.timeout || request.timeout === 0) {
      // 设置请求超时时间
      request.timeout = 3 * 60 * 1000
    }
    // store.dispatch('showLoading')

    next((response) => {
      let {data, status, statusText} = response
      // if (typeof data === 'string') data = JSON.parse(data)
      // let {code, message} = data || {code: 1, message: data}
      if (status !== 200) {
        let message = '加载出错数据，请联系系统管理员！<br/>错误代码：' + status + '，  错误信息：' + statusText
        alert(message)
      } else {
        ({result: response.data = data} = data)
      }
    })
  })
}
