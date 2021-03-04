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
  name: 'RightChart2',
  props: [''],
  data () {
    return {
      timer: null,
      option: {
        modelname: '库内业务',
        title: '业务总数',
        title_count: '669',
        series: [
          {
            type: 'pie',
            data: [
              { name: "移位上架", value: 20 },
              { name: '移位下架', value: 30 },
              { name: '差异入库', value: 50 },
              { name: '差异出库', value: 80 },
              { name: '报溢', value: 80 },
              { name: '报损', value: 80 }
            ],
            radius: '50%',
            insideLabel: {
              show: true
            },
            outsideLabel: {
              labelLineEndLength: 5,
              formatter: '{name}\n{value}',
              style: {
                fontSize: 10,
                fill: '#fff'
              },
              show: true,
            },
            roseType: true,
            roseSort: true
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
      this.$api.post('/datav', { type: 'pie', parameter: 'internalBusiness', config: 'option' }).then(resp => {
        this.option = resp.option
      })
    }
  }
}
</script>