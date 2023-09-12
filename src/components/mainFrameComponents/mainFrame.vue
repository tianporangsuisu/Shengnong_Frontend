<template>
  <div id="mainFrame">
    <div class="header">
        <new-header/>
    </div>
    <div style="width: 96vw;height: 88vh;margin: 2vh 2vw;position: absolute;top: 8vh">
      <router-view/>
    </div>

  </div>
</template>

<script>

import {onMounted} from "vue";
import NewHeader from "@/components/mainFrameComponents/subComponents/newHeader.vue";

export default {
  components: {
      NewHeader,

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