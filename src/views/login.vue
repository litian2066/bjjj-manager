<template>
  <div style="background-color: #fff;">
    <div class="w">
      <div id="logo">
        <a href="//www.jd.com/" clstag="pageclick|keycount|20150112ABD|45">

        </a>
        <span></span>
      </div>
    </div>
    <div id="content">
      <div class="login-wrap">
        <div class="w">
          <div class="login-form">

            <div class="login-tab login-tab-r">
              <a href="javascript:void(0)" clstag="pageclick|keycount|201607144|2" class="checked">账户登录</a>
            </div>
            <div class="login-box" style="display: block;">
              <div class="mt tab-h"></div>
            </div>
            <div class="msg-wrap" v-show="error">
              <div class="msg-error"><b></b>{{errorMessage}}</div>
            </div>
            <div>
              <form class="form-horizontal" role="form">
                <div class="form-group">
                  <div class="input-group col-sm-10 col-sm-offset-1">
                    <span class="input-group-addon"><b class="glyphicon glyphicon-user"></b></span>
                    <input type="text"  class="form-control" id="displayName" v-model="userSystem.displayName" placeholder="用户名">
                  </div>
                </div>
                <div class="form-group" style="margin-bottom: 25px;">
                  <div class="input-group col-sm-10 col-sm-offset-1">
                    <span class="input-group-addon"><b class="glyphicon glyphicon-lock"></b></span>
                    <input type="password" id="password" class="form-control"  v-model="userSystem.password" placeholder="密码">
                  </div>
                </div>

                <div class="form-group" >
                  <div class="input-group col-sm-10 col-sm-offset-1">
                    <!-- <input type="button" class="btn-fa" value="登录"/> -->
                    <button class="btn-fa" type="button" @click="login">登&nbsp;&nbsp;&nbsp;录</button>
                  </div>
                </div>
                <div class="safe" style="margin-bottom: 10px;float: right;margin-right: 15px;">
                <span class="forget-pw-safe"  style="font-family: Microsoft YaHei !important;font-size: 15px;">
                  <a href="#"  target="_blank">忘记密码</a>
                </span>
                </div>
              </form>
            </div>

          </div>
        </div>
        <div class="login-banner" style="background-color: #06c;">
          <div class="w">
            <div id="banner-bg" clstag="pageclick|keycount|20150112ABD|46" class="i-inner" style="background: url(./../../static/img/login/loginbac.png) 0px 0px no-repeat;background-color: #06c;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 页面尾部部分 -->
    <div class="footer">
      <div class="f-logo">
          <a href="##">
            <!--<img src="${path }/img/f-logo.jpg" height="53" alt="">-->
          </a>
      </div>
      <div class="f-nav">
        <p>
          <a href="http://www.greatsoft.net">首页</a>
          <a href="http://www.greatsoft.net/Content/index/id/511">关于冠新</a>
          <a href="http://www.greatsoft.net/Content/index/id/543">产品中心</a>
          <a href="http://www.greatsoft.net/Content/index/id/551">解决方案</a>
          <a href="http://www.greatsoft.net/Content/index/id/551">成功案例</a>
          <a href="http://www.greatsoft.net/Content/index/id/564">投资者关系</a>
          <a href="http://www.greatsoft.net/Joins/index/id/559">加入冠新</a>
        </p>
        <p>冠新软件股份有限公司        版权所有    京ICP备 10201868  &nbsp;&nbsp;</p>
      </div>
      <div class="f-ewm">
        <p><i>扫一扫关注冠新软件</i></p>
        <!--<img src="/img/qrcode.png" height="81" alt="">-->
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import 'bootstrap/v3/css/bootstrap.css'
import 'bootstrap/v3/js/bootstrap.js'
// import 'bootstrap/v3/js/bootstrap.js'
export default {
  data () {
    return {
      error: false,
      errorMessage: '',
      userSystem: {
        displayName: '赵兰',
        password: '123456'
      }
    }
  },
  methods: {
    login () {
      if (!this.userSystem.displayName) {
        this.error = true
        this.errorMessage = '用户名不能为空'
        return
      }
      if (!this.userSystem.password) {
        this.error = true
        this.errorMessage = '密码不能为空'
        return
      }
      this.$http.post('login/login', this.userSystem).then(response => {
        let data = response.data
        if (data) {
          let users = response.data.users
          let menus = response.data.menus
          let org = response.data.org
          let token = users.token
          window.localStorage['token'] = token
          window.sessionStorage.setItem('token', JSON.stringify(token))
          window.localStorage['displayName'] = users.displayName
          window.localStorage['password'] = users.password
          window.sessionStorage.setItem('menus', JSON.stringify(menus))
          window.localStorage['menus'] = menus
          window.sessionStorage.setItem('userInfo', JSON.stringify(users))
          window.sessionStorage.setItem('org', JSON.stringify(org))
          this.$root.menus = menus
          this.$root.userInfo = users
          this.$root.org = org
          this.$go('/home/index')
        }
        // lse if (data.code === 1) {
        //   this.error = true
        // e this.errorMessage = data.message
        //   this.userSystem = {}
        // }
      })
    },
    speak () {
    }
  },
  mounted: function () {
    this.speak()
  }
}
</script>

<style lang="css" scoped>
@import "./../../static/css/login.css";

</style>
