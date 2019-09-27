<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <i class="el-icon-edit"></i>

    <el-button type="danger">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <el-button type="primary" :loading="true">加载中</el-button>
    <el-link>查看<i class="el-icon-view el-icon--right"></i></el-link>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>

    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>


    <el-input v-model="input" placeholder="请输入内容" clearable></el-input>

    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳']
  export default {
    data: function () {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        input: '',
        radio: '1',
        password: ''
      }
    },
    methods: {
      handleCheckAllChange (val) {
        this.checkedCities = val ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
