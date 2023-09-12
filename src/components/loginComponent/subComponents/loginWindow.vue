<template>
  <div class="login">
    <h2 style="color: white;margin: 5% auto">登录</h2>
    <el-input placeholder="用户名" v-model="username"/>
    <el-input placeholder="密码" v-model="password" show-password/>
    <el-button type="primary" @click="login" @keyup.enter="keyup(e)">登录</el-button>
  </div>
</template>

<script setup>
  import {useRouter} from "vue-router";
  import {ElMessage} from "element-plus";
  import {onMounted, onUnmounted, ref} from "vue";
  import api from "@/axios/api";
  import $cookie from "vue-cookie";

  const username = ref('')
  const password = ref('')
  const router = useRouter()

  const login = () => {
    if (username.value==='') {
      ElMessage.warning('请输入用户名！')
    }else if (password.value==='') {
      ElMessage.warning('请输入密码！')
    }else {
      api.login(username.value,password.value).then((res)=>{
        if (res.status===200){
          localStorage.setItem('username',username.value)
          $cookie.set('token',res.data)
          router.push({
            path: '/mainFrame/machineList'
          })
          ElMessage.success('登陆成功！')
        }
      }).catch((err)=>{
        if (err.response.request.status===403) {
          ElMessage.warning("用户名或密码错误，请重新尝试！")
        }else {
          ElMessage.error('系统出现未知错误，请重新尝试！')
        }
      })

    }
  };

  const keyup = (e) => {
    if (e.keyCode===13){
      login()
    }
  };

  onMounted(()=>{
    window.addEventListener('keydown',keyup)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown',keyup,false)
  });
</script>

<style scoped>
.el-input{
  height: 12%;
  width: 80%;
  margin: 5% auto;
}
.el-button{
  width: 20%;
  height: 12%;
  margin: 5% auto;
}
</style>