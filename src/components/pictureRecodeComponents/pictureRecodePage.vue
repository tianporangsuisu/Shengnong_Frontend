<template>
  <div style="width: 100%;height: 100%;background: white;text-align: center">
    <el-row justify="center">
      <el-col :span="20" class="mainTitle">
        照片记录
      </el-col>
      <el-col :span="23">
        <el-divider class="mainTitle">Picture Recode</el-divider>
      </el-col>
    </el-row>
    <el-row justify="space-around" style="margin-top: 2vh">
      <el-col :span="5" v-for="(item,key) in pictureUrl.slice(getStartIndex,getEndIndex)" :key="key">
        <el-image
            style="width: 20vh;height: 20vh;margin: 1vmin"
            :src="item"
            :zoom-rate="1.2"
            :preview-src-list="pictureUrl"
            :initial-index="key"
            fit="cover"
        /><br>
        {{name[key]}}
      </el-col>
    </el-row>
    <el-row style="margin-top: 3vh;" justify="center">
      <el-pagination background layout="prev, pager, next" :total="1000" :page-size="40" :page-count="getPageCount" v-model:current-page="currentPage" @current-change="getStartIndex;getEndIndex"/>
    </el-row>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import api from "@/axios/api";

const pictureUrl = ref([])
let name = [];
let currentPage = ref(1)

api.getPictureUrl('4028818585b0ece90185b0eddac20000').then(res=>{
  pictureUrl.value = res.data
  pictureUrl.value.forEach(i=>{
    if (i.length>25)
      name.push(i.slice(27))
    else
      name.push(i.slice(20))
  })
})


const getStartIndex = computed(() => {
  return 12 * (currentPage.value - 1);
});

const getEndIndex = computed(() => {
  return 12 * currentPage.value;
});

const getPageCount = computed(() => {
  return Math.ceil(pictureUrl.value.length / 12)
});

// eslint-disable-next-line no-undef,no-unused-vars
watch(currentPage,(value, oldValue, onCleanup)=>{
})

console.log(getStartIndex.value,getEndIndex.value)
</script>

<style scoped>
</style>