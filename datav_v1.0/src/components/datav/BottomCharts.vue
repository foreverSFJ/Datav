<template >
  <div class="bottom-charts">
     <div class="bc-chart-item">

      <div class="content" >{{config1.memo}}</div>
      <dv-active-ring-chart :config="config1" />

      <Label-Tag :config="labelConfig" />
    </div>
    <dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="content">{{config2.memo}}</div>
      <dv-active-ring-chart :config="config2" />
      <Label-Tag :config="labelConfig1" />
    </div>

    <dv-decoration-2 class="decoration-2" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="content">{{config3.memo}}</div>
      <dv-active-ring-chart :config="config3" />
      <Label-Tag :config="labelConfig2" />
    </div>

    <dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="content">{{config4.memo}}</div>
      <dv-active-ring-chart :config="config4" />
      <Label-Tag :config="labelConfig3" />
    </div>
  </div>
</template>

<script>
import LabelTag from '@/components/datav/LabelTag.vue'
export default {
  name: 'BottomCharts',
  components: {
    LabelTag
  },
  props: [''],
  data () {
    return {
      timer: null,
      config1: {
        memo: '',
        data: [
          {
            name: '收费站',
            value: 356
          },
          {
            name: '监控中心',
            value: 215
          },
          {
            name: '道路外场',
            value: 90
          },
          {
            name: '其他',
            value: 317
          }
        ],
        color: ['#00baff', '#3de7c9', '#f7f7f7', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config2: {
        data: [
          {
            name: '收费站',
            value: 615
          },
          {
            name: '监控中心',
            value: 322
          },
          {
            name: '道路外场',
            value: 198
          },
          {
            name: '其他',
            value: 80
          }
        ],
        color: ['#00baff', '#3de7c9', '#f7f7f7', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config3: {
        data: [
          {
            name: '收费站',
            value: 452
          },
          {
            name: '监控中心',
            value: 512
          },
          {
            name: '道路外场',
            value: 333
          },
          {
            name: '其他',
            value: 255
          }
        ],
        color: ['#00baff', '#3de7c9', '#f7f7f7', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config4: {
        data: [
          {
            name: '收费站',
            value: 40
          },
          {
            name: '监控中心',
            value: 60
          },
          {
            name: '道路外场',
            value: 20
          },
          {
            name: '其他',
            value: 70
          }
        ],
        color: ['#00baff', '#3de7c9', '#f7f7f7', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      labelConfig: {
        data: ['收费站', '监控中心', '道路外场', '其他']
      },
      labelConfig1: {
        data: ['收费站', '监控中心', '道路外场', '其他']
      },
      labelConfig2: {
        data: ['收费站', '监控中心', '道路外场', '其他']
      },
      labelConfig3: {
        data: ['收费站', '监控中心', '道路外场', '其他']
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
      this.$api.post('/newdatav', { method: 'BottomCharts' }).then(resp => {
        this.config1 = resp.config1
        this.config2 = resp.config2
        this.config3 = resp.config3
        this.config4 = resp.config4
        this.labelConfig = resp.labelConfig
        this.labelConfig1 = resp.labelConfig1
        this.labelConfig2 = resp.labelConfig2
        this.labelConfig3 = resp.labelConfig3
      })
    }
  }
}
</script>

<style lang="less">
.bottom-charts {
  width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  .bc-chart-item {
    width: 25%;
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
  }

  .content {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }

  .dv-active-ring-chart {
    height: calc(~"100% - 80px");
  }

  .label-tag {
    height: 30px;
  }

  .active-ring-name {
    font-size: 18px !important;
  }

  .decoration-1,
  .decoration-2,
  .decoration-3 {
    display: absolute;
    left: 0%;
  }
}
</style>
