<template>
  <div class="bottom-chart" v-if="option">
    <div class="bc-header">{{option.modelname}}</div>
    <dv-charts class="bc-chart" :option="option" />
  </div>
</template>

<script>
export default {
  name: 'Bottom2',
  data () {
    return {
      timer: null,
      option: {
        modelname: '出库统计',
        title: '出库统计',
        title_count: '996',
        series: [
          {
            type: 'pie',
            data: [
              { name: '', value: 983 },
              { name: '张大陕', value: 352 },
              { name: '张航', value: 655 },
              { name: '张扎根', value: 454 },
              { name: '张翰', value: 523 }
            ],
            radius: 50,
            insideLabel: {
              show: true
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{name}\n{value}',
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
      this.$api.post('/datav', { method: 'Bottom', parameter: 'outStatistics', type: 'option' }).then(resp => {
        this.option = resp.option
      })
    }
  }
}
</script>