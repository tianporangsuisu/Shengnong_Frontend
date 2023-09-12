<template>
  <div style="width: 100%;height: 100%" ref="chart">

  </div>
</template>

<!--存在动态刷新问题-->
<script>
import * as echarts from "echarts";
import {getCurrentInstance, nextTick, onMounted, ref,} from "vue";

export default {
  name: "chartCreate",
  props: {
    title: String,
    xData: Array,
    sData: Array
  },
  setup(props) {
    const chart1 = ref('')
    const test = getCurrentInstance()

    let option = {
      // title:{
      //   text: props.title,
      //   x: 'center',
      // },
      xAxis: {
        // type: 'category',
        data: props.xData
      },
      yAxis: {
        type: 'value'
      },
      tooltip:{
        trigger:'axis'
      },

      series: [
        {
          data: props.sData,
          type: 'line'
        }
      ],

    };

    onMounted(() => {
      nextTick(()=>{
        const chart = echarts.init(test.refs.chart,'light')
        chart.setOption(option)
        window.addEventListener('resize', function() {
          chart.resize();
        });
      })

    });

    return {chart1,log:console.log,}
  }
}
</script>

<style scoped>

</style>