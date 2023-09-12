
---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /<template>[^]*?<\/template>/
  - !!js/regexp /\n<script>[^]*?<\/script>\n/
  - !!js/regexp /  margin-top[^]*?<\/style>/
---

<%# REPLACE %>
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<%# END_REPLACE %>

<%# REPLACE %>
<%# END_REPLACE %>

<%# REPLACE %>
}

<%_ if (rootOptions.cssPreprocessor !== 'stylus') { _%>
  <%_ if (!rootOptions.cssPreprocessor) { _%>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
  <%_ } else { _%>
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  <%_ } _%>
<%_ } else { _%>
nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
<%_ } _%>
</style>
<%# END_REPLACE %>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <%_ if (!rootOptions.bare) { _%>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <%_ } else { _%>
    <h1>Welcome to Your Vue.js App</h1>
    <%_ } _%>
  </div>
</template>
<%_ if (!rootOptions.bare) { _%>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<%_ } _%>

---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /<template>[^]*?<\/template>/
  - !!js/regexp /\n<script>[^]*?<\/script>\n/
  - !!js/regexp /  margin-top[^]*?<\/style>/
---

<%# REPLACE %>
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>
<%# END_REPLACE %>

<%# REPLACE %>
<%# END_REPLACE %>

<%# REPLACE %>
}

<%_ if (rootOptions.cssPreprocessor !== 'stylus') { _%>
  <%_ if (!rootOptions.cssPreprocessor) { _%>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
  <%_ } else { _%>
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  <%_ } _%>
<%_ } else { _%>
nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
<%_ } _%>
</style>
<%# END_REPLACE %>

<template>
<%_ if (rootOptions.vueVersion === '3') { _%>
  <img alt="Vue logo" src="./assets/logo.png">
  <%_ if (!rootOptions.bare) { _%>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <%_ } else { _%>
  <h1>Welcome to Your Vue.js App</h1>
  <%_ } _%>
<%_ } else { _%>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <%_ if (!rootOptions.bare) { _%>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <%_ } else { _%>
    <h1>Welcome to Your Vue.js App</h1>
    <%_ } _%>
  </div>
<%_ } _%>
</template>
<%_ if (!rootOptions.bare) { _%>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<%_ if (rootOptions.cssPreprocessor !== 'stylus') { _%>
<style<%-
  rootOptions.cssPreprocessor
    ? ` lang="${
        rootOptions.cssPreprocessor.includes('sass')
          ? 'scss'
          : rootOptions.cssPreprocessor
      }"`
    : ``
%>>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<%_ } else { _%>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
<%_ } _%>
<%_ } _%>

<%_ if (!rootOptions.bare) { _%>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <%_ for (plugin of plugins) { _%>
      <li><a href="<%- plugin.link %>" target="_blank" rel="noopener"><%- plugin.name %></a></li>
      <%_ } _%>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<%_ if (rootOptions.cssPreprocessor !== 'stylus') { _%>
<style scoped<%-
  rootOptions.cssPreprocessor
    ? ` lang="${
        rootOptions.cssPreprocessor.includes('sass')
          ? 'scss'
          : rootOptions.cssPreprocessor
      }"`
    : ``
%>>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<%_ } else { _%>
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
<%_ } _%>
<%_ } _%>

