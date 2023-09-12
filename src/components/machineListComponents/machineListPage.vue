<template>
  <div class="page" style="justify-content: center;align-items: center">
<!--    <el-row justify="center">-->
<!--      <el-col :span="20" class="mainTitle">-->
<!--        机器列表-->
<!--      </el-col>-->
<!--      <el-col :span="23">-->
<!--        <el-divider class="mainTitle">Machine List</el-divider>-->
<!--      </el-col>-->
<!--    </el-row>-->
    <div class="tableBack">
        <table-create/>
    </div>
  </div>
</template>

<script setup>
import TableCreate from "@/components/machineListComponents/subComponents/tableCreate.vue";
import $cookie from "vue-cookie";
import api from "@/axios/api";

let chart1 = []
let chart2 = []
let chart3 = []
let chart4 = []
let chart5 = []

api.getVisualization().then(async res => {
  await res.data.forEach(item => {
    chart1.push(item.lightIntensity)
    chart2.push(item.temperature)
    chart3.push(item.airHumidity)
    chart4.push(item.soilMoisture)
    chart5.push(item.time)
  })
  $cookie.set('lightIntensity',JSON.stringify(chart1))
  $cookie.set('temperature',JSON.stringify(chart2))
  $cookie.set('airHumidity',JSON.stringify(chart3))
  $cookie.set('soilMoisture',JSON.stringify(chart4))
  localStorage.setItem('time',JSON.stringify(chart5))
});



</script>

<style scoped>

</style>