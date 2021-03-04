<template>
  <div class="bottom-chart">
    <div class="bc-detal">
      <font>{{config.title}}</font>
      <span>{{config.title_count}}</span>
    </div>
    <dv-conical-column-chart class="bc-chart" :config="config" />   
  </div>
</template>

<script>
export default {
  name: 'Bottom1',
  props: [''],
  data () {
    return {
      timer: null,
      config: {
        modelname: '整件拣货',
        title: '整件拣货：', 
        title_count: '996',
        data: [
              { name: '张思', value: 10 },
              { name: '张柳', value: 17 },
              { name: '张航', value: 100 }
            ],
        showValue: true,
        fontSize: 12,
        columnColor: 'rgba(0, 194, 255, 0.4)'
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
      this.$api.post('/datav', { type: 'conicalColumn', parameter: 'wholePicking', config: 'config'}).then(resp => {
        this.config = resp.config
       })
    }
  }
}
</script>
