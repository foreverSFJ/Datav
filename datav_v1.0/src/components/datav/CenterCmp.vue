<template >
  <div class="center-cmp">
    <div class="cc-header">
      <dv-decoration-1 style="width:200px;height:50px;" />
      <div ><span  >{{meth.memo}}</span></div>
      <dv-decoration-1 style="width:200px;height:50px;" />
    </div>

    <div class="cc-details">
      <div >{{meth.countName}}</div>
      <div class="card" >{{meth.qi}}</div>
      <div class="card">{{meth.bai}}</div>
      <div class="card" >{{meth.shi}}</div>
      <div class="card" >{{meth.ge}}</div>
    </div>

    <div class="cc-main-container">
      <div class="ccmc-left">
        <div class="station-info" >
          {{meth.nomen}}<span >{{meth.nomenalue}}</span>
        </div>
        <div class="station-info" >
          {{meth.design}}<span >{{meth.designalue}}</span>
        </div>
      </div>

      <dv-active-ring-chart class="ccmc-middle" :config="config" />

        <div class="ccmc-right">
        <div class="station-info">
          <span>{{meth.defintvalue}}</span>{{meth.defint}}
        </div>
        <div class="station-info">
          <span>{{meth.nationvalue}}</span>{{meth.nation}}
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
      meth: {
        memo: '',
        countName: '',
        nomen: '',
        nomenalue: '',
        design: '',
        designalue: '',
        defint: '',
        defintvalue: '',
        nation: '',
        nationvalue: '',
        ge: '',
        shi: '',
        bai: '',
        qi: ''
      },
      config: {
        data: [
          {
            name: '收费站',
            value: 1315
          },
          {
            name: '监控中心',
            value: 415
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
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        lineWidth: 30,
        radius: '55%',
        activeRadius: '60%'
      },

      labelConfig: {
        data: ['收费站', '监控中心', '道路外场', '其他']
      }
    }
  },

  created () {
    this.getdata()
    this.timer = setInterval(() => {
      this.getdata()
    }, 180000)
  },

  destroyed () {
    clearInterval(this.timer)
  },

  methods: {
    getdata () {
      this.$api.post('/newdatav', { method: 'center' }).then(resp => {
        this.meth = resp.meth
        this.config = resp.config
        this.labelConfig = resp.labelConfig
      })
    }
  }
}
</script>

<style lang="less">
.center-cmp {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;

  .cc-header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }

  .cc-details {
    height: 120px;
    display: flex;
    justify-content: center;
    font-size: 32px;
    align-items: center;

    .card {
      background-color: rgba(4,49,128,.6);
      color: #08e5ff;
      height: 70px;
      width: 70px;
      font-size: 45px;
      font-weight: bold;
      line-height: 70px;
      text-align: center;
      margin: 10px;
    }
  }

  .cc-main-container {
    position: relative;
    flex: 1;
    display: flex;

    .ccmc-middle {
      width: 50%;
      height: 90%;

      .active-ring-name {
        font-size: 20px !important;
      }
    }

    .ccmc-left, .ccmc-right {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 24px;

      span {
        font-size: 40px;
        font-weight: bold;
      }

      .station-info {
        height: 50px;
        display: flex;
        align-items: center;
      }
    }

    .ccmc-left {
      align-items: flex-end;

      span {
        margin-left: 20px;
      }
    }

    .ccmc-right {
      align-items: flex-start;

      span {
        margin-right: 20px;
      }
    }
  }

  .label-tag {
    position: absolute;
    width: 500px;
    height: 30px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

}
</style>
