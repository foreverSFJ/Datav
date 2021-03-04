<template>
  <div class="bottom-chart">
      <div class="bc-header">{{config.modelname}}</div>
      <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'Bottom1',
  data () {
    return {
      config: {
        modelname: '库区出库统计',
        title: '库区出库统计',
        title_count: 'null',
        data: [
          ['A库区出库统计', '1256'],
          ['B库区出库统计', '1256'],
          ['C库区出库统出库统出库统计', '1256'],
          ['D库区出库统计', '1256'],
          ['E库区出库统计', '1256'],
          ['F库区出库统计', '1256'],
          ['G库区出库统计', '1256'],
          ['H库区出库统计', '1256'],
          ['I库区出库统计', '1256'] 
        ], 
        columnWidth: [160],
        align: ['left'],
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
      this.$api.post('/datav', { method: 'Bottom', parameter: 'WarehouseOut', type: 'config_scroll' }).then(resp => {
        this.config = resp.config
      })
    }
  }
}
</script>