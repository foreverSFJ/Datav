<template>
  <div class="bottom1" v-if="option">
    <div class="b1-header">{{option.men}}<span>{{option.num}}</span></div>
    <dv-charts class="b1-chart" :option="option" />   
  </div>
  
  
</template>

<script>
export default {
  name: 'getLeftsDemo',
  props: [''],
  data () {
    return {
      timer: null,
      option: {
        memo: '整件拣货',
        men: '整件拣货：',
        num: '996',
        series: [
          {
            type: 'pie',
            data: [
              { name: '张思', value: 983 },
              { name: '张柳', value: 352 },
              { name: '张航', value: 655 },
              { name: '张扎根', value: 454 },
              { name: '张翰', value: 52 }
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
            },
            showOriginValue: true
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
      this.$api.post('/newdatav', { method: 'getLeftsDemo' }).then(resp => {
        this.option = resp.option
      })
    }
  }
}
</script>

<style lang="less">
.bottom1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .b1-header {
    text-align: left;;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      text-align: right;
    }
  }

  .b1-details {
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }

  .b1-chart {
    // flex: 1;
    font-size: 5px;
  }
}
</style>
