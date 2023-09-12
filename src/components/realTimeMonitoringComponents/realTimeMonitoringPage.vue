<template>
  <div class="page">
    <el-row justify="center">
      <el-col :span="20" class="mainTitle">
        实时监控
      </el-col>
      <el-col :span="23">
        <el-divider class="mainTitle">Realtime Monitoring</el-divider>
      </el-col>
    </el-row>
    <el-row justify="space-around" style="margin-top: 4vh">
      <el-col :span="20" style="display: flex">
        <div style="width: 104vmin;height: 58.5vmin;margin: 0 auto">
          <video-create/>
        </div>
      </el-col>
      <el-col :span="23" style="margin-top: 5vh">
        <el-divider style="margin: 2vh">
          Tips--使用指南
        </el-divider>
      </el-col>
      <el-col :span="15" style="text-align: center;">
        <el-text style="font-size: 2vmin">
          使用
          <el-text style="color:  #409EFF">
            shift
          </el-text>
          和键盘
          <el-icon style="color:  #409EFF"><Top /></el-icon>
          <el-icon style="color:  #409EFF"><Bottom /></el-icon>
          控制机器垂直方向运动
          <br/>
          使用
          <el-text style="color: #409EFF">
            ctrl
          </el-text>
          和键盘
          <el-icon style="color:  #409EFF"><Top /></el-icon>
          <el-icon style="color:  #409EFF"><Bottom /></el-icon>
          <el-icon style="color:  #409EFF"><Back /></el-icon>
          <el-icon style="color:  #409EFF"><Right /></el-icon>
          控制机器水平方向运动
        </el-text>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VideoCreate from "@/components/realTimeMonitoringComponents/subcomponents/videoCreate.vue";
import {onMounted, onUnmounted, reactive, toRefs} from "vue";
export default {
  name: "realTimeMonitoringPage",
  components: {VideoCreate},
  setup() {
    let obj =reactive({
      activeName: 'first',
      deviceId: history.state.deviceId,
      //后台获取
      // positionVar: api.getPosition(),

      //三个方向的偏移量,由PositionVar设定
      XVar: 50,
      YVar: 50,
      ZVar: 50,
      keyup:(e)=>{
        if(e.shiftKey){
          if (e.keyCode===38)  {
            obj.ZVar++
          }else if (e.keyCode===40){
            obj.ZVar--
          }
        }else if (e.ctrlKey){
          if (e.keyCode===37){
            obj.XVar--
          }else if (e.keyCode===38){
            obj.YVar++
          }else if (e.keyCode===39){
            obj.XVar++
          }else if (e.keyCode===40){
            obj.YVar--
          }
        }
      }

    });

    onMounted(()=>{
      window.addEventListener('keydown', obj.keyup)
    })

    onUnmounted(()=>{
      window.removeEventListener('keydown', obj.keyup, false)

    })

    return {...toRefs(obj)}
  }
}
</script>

<style scoped>

</style>