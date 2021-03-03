<template>
  <div class="left-chart">
    <dv-decoration-2 style="height: 10px;" />
    <div class="lc-header"><b>{{config.title}}</b><span>{{config.title_count}}</span><font>件</font></div>
    <dv-capsule-chart class="lc-chart" :config="config" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart2',
  props: [''],
  data () {
    return {
      timer: null,
      config: {
        modelname: '验收总数',
        title: '验收总数',
        title_count: '1256',
        data: [
          { name: '验收员A', value: 78 },
          { name: '验收员B', value: 54 },
          { name: '验收员C', value: 123 },
          { name: '验收员D', value: 167 },
          { name: '验收员E', value: 77 }
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
      this.$api.post('/datav', { method: 'Left', parameter: 'totalacceptance', type: 'config'}).then(resp => {
        this.config = resp.config
      })
    }
  }
}
</script>
