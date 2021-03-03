<template>
  <div class="right-chart-1">
    <div class="left">
      <div class="rc1-header">{{option.modelName}}</div>
      <div class="number"><span>{{option.title_count}}</span></div>
      <div class="title">{{option.title}}</div>
    </div>
    <dv-charts class="right" :option="option" />
  </div>
</template>

<script>
export default {
  name: 'RightChart1',
  props: [''],
  data () {
    return {
      timer: null,
      option: {
        modelName: '库内调整',
        title: '调整总数',
        title_count: '169',
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
            radius: '50%',
            insideLabel: {
              show: true
            },
            outsideLabel: {
              labelLineEndLength: 15,
              formatter: '{name}\n{value}',
              style: {
                fontSize: 12,
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
      this.$api.post('/newdatav', { method: 'RightChart1' }).then(resp => {
        this.option = resp.option
      })
    }
  }
}
</script>


<style lang="less">
.right-chart-1 {
  width: 100%;
  height: 100%;  
  display: flex;

  .left {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .rc1-header {
      padding-top: 5px;
      font-size: 24px;
      font-weight: bold;
      height: 30px;
      line-height: 30px;
    }
      
    .number {
      font-size: 34px;
      color: #096dd9;
      text-align: center;
      font-weight: bold;
      margin: 30px 0;
    }

    .title {
      font-size: 16px;
      text-align: center;
    }
  }

  .right {
    width: 70%;
    height: 100%;
    flex: 1;
  }
}
</style>
