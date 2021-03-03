<template>
  <div class="left-chart">
    <dv-decoration-2 style="height: 10px;" />
    <div class="lc-header"><b>{{config.title}}</b><span>{{config.title_count}}</span><font>件</font></div>
    <dv-capsule-chart class="lc-chart" :config="config" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart3',
  props: [''],
  data () {
    return {
      timer: null,
      config: {
        modelname: '上架总数',
        title: '上架总数',
        title_count: '98995',
        data: [
          { name: '保管员A', value: 78 },
          { name: '保管员B', value: 54 },
          { name: '保管员C', value: 123 },
          { name: '保管员D', value: 167 },
          { name: '保管员E', value: 77 }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: '  ',
        showValue: true
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
      this.$api.post('/datav', { method: 'Left', parameter: 'totalShelves', type: 'config' }).then(resp => {
        this.config = resp.config
      })
    }
  }
}
</script>
