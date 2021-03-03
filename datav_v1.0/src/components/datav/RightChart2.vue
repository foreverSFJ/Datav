<template>
  <div class="right-chart-2">
    <div class="rc1-header">{{option.memo}}</div>

    <div class="rc1-chart-container">
      <div class="left">
        <div class="number"><span>{{option.num}}</span></div>
        <div>{{option.men}}</div>
      </div>

      <dv-charts class="right" :option="option" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightChart2',
  props: [''],
  data () {
    return {
      timer: null,
      option: {
        memo: '',
        men: '',
        num: '',
        series: [
          {
            type: 'pie',
            data: [
              { name: '张三', value: 20 },
              { name: '王五', value: 30 },
              { name: '王柳', value: 50 },
              { name: '张二', value: 80 },
              { name: '张毅', value: 80 }
            ],
            radius: ['45%', '65%'],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{percent}%\n{name}',
              style: {
                fontSize: 14,
                fill: '#fff'
              }
            }
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
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
      this.$api.post('/newdatav', { method: 'RightChart2' }).then(resp => {
        this.option = resp.option
      })
    }
  }
}
</script>

<style lang="less">
.right-chart-2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .rc1-header {
    font-size: 24px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }

  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .number {
      font-size: 34px;
      color: #096dd9;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }

  .right {
    flex: 1;
    padding-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>
