<template>
  <div class="bottom4">
    <div class="b4-header">{{option.men}}<span>{{option.num}}</span></div>
    <dv-charts class="b4-chart" :option="option" />
  </div>
</template>

<script>
export default {
  name: 'TopRightCmp',
  data () {
    return {
      timer: null,
      option: {
        memo: '',
        men: '散件复核：',
        num: '2996',

        xAxis: {
          type: 'category',
          data: ['张思', '张柳', '张航'],
          axisLine: {  //坐标轴线的相关设置
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {  //坐标轴标签的相关设置
            style: {
              fill: '#999'
            }
          },
          axisTick: {  //坐标轴刻度的相关设置
            show: true
          }
        },
        yAxis: {
          type: 'bar',
          data: 'value',
          splitLine: { //坐标轴刻度的相关设置
            show: false
          },

          axisLine: { //坐标轴线的相关设置
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {  //坐标轴标签的相关设置
            show: false,
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          },
          // min: 0
        },

        series: [
          {
            // name: '收费系统',
            
            data: [69, 13.5, 35],
            type: 'bar',
            barStyle: {
              fill: 'red'
            }
          }
        ]
      }
    }
  },

  mounted () {
    this.getdata()

    setInterval(() => {
      this.getdata()
    }, 600000)
  },

  destroyed () {
    clearInterval(this.timer)
  },

  methods: {
    getdata () {
      this.$api.post('/newdatav', { method: 'Bottom4' }).then(resp => {
        this.option = resp.option
      })
    }
  }
}
</script>


<style lang="less">
.bottom4 {
  width: 100%;
  height: 100%;
  position: relative;

  .b4-header{
    text-align: center;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 30px;
      margin-left: 20px;
    }
  };

  .b4-chart {
    flex: 1;
    padding: -10px;
    // width: 100%;
    // height: 80%;
  }
}
</style>
