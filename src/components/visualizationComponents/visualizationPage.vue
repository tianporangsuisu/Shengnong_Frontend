<template>
    <div class="page">
        <div style="
         margin: auto;
         width: 95%;
         height: 95%;
         background: rgba(255, 255, 255, 0.1);
         backdrop-filter: blur(5px);
         border-radius: 10px;"
        >
            <div class="tableType" style="top: 1vw;left: 1vw">
                <chart-create :x-data="time" :s-data="lightIntensity" :title="texts[0]"/>
            </div>
            <div class="tableType" style="top: 22.5vw;left: 1vw">
                <chart-create :x-data="time" :s-data="temperature" :title="texts[1]"/>
            </div>
            <div class="tableType" style="top: 1vw;right: 1vw">
                <chart-create :x-data="time" :s-data="airHumidity" :title="texts[2]"/>
            </div>
            <div class="tableType" style="top: 22.5vw;right: 1vw">
                <chart-create :x-data="time" :s-data="soilMoisture" :title="texts[3]"/>
            </div>
            <div class="tableType" style="top: 1vw;right: 25.5vw;width: 40vw;height: 22.5vw;">
                <video-create style="width: 94%;padding: 0 3%"></video-create>
            </div>
            <div class="tableType demo-image__lazy" style="top: 25.5vw;right: 25.5vw;width: 40vw;height: 17vw;">
                <el-image v-for="url in urls" :key="url" :src="url" lazy :preview-src-list="urls"/>
            </div>
        </div>

        <!--    <el-row justify="space-around"  style="width: 100%">-->
        <!--      <el-col :span="10" style="">-->
        <!--        <div class="visualDiv">-->
        <!--          <chart-create :x-data="time" :s-data="lightIntensity" :title="texts[0]"/>-->
        <!--        </div>-->
        <!--      </el-col>-->
        <!--      <el-col :span="10">-->
        <!--        <div class="visualDiv">-->
        <!--          <chart-create :x-data="time" :s-data="temperature" :title="texts[1]"/>-->
        <!--        </div>-->
        <!--      </el-col>-->
        <!--      <el-col :span="10">-->
        <!--        <div class="visualDiv">-->
        <!--          <chart-create :x-data="time" :s-data="airHumidity" :title="texts[2]"/>-->
        <!--        </div>-->
        <!--      </el-col>-->
        <!--      <el-col :span="10">-->
        <!--        <div class="visualDiv">-->
        <!--          <chart-create :x-data="time" :s-data="soilMoisture" :title="texts[3]"/>-->
        <!--        </div>-->
        <!--      </el-col>-->
        <!--    </el-row>-->
    </div>
</template>

<script>
import ChartCreate from "@/components/visualizationComponents/subcomponents/chartCreate.vue";
// eslint-disable-next-line no-unused-vars
import {onBeforeMount, onMounted, ref} from "vue";
// eslint-disable-next-line no-unused-vars
import api from "@/axios/api";
import $cookie from "vue-cookie";
import VideoCreate from "@/components/realTimeMonitoringComponents/subcomponents/videoCreate.vue";

export default {
    name: "visualizationPage",
    // eslint-disable-next-line vue/no-unused-components
    components: {VideoCreate, ChartCreate},
    setup(){
        const machineId = localStorage.getItem('machineId')


        let texts =  ['光照强度X时间', '温度X时间', '空气湿度X时间', '土壤水分X时间']
        let lightIntensity = JSON.parse($cookie.get('lightIntensity'))
        let temperature = JSON.parse($cookie.get('temperature'))
        let airHumidity = JSON.parse($cookie.get('airHumidity'))
        let soilMoisture = JSON.parse($cookie.get('soilMoisture'))
        let time = JSON.parse(localStorage.getItem('time'))
        const urls = [
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
        ]
        // api.getVisualization().then(async res => {
        //   await res.data.forEach(item => {
        //     lightIntensity.value.push(item.lightIntensity)
        //     temperature.value.push(item.temperature)
        //     airHumidity.value.push(item.airHumidity)
        //     soilMoisture.value.push(item.soilMoisture)
        //     time.value.push(item.time)
        //   })
        // });

        onBeforeMount(()=>{
        })

        onMounted(() => {
        });

        return {texts, lightIntensity, temperature, airHumidity, soilMoisture, time, machineId,urls}
    }
}
</script>

<style scoped>
.demo-image__lazy {
    height: 400px;
    overflow-y: auto;
}
.demo-image__lazy .el-image {
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
    margin-bottom: 0;
}
</style>