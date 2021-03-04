<template >
  <div class="center-cmp">
    <div class="cc-header">
      <dv-decoration-1 style="width:25%;height:50px;" />
      <dv-decoration-7 style="height:30px;">{{main.modelname}}</dv-decoration-7>
      <dv-decoration-1 style="width:25%;height:50px;" />
    </div>

    <div class="cc-details">
      <div >{{main.title}}</div>
      <div class="card" >{{parseInt(main.title_count/1000)}}</div>
      <div class="card">{{parseInt(main.title_count/100)}}</div>
      <div class="card" >{{parseInt(main.title_count/10)}}</div>
      <div class="card" >{{main.title_count%10}}</div>
    </div>

    <div class="cc-main-container">
      <div class="ccmc-left">
        <div class="station-info" >
          {{main.todayout}}<span >{{main.todayout_count}}</span>
        </div>
        <div class="station-info" >
          {{main.todayin}}<span >{{main.todayin_count}}</span>
        </div>
      </div>

      <dv-active-ring-chart class="ccmc-middle" :config="config" />

        <div class="ccmc-right">
        <div class="station-info">
          <span>{{main.yestodayout_count}}</span>{{main.yestodayout}}
        </div>
        <div class="station-info">
          <span>{{main.yestodayin_count}}</span>{{main.yestodayin}}
        </div>
      </div>

      <LabelTag :config="labelConfig" />
    </div>
  </div>
</template>

<script>
import LabelTag from './LabelTag'

export default {
  name: 'CenterCmp',
  props: [''],
  components: {
    LabelTag
  },
  data () {
    return {
      main: {
        modelname: '出入库总览',
        title: '出库总箱数',
        title_count: '0029',
        todayout: '今日出库',
        todayout_count: '156',
        todayin: '今日入库',
        todayin_count: '456',
        yestodayout: '昨日出库',
        yestodayout_count: '123',
        yestodayin: '昨日入库',
        yestodayin_count: '156',
      },
      config: {
        data: [
          { name: '今日出库', value: 156 },
          { name: '今日入库', value: 456 },
          { name: '昨日出库', value: 123 },
          { name: '昨日入库', value: 156 }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        lineWidth: 20,
        radius: '55%',
        activeRadius: '60%',
        showOriginValue: true
      },

      labelConfig: {
        data: ['今日出库', '今日入库', '昨日出库', '昨日入库']
      }
    }
  },

  created () {
    this.getdata()
    this.timer = setInterval(() => {
      this.getdata()
    }, 600000)
  },

  destroyed () {
    clearInterval(this.timer)
  },

  methods: {
    getdata () {
      this.$api.post('/datav', { type: 'Main', parameter: 'CenterCmp', config: 'config_center'}).then(resp => {
        this.main = resp.main
        this.config = resp.config
        this.labelConfig = resp.labelConfig
      })
    }
  }
}
</script>
