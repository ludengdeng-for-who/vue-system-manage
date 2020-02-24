<template>
  <el-container style="height:100%">
    <el-aside width="auto"><Aside /></el-aside>
    <el-container>
      <el-header class="el-header"><Header /></el-header>
      <Tabs />
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '../../src/components/aside'
import Header from '../../src/components/header'
import Tabs from '../../src/components/tab'

export default {
  name: 'mainView',
  components: {
    Aside,
    Header,
    Tabs
  }
}
</script>

<style scoped>
.el-header {
  background-color: #000;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
