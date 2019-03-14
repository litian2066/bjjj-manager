<style scoped>
  /*卫计委项目经费填报列表页面*/
  *{
    font-size: 14px;
    font-family: "microsoft yahei";
    color: #333;
  }
</style>
<template>
    <div class="content-box">
      <el-row class="item-header">
        <el-col :span="21" class="header-row">
          <span class="header-title">项目封皮信息修改({{item.name}})</span>
        </el-col>
        <el-col :span="3" class="text-right header-row">
          <el-button type="primary" plain @click="itemList">返回项目信息页面</el-button>
        </el-col>
      </el-row>
    </div>
</template>
<script scoped>
export default {
  data () {
    return {
      item: JSON.parse(window.sessionStorage['item'])
    }
  },
  methods: {
    itemList () {
      this.$go('/home/budget/item-wjw')
    }
  },
  mounted () {
  }
}
</script>
