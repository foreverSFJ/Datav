<template>
  <div class="right-chart">
    <div class="left">
      <div class="header">{{option.modelname}}</div>
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
        modelname: '库内调整',
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
      this.$api.post('/datav', { type: 'pie', parameter: 'internalAdjust', config: 'option' }).then(resp => {
        this.option = resp.option
      })
    }
  }
}
</script>