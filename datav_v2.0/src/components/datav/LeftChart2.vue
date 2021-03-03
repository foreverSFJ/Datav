<template>
  <div class="left-chart-2">
    <!-- <div class="lc3-header">{{config.modelName}}</div> -->
    <dv-decoration-2 style="height:10px;" />
    <div class="lc2-details">{{config.title}}<span>{{config.title_count}}</span>件</div>
    <dv-capsule-chart class="lc2-chart" :config="config" />
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
        modelName: '',
        title: '验收总数',
        title_count: '1256',
        data: [
          {
            name: '验收员A',
            value: 78
          },
          {
            name: '验收员B',
            value: 54
          },
          {
            name: '验收员C',
            value: 123
          },
          {
            name: '验收员D',
            value: 167
          },
          {
            name: '验收员E',
            value: 77
          }
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
      this.$api.post('/newdatav', { method: 'LeftChart2' }).then(resp => {
        this.config = resp.config
      })
    }
  }
}
</script>

<style lang="less">
.left-chart-2 {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;

  .lc2-header {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    text-indent: 20px;
    margin-top: 10px;
  }

  .lc2-details {
    height: 30px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      text-align: right;
    }
  }

  .lc2-chart {
    flex: 1;
  }
}
</style>
