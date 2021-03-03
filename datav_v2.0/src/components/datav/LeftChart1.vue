<template>
  <div class="left-chart-1">
    <div class="lc1-header">{{config.modelName}}</div>
    <dv-decoration-2 style="height: 10px;" />
    <div class="lc1-details">{{config.title}}<span>{{config.title_count}}</span><font>件</font></div>
    <dv-capsule-chart class="lc1-chart" :config="config" />
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
        modelName: '今日入库情况',
        title: '收货总数',
        title_count: '999',
        data: [
          {
            name: '收货员A',
            value: 167
          },
          {
            name: '收货员B',
            value: 67
          },
          {
            name: '收货员C',
            value: 123
          },
          {
            name: '收货员D',
            value: 55
          },
          {
            name: '收货员E',
            value: 98
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
    }, 60000)
  },

  destroyed () {
    clearInterval(this.timer)
  },

  methods: {
    getdata () {
      this.$api.post('/newdatav', { method: 'LeftChart1' }).then(resp => {
        this.config = resp.config
      })
    }
  }
}
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  height: 40%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;

  .lc1-header {
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-bottom: 10px;
  }

  .lc1-details {
    height: 20%;
    font-size: 16px;
    display: flex;
    align-items: center;
    float: left;
    text-indent: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      text-align: right;
    }
  }

  .lc1-chart {
    flex: 1;
  }
}
</style>