<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  unmounted() {
    localStorage.clear()
  }
}
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url("@/assets/loginBack.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

<template>
  <div></div>
</template>

<script>
export default {
  name: "aboutPage"
}
</script>

<style scoped>

</style>
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
<template>
  <div id="loginPage">
    <span style="position: relative;font-size: 5vmin;top: 25%;left: 45.5%">
      绳农之策
    </span>
    <login-window/>
  </div>
</template>

<script>
import LoginWindow from "@/components/loginComponent/subComponents/loginWindow.vue";

export default {
  name: "loginPage",
  components: {LoginWindow}
}
</script>

<style scoped>

</style>
<template>
  <div class="login">
    <h2 style="color: black;margin: 5% auto">登录</h2>
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
            path: '/mainFrame/index'
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
<template>
  <div class="page">
    <el-row justify="center">
      <el-col :span="20" class="mainTitle">
        机器列表
      </el-col>
      <el-col :span="23">
        <el-divider class="mainTitle">Machine List</el-divider>
      </el-col>
    </el-row>
    <el-row justify="center" style="margin: 4vh">
      <el-col :span="22">
        <table-create/>
      </el-col>
    </el-row>
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
<template>
  <div id="tableForm">
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column fixed prop="id" label="machineId" width="200" />
      <el-table-column prop="createDate" label="createDate" width="200" />
      <el-table-column prop="lastModifiedDate" label="lastModifiedDate"  width="200" />
      <el-table-column prop="customName" label="customName" min-width="1" />
      <el-table-column prop="typeName" label="typeName" min-width="1" />
      <el-table-column fixed="right" label="Operations" width="150">
        <template v-slot="scope">
          <el-button link type="primary" size="small" @click="handleClick(scope.row.id)">查看机器</el-button>
          <el-button link type="primary" size="small">绑定机器</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import {onBeforeMount, ref} from "vue";
import api from "@/axios/api";

export default {
  name: "tableCreate",
  setup() {
    const router = useRouter()
    const tableData = ref([])
    const handleClick = (machineId) => {
      localStorage.setItem('machineId',machineId)
      router.push({
        path: '/mainFrame/visualization'
      })
    };

    onBeforeMount(()=>{
      api.getMachineList().then(res=>{
        tableData.value = res.data.content
      })
    })

    return {handleClick,tableData}
  },
}
</script>

<style scoped>

</style>
<template>
  <div id="mainFrame">
    <div style="width: 100vw;height: 5vh;">
      <headerComponent/>
    </div>
    <div style="width: 98vw;height: 88vh;margin: 1vh 1vw;">
      <router-view/>
    </div>
    <div style="width: 100vw;height: 5vh;">
      <footer-component/>
    </div>
  </div>
</template>

<script>
import headerComponent from "@/components/mainFrameComponents/subComponents/headerComponent.vue";
import FooterComponent from "@/components/mainFrameComponents/subComponents/footerComponent.vue";
import {onMounted} from "vue";

export default {
  components: {
    FooterComponent,
    headerComponent,
  },
  name: "mainFrame",
  setup(){


    onMounted(()=>{

    })
  }
}
</script>

<style scoped>

</style>
<template>
  <div id="footerComp">

  </div>
</template>

<script>
export default {
  name: "footerComponent"
}
</script>

<style scoped>

</style>
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


      <el-menu-item index="1"  route="/mainFrame/index">首页</el-menu-item>

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

      <el-menu-item index="4"  route="/mainFrame/about">关于团队</el-menu-item>

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
<template>
  <div style="width: 100%;height: 100%">
    <div class="demo-image__preview"  style="text-align: center">
      <el-image
          v-for="(item,i) in pictureUrl" :key="item"
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

    return {pictureUrl,name}
  }
}
</script>

<style scoped>

</style>
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
<template>
  <div class="page">
    <video ref="videoPlayer" class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"></video>
  </div>
</template>

<script setup>
import {getCurrentInstance, onMounted, onUnmounted, ref} from "vue";
import videojs from "video.js";
import api from "@/axios/api";


const myPlayer = ref();
const test = getCurrentInstance()
let videoUrl = ''

onMounted(async () => {
  await api.getVideoUrl('4028818585b0ece90185b0eddac20000').then(res=>{
    videoUrl = res.data.data
    console.log(videoUrl)
    myPlayer.value = videojs(test.refs.videoPlayer, {
      poster: "",
      controls: true,
      autoplay: false,
      sources: [
        {
          src: res.data.data,
          type: 'flv',
        }
      ],
    }, () => {
      myPlayer.value.log("play.....")
    })
  })

  myPlayer.value.on('error', function () {
    setTimeout(() => {
      this.src({
        src: videoUrl,
        type: 'flv'
      })
      this.play()
    }, 5000)
  })
});

