<style scoped>
.header{
  padding: 0px;
  position: fixed;
  width: 100%;
}
.brand {
  display: inline-block;
  text-decoration: none;
  color: #fd4c5d;;
  font-size: 18px;
  /*line-height: 46px;*/
  /*color: #fd4c5d;*/
  font-weight: bold;
}
.brand:hover {
  color: #fd4c5d !important;
}
.el-menu--horizontal > .el-submenu:focus .el-submenu__title, .el-menu--horizontal > .el-submenu:hover .el-submenu__title {
  color: #333 !important;
  font-weight: bold !important;
}
</style>
<template>
  <el-container>
    <el-header class="header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#fd4c5d;">
        <el-menu-item index="1" class="brand">卫生经济标准指标信息平台</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-header>
    <el-main>

    </el-main>
  </el-container>
</template>
<script scoped>
export default {

}
</script>
