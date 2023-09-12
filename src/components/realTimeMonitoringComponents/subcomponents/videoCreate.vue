<template>
  <div class="page">
    <video ref="videoPlayer" class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"></video>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import {getCurrentInstance, onMounted, onUnmounted, ref, watch} from "vue";
import videojs from "video.js";
import api from "@/axios/api";



const myPlayer = ref();
const videoPlayer = ref()
// const test = getCurrentInstance()

let videoUrl = ref('')
api.getVideoUrl('4028818585b0ece90185b0eddac20000').then(res=>{
  videoUrl.value = res.data.data
})

// // eslint-disable-next-line no-unused-vars
// watch(videoUrl, (value, oldValue, onCleanup) => {
//   console.log(value,'watch')
//   myPlayer.value = videojs(videoPlayer.value, {
//     poster: "",
//     sources: [
//       {
//         src: 'http://8.130.68.126:8080/players/srs_player.html?autostart=true&stream=sadd.flv&port=8080&schema=http',
//         type: 'flv',
//       }
//     ],
//   }, () => {
//     console.log(myPlayer)
//   })
// });

onMounted(()=>{
  const test = getCurrentInstance()
  myPlayer.value = videojs(test.refs.videoPlayer, {
    poster: "",
    controls: true,
    autoplay: false,
    sources: [
      {
        src: 'http://8.130.68.126:8080/live/livestream.flv',
        type: 'flv',
      }
    ],
  }, () => {
    myPlayer.value.log("play.....")
  })
})

onUnmounted(() => {
  api.closeVideo('4028818585b0ece90185b0eddac20000')
  if (myPlayer.value) {
    myPlayer.value.dispose()
  }
});


</script>

<style scoped>

</style>