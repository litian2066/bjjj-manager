<style scoped>
  /*卫计委项目经费填报预先页面*/
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
  * {
    font-size: 14px;
    font-family: "microsoft yahei";
    color: #333;
  }
  .item-header {
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
  }
  .header-title {
    font-family: Microsoft YaHei !important; font-weight: 700; font-size: 20px; color: #F96;
  }
  .text-right {
    text-align: right;
  }
  .header-row {
    height: 40px;
    line-height: 40px;
  }
  .text-center {
    text-align: center;
  }
  .w {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .items-block {
    height: 432px;
    position: relative;
    margin: 90px 0 30px;
  }

  .items-steps .item {
    position: absolute;
    top: 0;
    width: 156px;
    height: 186px;
    background-color: #fff;
    border-radius: 5px;
    transform: translateX(-78px);
    z-index: 1;
    box-shadow: 0 0 5px 2px rgba(135, 135, 135, 0.15);
    backface-visibility: hidden;
    cursor: pointer;
  }

  .items-steps .item.even {
    top: auto;
    bottom: 0;
  }
  .items-steps .item.even:after {
    top: -7px;
    bottom: auto;
  }

  .items-steps .item:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    z-index: -1;
  }

  .items-steps .item:after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    left: 50%;
    bottom: -7px;
    box-shadow: 0 0 5px 2px rgba(135, 135, 135, 0.15);
    background-color: #fff;
    z-index: -2;
    transform: translateX(-50%) rotateZ(135deg);
  }

  .items-steps .item:nth-child(1), .items-steps .step:nth-child(1) {
    left: 75px;
  }

  .items-steps .item:nth-child(2), .items-steps .step:nth-child(2) {
    left: 345px;
  }

  .items-steps .item:nth-child(3), .items-steps .step:nth-child(3) {
    left: 720px;
  }

  .items-steps .item:nth-child(4), .items-steps .step:nth-child(4) {
    left: 1125px;
  }

  .steps-block {
    position: absolute;
    height: 24px;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .steps-block:before {
    content: "";
    position: absolute;
    width: 99.4%;
    height: 8px;
    background-color: #E9E9E9;
    border-radius: 2px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .step {
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    transform: translateX(-12px);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, .2);
  }
  .step:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFAE12;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all .3s ease;
  }
  .items-steps  .item:nth-child(1), .items-steps .step:nth-child(1) {
    left: 75px;
  }
  .items-steps .item:nth-child(2), .items-steps .step:nth-child(2) {
    left: 345px;
  }
  .items-steps .item:nth-child(3), .items-steps .step:nth-child(3) {
    left: 600px;
  }

  .items-steps .item:nth-child(4), .items-steps .step:nth-child(4) {
    left: 840px;
  }

  .items-steps .item:nth-child(5), .items-steps .step:nth-child(5) {
    left: 1100px;
  }

  .items-steps .steps-block:after {
    content: "";
    position: absolute;
    width: 26px;
    height: 38px;
    background: url(./../../../assets/item/items-steps-arrow.png) no-repeat center;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  /*.items-block .item:hover*/
  .items-steps .item.even.cur {
    margin-bottom: -10px;
  }

  .items-steps .item.cur {
    margin-top: -10px;
  }

  .items-steps .step.cur:before {
    width: 100%;
    height: 100%;
  }

  .rollInLeft {
    animation-name: rollInLeft;
  }

  .transition {
    transition: all .3s ease;
  }
  .items-steps .img-block {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #fff;
    margin-top: -35px;
    position: relative;
    transition-duration: 1s;
  }

  img {
    border: none;
  }

  .img-block img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  .img-block {
    margin: 0 auto;
    display: block;
  }

  .items-steps .img-block img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .items-steps .img-block:before {
    content: "";
    width: 100%;
    height: 100%;
    box-shadow: 0 0 5px 2px rgba(135, 135, 135, 0.15);
    position: absolute;
    z-index: -2;
    border-radius: 50%;
    left: 0;
    top: 0;
  }
  .items-steps .item:hover .img-block {
    transform: rotateZ(360deg);
  }
  .items-steps .item-title {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
  }
  .items-steps .item-p {
    color: #999;
    text-align: center;
    margin-bottom: 5px;
  }
  .items-steps .item-p-error {
    color: red;
    font-weight: bold;
  }
  .items-steps .item.even .item-title {
    margin-top: 15px;
  }

  .items-steps .item.even .img-block {
    margin: 0 0 0 -35px;
    position: absolute;
    left: 50%;
    bottom: -35px;
  }
  .items-steps .item-col2 {
    width: 220px;
    transform: translateX(-110px);
  }
  .items-steps .hidden {
    display: none;
  }
</style>
<template>
    <div class="content-box">
      <el-row class="item-header">
        <el-col :span="21" class="header-row">
          <span class="header-title">项目经费填报({{item.name}})</span>
        </el-col>
        <el-col :span="3" class="text-right header-row">
          <el-button type="primary" plain @click="itemList">返回项目信息页面</el-button>
        </el-col>
      </el-row>
      <el-row class="w">
        <el-col :span="24" class="text-center items-steps">
          <div class="items-block">
            <div class="transition item hidden animated" ani-name="rollInLeft"
                 ani-delay=".15s" index="0" @mouseenter="addCur($event)" @mouseleave="removeCur($event)"  @click="itemWrappage">
              <div class="img-block">
                <img src="./../../../assets/item/items-steps-engineer.png" alt="">
              </div>
              <p class="item-title">项目封皮信息修改</p>
              <p class="item-p">点击前往封皮页面</p>
              <p class="item-p">修改封皮信息</p>
            </div>
            <div class="transition item even hidden animated item-col2" ani-name="rollInLeft"
                 ani-delay=".3s" index="1" @mouseenter="addCur($event)" @mouseleave="removeCur($event)">
              <div class="img-block">
                <img src="./../../../assets/item/items-steps-designer.png" alt="">
              </div>
              <p class="item-title">项目绩效目标信息填报</p>
              <p class="item-p">点击前往项目绩效目标页面</p>
              <p class="item-p">修改项目绩效目标信息</p>
            </div>
            <div class="transition item hidden  animated item-col2" index="2" ani-name="rollInLeft"
                 ani-delay=".7s" @mouseenter="addCur($event)" @mouseleave="removeCur($event)">
              <div class="img-block">
                <img src="./../../../assets/item/items-steps-manager.png" alt="">
              </div>
              <p class="item-title">子项目以及科目信息填报</p>
              <p class="item-p">点击前往子项目以及科目页面</p>
              <p class="item-p">修改子项目以及科目信息</p>
            </div>

            <div class="transition item even hidden  animated item-col2" index="3" ani-name="rollInLeft"
                 ani-delay="1s"  @mouseenter="addCur($event)" @mouseleave="removeCur($event)">
              <div class="img-block">
                <img src="./../../../assets/item/items-steps-front.png" alt="">
              </div>
              <p class="item-title">报告上传</p>
              <p class="item-p">200万以上项目必须上传可行性报告、评审意见、项目实施方案</p>
              <p class="item-p">这三类不全的项目不能上报</p>
              <p class="item-p item-p-error">低于200万的项目请跳过此步</p>
            </div>

            <div class="transition item hidden  animated" index="4" ani-name="rollInLeft"
                 ani-delay="1.3s" @mouseenter="addCur($event)" @mouseleave="removeCur($event)">
              <div class="img-block">
                <img src="./../../../assets/item/items-steps-officer.png" alt="">
              </div>
              <p class="item-title">汇总查询</p>
              <p class="item-p">点击前往汇总查询页面</p>
            </div>

            <div class="steps-block">
              <div class="step"></div>
              <div class="step"></div>
              <div class="step"></div>
              <div class="step"></div>
              <div class="step"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>
<script scoped>
export default {
  data () {
    return {
      item: JSON.parse(window.sessionStorage['item']),
      center: true
    }
  },
  methods: {
    itemList () {
      this.$go('/home/budget/item-wjw')
    },
    addCur ($event) {
      let item = $event.target
      item.classList.add('cur')
      let index = item.getAttribute('index')
      let stepsBlock = document.querySelector('.steps-block')
      stepsBlock.children[index].classList.add('cur')
    },
    removeCur ($event) {
      let item = $event.target
      item.classList.remove('cur')
      let index = item.getAttribute('index')
      let stepsBlock = document.querySelector('.steps-block')
      stepsBlock.children[index].classList.remove('cur')
    },
    init () {
      let itemList = document.querySelectorAll('.item')
      for (let i = 0; i < itemList.length; i++) {
        let item = itemList[i]
        // ani-name="rollInLeft" ani-delay="1.3s"
        let animateName = item.getAttribute('ani-name')
        let aniDelay = item.getAttribute('ani_delay')
        item.classList.remove('hidden')
        item.classList.add(animateName)
        item.style.cssText = '"animation-delay": ' + aniDelay + ''
      }
    },
    itemWrappage () {
      this.$go('/home/budget/item-wrappage')
    }
  },
  mounted () {
    this.init()
  }
}
</script>
