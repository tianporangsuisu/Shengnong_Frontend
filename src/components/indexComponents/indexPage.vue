<template>
  <div class="page">
    <el-row justify="center">
      <el-col :span="18">
        <el-carousel style="width: 100%">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "indexPage"
}
</script>

<style scoped>
.el-row{
  width: 96%;
  background: lightgray;
  margin: 2% 2% 0 2%;
}
.el-carousel{
  width: 100%;
}
.el-carousel-item h3{
  text-align: center;
}
</style>