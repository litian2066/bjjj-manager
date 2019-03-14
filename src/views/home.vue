<style scoped>
.header{
  padding: 0px;
  /*position: fixed;*/
  width: 100%;
  /*height: 45px !important;*/
}
/* 水平菜单顶层菜单样式 */
/*.el-menu--horizontal>.el-menu-item, .el-menu--horizontal>.el-submenu .el-submenu__title {
  height: 45px !important;
  line-height: 45px !important;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
  border-bottom: 2px solid transparent;
  color: #909399;
}*/
/*!* >符号表示直接孩子，.el-menu--horizontal>.el-submenu .el-submenu_title表示的
是类.el-menu--horizontal元素（这个是顶层菜单el-menu）下的第一层元素（sub-menu）下的标题，
这个标题是放在<i>元素的slot属性中的，从而找到了<i>元素，修改它的样式就可以了 *!
.el-menu--horizontal>.el-submenu .el-submenu__title {
  height: 30px;
  line-height: 30px;
  border-bottom: 2px solid transparent;
}
!* 水平菜单子菜单的标题（注意，标题和菜单项不一样，标题是使用<i slot="title">表示的，需要单独处理），
这里使用.el-submenu>.el-submenu_title定位到子菜单（不是菜单项） *!
.el-menu--horizontal .el-menu .el-submenu>.el-submenu__title {
  float: none;
  height: 23px;
  line-height: 23px;
}
!* 水平菜单子菜单中的所有菜单项 *!
.el-menu--horizontal .el-menu .el-menu-item {
  float: none;
  height: 23px;
  line-height: 23px;
  width: auto;
}*/
.brand {
  display: inline-block;
  text-decoration: none;
  color: #fd4c5d;;
  font-size: 18px;
  font-weight: bold;
}
.brand:hover {
  color: #fd4c5d !important;
}
.el-menu--horizontal > .el-submenu:focus .el-submenu__title, .el-menu--horizontal > .el-submenu:hover .el-submenu__title {
  color: #333 !important;
  font-weight: bold !important;
}
.el-main {
  height: 100%;
  /*padding: 10px 20px;*/
}
.breadcrumb {
  height: 35px;
  line-height: 35px;
}

</style>
<template>
  <el-container>
    <el-header class="header">
      <el-menu class="el-menu-demo" mode="horizontal" active-text-color="#fd4c5d;">
        <el-menu-item index="1" class="brand">卫生经济标准指标信息平台</el-menu-item>
        <template v-if="menus != null && menus.children != null">
          <template v-for="item in menus.children">
            <template v-if="item.children !== null && item.children.length > 0">
              <el-submenu :index="item.id" :key="item.id">
                <template slot="title" >{{item.name}}</template>
                <template v-for="item1 in item.children">
                  <template v-if="item1.children !== null && item1.children.length > 0">
                    <el-submenu :index="item1.id" :key="item1.id">
                      <template slot="title">{{item1.name}}</template>
                      <el-menu-item :key="item2.id" v-for="item2 in item1.children"  :index="item2.id" @click="itemClick(item2)">{{item2.name}}</el-menu-item>
                    </el-submenu>
                  </template>
                  <template v-else>
                    <el-menu-item :index="item1.id" :key="item1.id">{{item1.name}}</el-menu-item>
                  </template>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.id" :key="item.id">{{item.name}}</el-menu-item>
            </template>
          </template>
        </template>

        <el-menu-item style="float: right;" class="quit" @click="loginOut">退出</el-menu-item>
        <el-menu-item style="float: right;" class="quit">{{this.$root.userInfo.name}}</el-menu-item>
        <el-menu-item style="float: right;" class="quit">{{this.$root.org.name}}</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script scoped>
export default {
  data () {
    return {
      activeIndex: 1,
      menus: this.isEmpty(this.$root.menus) ? JSON.parse(window.sessionStorage['menus']) : this.$root.menus
    }
  },
  mounted () {
  },
  methods: {
    itemClick (item) {
      if (item.url) {
        this.$go(item.url)
      }
    },
    loginOut () {
      this.$confirm('是否退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.get('login/loginOut').then(response => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
          window.localStorage.removeItem('token')
          window.localStorage.removeItem('userInfo')
          window.localStorage.removeItem('org')
          window.localStorage.removeItem('menus')
          window.sessionStorage.removeItem('userInfo')
          window.sessionStorage.removeItem('org')
          window.sessionStorage.removeItem('menus')
          this.$go('/login')
        })
      }).catch(() => {
      })
    }
  },
  // watch: {
  //   'this.$root.userInfo.name': function () {
  //     debugger
  //     let userName = this.$root.userInfo.name
  //     this.$root.userInfo.name = this.isEmpty(userName) ? window.sessionStorage['userInfo'].name : userName
  //   }
  // },
  created () {
    console.log('create...')
    this.$root.userInfo = this.isEmpty(this.$root.userInfo) ? JSON.parse(window.sessionStorage['userInfo']) : this.$root.userInfo
    this.$root.org = this.isEmpty(this.$root.org) ? JSON.parse(window.sessionStorage['org']) : this.$root.org
    this.$root.menus = this.isEmpty(this.$root.menus) ? JSON.parse(window.sessionStorage['menus']) : this.$root.menus
  }
}
</script>
