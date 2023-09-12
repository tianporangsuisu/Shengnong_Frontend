<template>
  <div id="tableForm">
    <el-table :data="tableData" style="width: 100%;" :border="false">
      <el-table-column prop="id" label="machineId" width="200" />
      <el-table-column prop="createDate" label="createDate" width="200" />
      <el-table-column prop="lastModifiedDate" label="lastModifiedDate"  width="200" />
      <el-table-column prop="customName" label="customName" min-width="1" />
      <el-table-column prop="typeName" label="typeName" min-width="1" />
      <el-table-column label="Operations" width="150">
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
    mounted() {
        setInterval(() => {
            // （也可以使用`this.$ref`获得表格元素让母后`.classList.remove("el-table--enable-row-hover")`）
            // document.getElementById("playList").classList.remove("el-table--enable-row-hover")
        })
    }
}
</script>

<style scoped>
/*最外层透明*/
/deep/ .el-table, /deep/ .el-table__expanded-cell{
    background-color: transparent;
    color: darkgray;
}
/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
    background-color: transparent;
    color: darkgray;
}
.el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
    background-color: black!important;
}

</style>