<template>
  <div>
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type"
      @close="handleClose(tag)"
    >
      {{tag.name}}
    </el-tag>

    <el-badge :value="200" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <div class="showMes">
      <el-button :plain="true" @click="open">打开消息提示</el-button>

      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open1">消息</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
    </div>

    <el-button type="text" @click="showMessageBox">点击打开 Message Box</el-button>

    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first">
        <login/>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <hello/>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third" :disabled="true">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="跑马灯哟哟哟" name="five">
        <run/>
      </el-tab-pane>
    </el-tabs>

    <el-page-header @back="goBack" content="详情页面">
    </el-page-header>

    <!-- Table -->
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
    <div class="top">
    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <el-button>上左</el-button>
    </el-tooltip>
    </div>
  </div>
</template>

<script>
  import Login from "../components/Login.vue"
  import HelloWorld from "../components/HelloWorld"
  import Run from "../components/Run"
  export default {
    components:{
      login:Login,
      hello:HelloWorld,
      run:Run
    },
    data () {
      return {
        tags: [
          {name: '标签一', type: ''},
          {name: '标签二', type: 'success'},
          {name: '标签三', type: 'info'},
          {name: '标签四', type: 'warning'},
          {name: '标签五', type: 'danger'}
        ],
        activeName:'second',
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false
      }
    },
    /*删除标签*/
    methods: {
      handleClose (tag) {
        this.tags.splice(this.tags.indexOf(tag), 1)
      },
      open () {
        this.$message('这是一条消息提示')
      },
      open1 () {
        this.$message('这是一条消息提示')
      },
      open2 () {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
      },

      open3 () {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
      },

      open4 () {
        this.$message.error('错了哦，这是一条错误消息')
      },
      showMessageBox () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      handleClick(tab,event){
        console.log(tab,event);
      },
      goBack(){
        console.log("go back");
      }


    }
  }
</script>

<style scoped>
  .showMes {
    margin-top: 50px;
  }
  .top{
    margin-top: 50px;
  }

</style>
