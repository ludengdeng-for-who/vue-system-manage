<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height:290px">
        <div class="inner">
          <img :src="img" />
          <div class="ps">
            <p>ludengdeng</p>
            <p>超级管理员</p>
          </div>
        </div>
        <div class="info-bottom">
          <p>上次登录时间： 2020-1-1</p>
          <p>上次登陆地点： 苏州</p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height:440px; margin-top:20px">
        <el-table :data="tableData">
          <el-table-column
            show-overflow-tooltip
            v-for="(item, index) in tableHeader"
            :key="index"
            :prop="index"
            :label="item"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="top">
        <el-card v-for="item in topData" :key="item.name" shadow="hover">
          <div class="top-info">
            <i class="icon" :class="`el-icon-${item.icon}`"></i>
            <div class="details">
              <p class="num">￥{{ item.num }}</p>
              <p class="txt">{{ item.txt }}</p>
            </div>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <echart
          :chartData="echartData.order"
          style="height:280px;margin-bottom:20px"
        ></echart>
      </el-card>
      <div class="bottom">
        <el-card shadow="hover" class="bottom-cards">
          <echart :chartData="echartData.user" style="height:260px"></echart>
        </el-card>
        <el-card shadow="hover" class="bottom-cards">
          <echart
            :chartData="echartData.video"
            style="height:260px"
            :testData="111"
          ></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import echart from '../../components/ecahrts'
export default {
  components: {
    echart
  },
  data() {
    return {
      img: require('../../assets/images/mm.jpg'),
      topData: [],
      tableData: [],
      tableHeader: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      //图表数据
      echartData: {
        //折线图
        order: {
          xData: [],
          series: []
        },
        //用户图
        user: { xData: [], series: [] },
        //视频图
        video: {
          series: []
        }
      }
    }
  },
  methods: {
    getData() {
      this.$http.get('/home/getData').then(res => {
        res = res.data
        this.topData = res.data.topDatas
        this.tableData = res.data.tableData
        // 订单折线图
        const order = res.data.orderData
        this.echartData.order.xData = order.date
        // 取出键值
        let keyArray = Object.keys(order.data[0])
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key === 'wechat' ? '小程序' : key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        //用户柱状图
        this.echartData.user.xData = res.data.userData.map(item => item.date)
        this.echartData.user.series.push({
          name: '新增用户',
          data: res.data.userData.map(item => item.new),
          type: 'bar'
        })
        this.echartData.user.series.push({
          name: '活跃用户',
          data: res.data.userData.map(item => item.active),
          type: 'bar'
        })
        //视频饼图
        this.echartData.video.series.push({
          data: res.data.videoData,
          type: 'pie'
        })
      })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/home';
</style>
