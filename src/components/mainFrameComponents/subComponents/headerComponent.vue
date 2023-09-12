<template>
  <div id="headerComp">
    <el-menu
        :ellipsis="false"
        :default-active="activeIndex"
        text-color="#303133"
        active-text-color="#303133"
        mode="horizontal"
        :router="true"
    >
      <div style="display: flex;margin: auto;padding: 0 1%" @click="$router.push('/mainFrame/index')">
        <img src="../../../assets/logo透明_smaller.png" style="width: 2.5vh;height: 2.5vh;margin-right: 0.5vh"/>
        <el-text size="large">绳农之策</el-text>
      </div>


      <!--<el-menu-item index="1"  route="/mainFrame/index">首页</el-menu-item>-->

      <el-menu-item index="2"  route="/mainFrame/machineList">机器列表</el-menu-item>

      <el-sub-menu index="3"

      >
        <template #title>
          当前机器
        </template>
        <el-menu-item index="3-1" route="/mainFrame/visualization">数据可视化</el-menu-item>
        <el-menu-item index="3-2" route="/mainFrame/realTimeMonitoring">实时监控</el-menu-item>
        <el-menu-item index="3-3" route="/mainFrame/pictureRecode">照片记录</el-menu-item>
        <el-menu-item index="3-4" route="/mainFrame/timedTask">定时任务</el-menu-item>
        <el-menu-item index="3-5" route="/mainFrame/bigWindow">大屏监控</el-menu-item>
      </el-sub-menu>

      <div style="flex-grow: 1"></div>

      <el-dropdown popper-class="dropDown">
        <el-avatar>{{usernameSimple}}</el-avatar>
        {{username}}
        <template #dropdown>
           <el-dropdown-menu>
             <el-dropdown-item @click="quitLogin()">
               退出登录
             </el-dropdown-item>
           </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!--<el-menu-item index="4"  route="/mainFrame/about">关于团队</el-menu-item>-->

    </el-menu>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import {useRouter} from "vue-router";

const activeIndex = ref('1')
const usernameSimple = ref(localStorage.getItem('username').substring(0,3))
const username = ref(localStorage.getItem('username'))
const currentMachine = ref(localStorage.getItem('machineId'))

// eslint-disable-next-line no-unused-vars
watch(currentMachine, (value, oldValue, onCleanup) => {
  console.log(value)
  currentMachine.value=value
});

const router = useRouter()
const quitLogin = () => {
  localStorage.clear()
  router.push('/login')
};

onMounted(() => {
});

onUnmounted(() => {
});
</script>

<style scoped>
.el-menu{
  padding: 0 2% 0 1%;
  width: 100%;
  background:  #95d475;
}
.el-submenu.newPopper{
  width: 5px;
}
.el-dropdown{
  justify-content: center;
  align-content: center;
  display: flex;
  flex-flow: column wrap;
}
</style>