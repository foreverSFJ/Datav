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
  name: 'Bottom3',
  props: [''],
  data () {
    return {
      timer: null,
      config: {
        modelName: '散件拣货',
        title: '散件拣货：',
        title_count: '996',
        data: [
              { name: '张思', value: 983 },
              { name: '张柳', value: 352 },
              { name: '张航', value: 655 },
              { name: '张扎根', value: 454 },
              { name: '张翰', value: 52 }
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
      this.$api.post('/datav', { method: 'Bottom', parameter: 'partPicking', type: 'config' }).then(resp => {
        this.config = resp.config
      })
    }
  }
}
</script>
