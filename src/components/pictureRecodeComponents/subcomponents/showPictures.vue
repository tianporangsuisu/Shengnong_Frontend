<template>
  <div style="width: 100%;height: 100%">
    <div class="demo-image__preview"  style="text-align: center" v-for="(item,index) in pictureUrl" :key="index">
      <el-image
          style="width: 20vmin; height: 20vmin;margin: 1vmin"
          :src="item"
          :zoom-rate="1.2"
          :preview-src-list="pictureUrl"
          :initial-index="i"
          fit="cover"
      /><br>
      {{name[i]}}
    </div>
  </div>
</template>

<script>
import api from "@/axios/api";
import {ref} from "vue";

export default {
  name: "showPictures",
  setup() {
    const pictureUrl = ref([])
    api.getPictureUrl('4028818585b0ece90185b0eddac20000').then(res=>{
      pictureUrl.value = res.data
    })
    let name = [];

    pictureUrl.value.forEach(i=>{
      if (i.length>25)
        name.push(i.slice(27))
      else
        name.push(i.slice(20))
    })

    console.log(name,pictureUrl)
    return {pictureUrl,name}
  }
}
</script>

<style scoped>

</style>