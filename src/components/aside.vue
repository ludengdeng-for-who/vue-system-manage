<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <el-menu-item
      v-for="(item, index) in asideMenu"
      :index="item.path"
      :key="index"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      asideMenu: [
        {
          path: '/',
          label: '首页',
          name: 'home',
          icon: 's-home'
        },
        {
          path: '/video',
          label: '视频管理',
          name: 'video',
          icon: 'video-play'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.Tab.isCollapse
    })
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>
<style lang="scss">
.el-menu {
  height: 100%;
  border: none !important;
}
</style>