onUnmounted(() => {
  api.closeVideo('4028818585b0ece90185b0eddac20000')
  if (myPlayer.value) {
    myPlayer.value.dispose()
  }
  console.log('videoExit!')
});
</script>

<style scoped>

</style>
<template>
  <div class="page">
    <el-row justify="center">
      <el-col :span="20" class="mainTitle">
        定时任务
      </el-col>
      <el-col :span="23">
        <el-divider class="mainTitle">Timed Task</el-divider>
      </el-col>
    </el-row>
    <el-row justify="space-around">

    </el-row>
  </div>
</template>

<script>
export default {
  name: "timedTaskPage"
}
</script>

<style scoped>

</style>
<template>
  <div class="page">
    <el-row justify="center">
      <el-col :span="20" class="mainTitle">
        数据可视化
      </el-col>
      <el-col :span="23">
        <el-divider class="mainTitle">Data Visualization</el-divider>
      </el-col>
    </el-row>
    <el-row justify="space-around">
      <el-col :span="10" style="">
        <div class="visualDiv">
          <chart-create :x-data="time" :s-data="lightIntensity" :title="texts[0]"/>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="visualDiv">
          <chart-create :x-data="time" :s-data="temperature" :title="texts[1]"/>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="visualDiv">
          <chart-create :x-data="time" :s-data="airHumidity" :title="texts[2]"/>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="visualDiv">
          <chart-create :x-data="time" :s-data="soilMoisture" :title="texts[3]"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChartCreate from "@/components/visualizationComponents/subcomponents/chartCreate.vue";
// eslint-disable-next-line no-unused-vars
import {onBeforeMount, onMounted, ref} from "vue";
// eslint-disable-next-line no-unused-vars
import api from "@/axios/api";
import $cookie from "vue-cookie";

export default {
  name: "visualizationPage",
  components: {ChartCreate},
  setup(){
    const machineId = localStorage.getItem('machineId')


    let texts =  ['光照强度X时间', '温度X时间', '空气湿度X时间', '土壤水分X时间']
    let lightIntensity = JSON.parse($cookie.get('lightIntensity'))
    let temperature = JSON.parse($cookie.get('temperature'))
    let airHumidity = JSON.parse($cookie.get('airHumidity'))
    let soilMoisture = JSON.parse($cookie.get('soilMoisture'))
    let time = JSON.parse(localStorage.getItem('time'))

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

    return {texts, lightIntensity, temperature, airHumidity, soilMoisture, time, machineId}
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="chart" ref="chart">

  </div>
</template>

<!--存在动态刷新问题-->
<script>
import * as echarts from "echarts";
import {getCurrentInstance, nextTick, onMounted, ref,} from "vue";

export default {
  name: "chartCreate",
  props: {
    title: String,
    xData: Array,
    sData: Array
  },
  setup(props) {
    const chart1 = ref('')
    const test = getCurrentInstance()

    let option = {
      title:{
        text: props.title,
        x: 'center'
      },
      xAxis: {
        // type: 'category',
        data: props.xData
      },
      yAxis: {
        type: 'value'
      },
      tooltip:{
        trigger:'axis'
      },
      dataZoom: [{
        type: 'slider',//图表下方的伸缩条
        show : true, //是否显示
        realtime : true, //拖动时，是否实时更新系列的视图
        start : 0, //伸缩条开始位置（1-100），可以随时更改
        end : 100, //伸缩条结束位置（1-100），可以随时更改
      }],
      series: [
        {
          data: props.sData,
          type: 'line'
        }
      ]
    };

    onMounted(() => {
      nextTick(()=>{
        const chart = echarts.init(test.refs.chart)
        chart.setOption(option)
        window.addEventListener('resize', function() {
          chart.resize();
        });
      })

    });

    return {chart1,log:console.log,}
  }
}
</script>

<style scoped>

</style>