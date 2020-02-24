<template>
  <div class="tabs">
    <el-tag
      :key="index"
      v-for="(item, index) in tabs"
      :closable="item.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(item)"
      @click="changeHash(item)"
      :effect="$route.name === item.name ? 'dark' : 'plian'"
      class="myclass"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      id: 0
    }
  },
  computed: {
    ...mapState({
      tabs: state => state.Tab.tabsList
    })
  },
  methods: {
    ...mapMutations(['closeTab']),
    handleClose(item) {
      this.closeTab(item)
    },
    changeHash(item) {
      this.id = item.index
      this.$router.push({ name: item.name })
      console.log(this.$route)
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style lang="scss">
.el-tag {
  margin: 20px;
}
.myclass {
  cursor: pointer;
}
</style>
