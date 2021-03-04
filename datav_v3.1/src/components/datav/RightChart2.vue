<template>
  <div class="right-chart">
      <div class="rc-header">{{config.modelname}}</div>
      <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'RightChart2',
  data () {
    return {
      timer: null,
      config: {
        modelname: '库区使用率',
        title: '库区使用率',
        title_count: 'null',
        data: [
          ['库区使用率', '10%'],
          ['库区使用率', '10%'],
          ['库区使用率', '10%'],
          ['库区使用率', '10%'],
          ['库区使用率', '10%'],
          ['库区使用率', '10%'],
          ['库区使用率', '10%'],
          ['库区使用率', '10%'],
          ['库区使用率', '10%']
        ],
        align: ['left'],
        columnWidth: [160],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
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
      this.$api.post('/datav', { type: 'scrollBoard', parameter: 'WarehouseUsage', config: 'config' }).then(resp => {
        this.config = resp.config
      })
    }
  }
}
</script>
