<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left">欧尚聚创技术支持:<a :href="config.adder">{{config.adder}}</a></div>
        <div class="mh-middle">{{config.modelname}}</div>
        <div class="mh-right">
         <dv-border-box-2 class = "index-time">{{config.time}}</dv-border-box-2>
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">
          <div class="left-chart-header">{{config.leftmode}}</div>
          <Left-Chart-1 />
          <Left-Chart-2 />
          <Left-Chart-3 />
        </dv-border-box-3>

        <div class="midd-main-container">
          <dv-border-box-3 class="midd-top-container">
            <Center-Cmp />
          </dv-border-box-3>

          <dv-border-box-4 class="midd-bottom-container">
            <Bottom-Charts-1 />
            <div><dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" /></div>
            <Bottom-Charts-2 />
            <div><dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" /></div>
            <Bottom-Charts-3 />
          </dv-border-box-4>
        </div>

        <div class="right-chart-container">
            <dv-border-box-8 class="right-container-1">
              <Right-Chart-1 />
            </dv-border-box-8>
            <dv-border-box-8 class="right-container-2">
              <Right-Chart-2 />
            </dv-border-box-8>
      </div>
      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>
import LeftChart1 from './LeftChart1'
import LeftChart2 from './LeftChart2'
import LeftChart3 from './LeftChart3'
import CenterCmp from './CenterCmp'
import RightChart1 from './RightChart1'
import RightChart2 from './RightChart2'
import BottomCharts1 from './Bottom1'
import BottomCharts2 from './Bottom2'
import BottomCharts3 from './Bottom3'

export default {
  name: 'DataView',
  props: [''],
  components: {
    LeftChart1,
    LeftChart2,
    LeftChart3,
    CenterCmp,
    RightChart1,
    RightChart2,
    BottomCharts1,
    BottomCharts2,
    BottomCharts3,
  },

  
  data () {
    return {
      config: {
        modelname: '智慧物流调度中心',
        leftmode: '今日入库统计',
        centermode: '出入库总览',
        rightmode: '排名滚动',
        bottommode: '今日出库统计',
        adder: 'https://www.osgc.com.cn/',
        time: '2021-02-26'
      }
    }
  },

  mounted () {
    this.getdata()

    setInterval(() => {
      this.getdata()
    }, 3600000)
  },

  destroyed () {
    clearInterval(this.timer)
  },

  methods: {
    getdata () {
      this.$api.post('/datav', { type: 'Main', parameter: 'index', config: 'config' }).then(resp => {
        this.config = resp.config
      })
    }
  }
}
</script>