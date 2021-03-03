<template>
  <div class="bottom-chart" v-if="option">
    <div class="bc-detal">
      <font>{{option.title}}</font>
      <span>{{option.title_count}}</span>
    </div>
    <dv-charts class="bc-chart" :option="option" />
  </div>
</template>

<script>
export default {
  name: 'Bottom2',
  props: [''],
  data () {
    return {
      timer: null,
      option: {
        modelname:'整件复核',
        title: '整件复核：',
        title_count: '756',
        series: [
          {
            type: 'pie',
            data: [
              { name: '张思', value: 983 },
              { name: '张柳', value: 352 },
              { name: '张航', value: 655 },
              { name: '张扎\n根', value: 454 },
              { name: '张翰', value: 52 }
            ],
            radius: ['35%', '65%'],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{name}\n{value}',
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
      this.$api.post('/datav', { method: 'Bottom', parameter: 'wholeChecking', type: 'option' }).then(resp => {
        this.option = resp.option
      })
    }
  }
}
</script>
