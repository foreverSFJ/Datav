<template>
  <div class="left-chart">
    <dv-decoration-2 style="height: 10px;" />
    <div class="lc-detal">
      <b>{{config.title}}</b>
      <span>{{config.title_count}}</span>
      <font>件</font>
    </div>
    <dv-capsule-chart class="lc-chart" :config="config" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart1',
  props: [''],
  data () {
    return {
      timer: null,
      config: {
        modelname: '收货总数',
        title: '收货总数',
        title_count: '999',
        data: [
          {name: '收货员A', value: 167 },
          {name: '收货员B', value: 67 },
          {name: '收货员C',  value: 123 },
          {name: '收货员D', value: 55 },
          {name: '收货员E', value: 98 }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
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
      this.$api.post('/datav', { type: 'capsule', parameter: 'totalReceive', config: 'config'}).then(resp => {
        this.config = resp.config
      })
    }
  }
}
</script>