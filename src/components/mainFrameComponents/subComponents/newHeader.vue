<template>
    <div style="position: absolute;left: 19.4vw;top: 2.3vw;align-items: center;display: flex">
        <el-link :underline="false" :disabled="loginState === 'false'" @click="$router.push('/mainFrame/machineList')">机器列表</el-link>
    </div>
    <div style="position: absolute;left: 28.4vw;top: 2.3vw;align-items: center;display: flex">
        <el-link :underline="false" :disabled="loginState === 'false'">当前可视化</el-link>
    </div>
</template>

<script>
export default {
    name: "newHeader",
    setup(){
        let active = ''
        let loginState = localStorage.getItem("loginState")
        return {loginState,active}
    }
}
</script>

<style scoped>
.el-menu-demo{
    color: white;
    width: 100%;height: 100%;
    background: rgba(0,0,0,0);
}
.el-link{
    font-size: 1vw;
    color: white;
}
</style>