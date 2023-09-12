<template>
  <div ref="chart" style="width: 100%;height: 100%">

  </div>
</template>

<script setup>
import {getCurrentInstance, onMounted} from "vue";
import * as echarts from 'echarts';


onMounted(() => {
  const test0 = getCurrentInstance()
  var myChart = echarts.init(test0.refs.chart);
  var option;

  option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
          formatter: '{value}'
        },
        data: [
          {
            value: 20,
            name: '温度'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

});
</script>

<style scoped>

</style>