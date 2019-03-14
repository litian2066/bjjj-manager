<style scoped>
  /*卫计委项目经费填报列表页面*/
  .title-area {
    border-bottom: 1px solid #dddddd;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
  .title {
    font-family: Microsoft YaHei !important;
    font-weight: 700;
    font-size: 18px;
    color: #F96;
  }
  .content-box {
    padding: 20px;
    border: 1px solid #dddddd;
    box-shadow: 3px 2px 3px #dddddd;
    -webkit-box-shadow: 3px 2px 3px #dddddd;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
  }
</style>
<template>
    <div class="content-box">
      <el-row>
        <el-col :span="24">
          <el-form :inline="true" :model="queryParam" class="demo-form-inline">
            <el-form-item label="填报年份">
              <el-select v-model="queryParam.year" placeholder="请选择填报年份">
                <el-option v-for="item in this.$root.yearList" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="项目类别">
              <el-select v-model="queryParam.type" placeholder="请选择项目类别">
                <el-option v-for="item in dicList.typeList" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="项目状态">
              <el-select v-model="queryParam.status" placeholder="请选择项目状态">
                <el-option v-for="item in dicList.statusList" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain @click="findItemsList">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-dropdown>
                <el-button type="primary" plain>
                  更多操作<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item >新增项目</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                  <el-dropdown-item>导出绩效目标</el-dropdown-item>
                  <el-dropdown-item>导出项目书</el-dropdown-item>
                  <el-dropdown-item>上报</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain @click="itemEditPage">编辑跳转</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="24">
          <el-table
            :data="itemsList"
            style="width: 100%"
            @selection-change = "tableSelection"
            show-summary
            ref="itemTable"
            height="550">

            <el-table-column
              type="selection"
              width="55">
            </el-table-column>

            <el-table-column
              type="index">
            </el-table-column>

            <el-table-column
              prop="name"
              label="项目名称"
              width="250">
            </el-table-column>

            <el-table-column
              prop="status"
              label="项目状态"
              width="120">

            </el-table-column>

            <el-table-column
              prop="itemStatus"
              label="项目审核状态"
              width="120">
            </el-table-column>

            <el-table-column
              prop="saveStatus"
              label="保存状态"
              width="120">
            </el-table-column>

            <el-table-column
              prop="office"
              label="代报局机关"
              width="220">
            </el-table-column>

            <el-table-column
              prop="sum"
              label="合计"
              width="120">
              <template slot-scope="scope">{{scope.row.sum | last6}}</template>
            </el-table-column>

            <el-table-column
              prop="czsum"
              label="财政拨款"
              width="120">
              <template slot-scope="scope">{{scope.row.czsum | last6}}</template>
            </el-table-column>

            <el-table-column
              prop="qtsum"
              label="其他资金"
              width="120">
              <template slot-scope="scope">{{scope.row.qtsum | last6}}</template>
            </el-table-column>

            <el-table-column
              label="操作">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
</template>
<script scoped>
export default {
  data () {
    return {
      queryParam: {
        year: '2018',
        orgId: '5'
      },
      dicList: {
        typeList: [
          {id: '0', name: '保障类项目'},
          {id: '1', name: '计划类项目'}
        ],
        statusList: [
          {id: '0', name: '纳入预算'},
          {id: '1', name: '备选'},
          {id: '2', name: '申请追加'},
          {id: '3', name: '统筹安排'}
        ]
      },
      itemsList: [],
      itemSelection: []
    }
  },
  methods: {
    findItemsList () {
      this.$http.post('budget/item/findItemsList', this.queryParam).then(response => {
        this.itemsList = response.data
      })
    },
    tableSelection (item) {
      this.itemSelection = item
      // this.$refs.itemTable.toggleRowSelection(item)
    },
    itemEditPage () {
      console.log(this.itemSelection)
      if (!this.isNotEmptyArray(this.itemSelection) || this.itemSelection.length !== 1) {
        this.$alert('请选择一条数据', {
          type: 'error'
        })
      }
      window.sessionStorage.setItem('item', JSON.stringify(this.itemSelection[0]))
      this.$go('/home/budget/item-before')
    }
  },
  mounted () {
    this.findItemsList()
  }
}
</script>
