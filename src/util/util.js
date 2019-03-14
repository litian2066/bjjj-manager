const install = function (Vue, options = {}) {
  Vue.mixin({
    mounted () {
      let ready = this.$options.ready
      if (ready) {
        this.$nextTick(ready)
      }
    }
  })

  Vue.prototype.$go = function (path) {
    this.$router.replace(path)
  }

  Vue.prototype.$removeItem = function (array, item) {
    let index = array.indexOf(item)
    if (index !== -1) {
      this.$removeIndex(index)
    }
  }

  Vue.prototype.$removeIndex = function (array, index) {
    if (!isNaN(index) && index > -1) {
      array.splice(index, 1)
    }
  }

  // 自定义方法 判断非空
  Vue.prototype.isNotEmpty = function (val) {
    return val !== null && val !== '' && val !== undefined && val !== 'null'
  }

  // 自定义方法 判断空
  Vue.prototype.isEmpty = function (val) {
    return val === null || val === '' || val === undefined || val === 'null'
  }

  // 自定义方法 判断数组为空
  Vue.prototype.isNotEmptyArray = function (val) {
    return val !== null && val !== '' && val !== undefined && val !== 'null' && val.length > 0
  }

  // toString
  Vue.filter('toString', function (val) {
    return val.toString()
  })

  // 拼接两个字符串
  Vue.filter('append', function (val, first, second) {
    return first + '-' + second
  })

  // 保留六位小数
  Vue.filter('last6', function (val) {
    if (!isNaN(val)) {
      return val.toFixed(6)
    }
  })

  // 保留两位小数
  Vue.filter('last2', function (val) {
    if (!isNaN(val)) {
      return val.toFixed(2)
    }
  })
}
module.exports = { install }
