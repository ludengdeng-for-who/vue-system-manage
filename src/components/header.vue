<template>
  <header>
    <div class="l-content">
      <el-button
        type="primary"
        icon="el-icon-menu"
        size="mini"
        plain
        @click="changeCall"
      ></el-button>
      <el-breadcrumb separator="/" class="nav">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{
          current.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      userImg: require('../assets/images/mm.jpg')
    }
  },
  computed: {
    ...mapState({
      current: state => state.Tab.currentMenu
    })
  },
  methods: {
    ...mapMutations(['changeColl']),
    changeCall() {
      this.changeColl()
    }
  }
}
</script>

<style lang="scss">
header {
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
<style lang="scss">
.l-content {
  display: flex;
  align-items: center;
  .nav {
    margin-left: 50px;
    color: #fff;
  }
}
</style>
