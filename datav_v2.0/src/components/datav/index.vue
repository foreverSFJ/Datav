<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left">欧尚聚创技术支持:<a :href="config.adder">{{config.adder}}</a></div>
        <div class="mh-middle">{{config.modelName}}</div>
        <div class="mh-right">
         <dv-border-box-2 class = "index-time">{{config.time}}</dv-border-box-2>
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">

          <Left-Chart-1 />
          <Left-Chart-2 />
          <Left-Chart-3 />

        </dv-border-box-3>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container">

              <Center-Cmp />

            </dv-border-box-3>

            <div class="rmctc-right-container">
              <dv-border-box-3 class="rmctc-chart-1">

                <Right-Chart-1 />

              </dv-border-box-3>

              <dv-border-box-4 class="rmctc-chart-2">

                <Right-Chart-2 />

              </dv-border-box-4>
            </div>
          </div>

          <dv-border-box-4 class="rmc-bottom-container">

              <Bottom-Charts-1 />
              <div><dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" /></div>
              <Bottom-Charts-2 />
              <div><dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" /></div>
              <Bottom-Charts-3 />
              <div><dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" /></div>
              <Bottom-Charts-4 />

          </dv-border-box-4>
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
import BottomCharts4 from './Bottom4'

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
    BottomCharts4
  },

  
  data () {
    return {
      config: {
        modelName: '智慧物流调度中心',
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
      this.$api.post('/newdatav', { method: 'index' }).then(resp => {
        this.config = resp.config
      })
    }
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 20px;
      color: rgb(1,134,187);

      a:visited {
        color: rgb(1,134,187);
      }
    }

    .mh-middle {
      font-size: 30px;
    }

    .mh-left, .mh-right {
      width: 450px;
    }
  }

  .main-container {
    height: calc(~"100% - 80px");

    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 65%;
    display: flex;
  }

  .rmctc-left-container {
    width: 65%;
  }

  .rmctc-right-container {
    width: 35%;
  }

  .rmc-bottom-container {
    height: 35%;
  }

  .rmctc-chart-1, .rmctc-chart-2 {
    height: 50%;
  }

  .index-time{
    width: 120px; 
    height: 50px; 
    line-height: 50px; 
    text-align:center;
    margin-left:200px;
  }
}
</style>
