<template>
  <div class="chart" ref="chart">

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
      title:{
        text: props.title,
        left: 'center',
        textStyle:{
            color: 'white'
        }
      },
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
      dataZoom: [{
        type: 'slider',//图表下方的伸缩条
        show : true, //是否显示
        realtime : true, //拖动时，是否实时更新系列的视图
        start : 0, //伸缩条开始位置（1-100），可以随时更改
        end : 100, //伸缩条结束位置（1-100），可以随时更改
      }],
      series: [
        {
          data: props.sData,
          type: 'line'
        }
      ]
    };

    onMounted(() => {
      nextTick(()=>{
        const chart = echarts.init(test.refs.chart)
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