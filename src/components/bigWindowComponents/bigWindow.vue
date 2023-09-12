<template>
  <div id="bigWindow">
    <!-- banner start -->
    <div class="caption-title">
      <i class="fl"><img src="./images/title-left.png" ></i>
      <span class="biaoti fl">大屏数据展示</span>
      <i class="fr"><img src="./images/title-right.png" ></i>

    </div>
    <!-- 内容正文 -->
    <div class="zhenwen">
      <div class="left_zs fl">
        <!-- 系统通知 -->
        <div class="data-box1 left_tb fl">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left fl">[</b>
            <span>系统通知</span>
            <b class="data-title-right fr">]</b>
          </div>
          <!-- 项目概览-->
          <div class="xmglan" style="padding: 12px 0">
            <div id="xmgl_cen" style="text-align: center">
              <el-text @click="clickButton" style="color: orange"><el-icon><WarnTriangleFilled /></el-icon>出现一处虫害/异常！</el-text>
            </div>
          </div>
        </div>
        <!-- 项目人员信息状态 -->
        <div class="data-box1 left_tb fl mtop40" style="height: 300px">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left fl">[</b>
            <span>光照X时间</span>
            <b class="data-title-right fr">]</b>
          </div>
          <!-- 项目人员信息状态-->
          <div class="xmglan">
            <div id="lytj" class="lytj">
              <div id="gztj" style="height:300px">
                <chart-set3></chart-set3>
              </div>
            </div>
          </div>
        </div>

        <div class="data-box1 left_tb fl mtop40"  style="height: 330px">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left fl">[</b>
            <span>温度X时间</span>
            <b class="data-title-right fr">]</b>
          </div>
          <!-- 项目人员信息状态-->
          <div class="xmglan">
            <div id="lytj" class="lytj">
              <div id="xcrytj" style="height:300px">
                <chart-set01></chart-set01>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!--右侧图表展示 -->
      <div class="right_zs fr" style="width: 30%">
        <!-- 巡检风险状态 -->
        <div class="data-box1 right_tb ">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left">[</b>
            <span>叶面积X时间</span>
            <b class="data-title-right">]</b>
          </div>
          <!--巡检风险状态-->
          <div class="ryclts">
            <div id="xjfxzt" style="height:334.5px">
              <chart-set02></chart-set02>
            </div>
          </div>
        </div>

        <!-- 风险变化趋势 -->
        <div class="data-box1 right_tb mtop40">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left">[</b>
            <span>湿度X时间</span>
            <b class="data-title-right">]</b>
          </div>
          <!--问题等级-->
          <div class="ryclts">
            <div class="clearfix"><div id="fxbhqs" style="height:334.5px">
              <chart-create04></chart-create04>
            </div></div>
          </div>
        </div>
      </div>
      <!--仪表盘等展示-->
      <div class="center_zs fl" style="width: 40%">
        <div class="data-box1 box1-back">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left">[</b>
            <span>实时监控</span>
            <b class="data-title-right">]</b>
          </div>
          <div style="width: 100%;display: flex;height: 100%;flex-flow: column nowrap">
            <el-row justify="space-around" style="color: white;margin-top: 25px">
              <el-col :span="7" style=";display: flex;flex-flow: column wrap">
                <span style="margin: 5% auto;font-size: 3vh">
                  当前机器编号
                </span>
                <span style="color: white;width: 100%;text-align: center;font-size: 2vh">
                  8ae40a728520b6...

                </span>
              </el-col>
              <el-col :span="7" style="font-size: 10vh;display: flex;flex-flow: column wrap">
                <span style="margin: 5% auto;font-size: 3vh">
                  当前机器状态
                </span>
                <span style="color: greenyellow;width: 100%;text-align: center;font-size: 2vh">
                  keep-alive
                </span>
              </el-col>
              <el-col :span="7" style="font-size: 10vh;display: flex;flex-flow: column wrap">
                <span style="margin: 5% auto;font-size: 3vh">
                  持续运行时间
                </span>
                <span style="color: white;width: 100%;text-align: center;font-size: 2vh">
                  {{timing[0]}}:{{ timing[1] }}:{{timing[2]}}
                </span>
              </el-col>
            </el-row>
            <div style="width: 100%;height: 380px">
              <video
                  ref="video"
                  id="videoPlayer"
                  style="width: 100%"
              >
                <source src="../bigWindowComponents/images/test001.mp4" type="video/mp4">
              </video>
            </div>

            <el-row justify="space-around" style="height: 300px">
              <el-col :span="8">
                <chart-set05></chart-set05>
              </el-col>
              <el-col :span="8">
                <chart-set06></chart-set06>
              </el-col>
              <el-col :span="8">
                <chart-set07></chart-set07>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>


    </div>

    <div class="h30 clearfix"></div>

  </div>
</template>

<script>
import '@/components/bigWindowComponents/css/public.css'
import '@/components/bigWindowComponents/css/jianlixt.css'
import '@/components/bigWindowComponents/css/jianlisw.css'
import $cookie from "vue-cookie";
import ChartSet01 from "@/components/bigWindowComponents/chartSet01.vue";
import ChartSet02 from "@/components/bigWindowComponents/chartSet02.vue";
import ChartSet3 from "@/components/bigWindowComponents/chartSet3.vue";
import ChartCreate04 from "@/components/bigWindowComponents/chartCreate04.vue";
import ChartSet05 from "@/components/bigWindowComponents/chartSet05.vue";
// eslint-disable-next-line no-unused-vars
import {getCurrentInstance, onMounted, ref, watch} from "vue";
// eslint-disable-next-line no-unused-vars
import videojs from "video.js";
import ChartSet07 from "@/components/bigWindowComponents/chartSet07.vue";
import ChartSet06 from "@/components/bigWindowComponents/chartSet06.vue";
export default {
  name: "bigWindow",
  components: {ChartSet06, ChartSet07, ChartSet05, ChartCreate04, ChartSet3, ChartSet02, ChartSet01},
  setup(){
    const source = ref("")
    const clickButton = ()=>{
      source.value="../bigWindowComponents/images/test001.mp4"
    }
    // eslint-disable-next-line no-unused-vars
    const videoPlayer = ref()
    // eslint-disable-next-line no-unused-vars
    const myPlayer = ref();
    const timing = ref([0,0,0])
    const toTiming = ()=>{
      timing.value[2]++
      if (timing.value[2]===59){
        timing.value[2]=0
        timing.value[1]++
      }
      if (timing.value[1]===59){
        timing.value[1]=0
        timing.value[0]++
      }
      setTimeout(toTiming,1000)
    }
    toTiming()
    let texts =  ['光照强度X时间', '温度X时间', '空气湿度X时间', '土壤水分X时间']
    let lightIntensity = JSON.parse($cookie.get('lightIntensity')).slice()
    let temperature = JSON.parse($cookie.get('temperature'))
    let airHumidity = JSON.parse($cookie.get('airHumidity'))
    let soilMoisture = JSON.parse($cookie.get('soilMoisture'))
    let time = JSON.parse(localStorage.getItem('time'))

    onMounted(()=> {
      myPlayer.value = videojs('videoPlayer')
    })

    let test0 = getCurrentInstance()

    watch(source,(value)=>{
      console.log(value)
      test0.refs.video.play()
      myPlayer.value.play()
    })

    return {source,clickButton,time,texts,temperature,airHumidity,soilMoisture,lightIntensity,timing}
  }
}
</script>

<style scoped>

</style>