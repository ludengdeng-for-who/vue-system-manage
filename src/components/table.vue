<template>
  <div class="common-table">
    <el-table :data="tableData" stripe height="90%" v-loading="">
      <el-table-column label="id" width="85">
        <template slot-scope="scope">
          <span style="margin-left:10px">{{
            (config.page - 1) * 20 + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
      >
        <template slot-scope="scope">
          <span style="margin-left:10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="el-pagination"
      layout="prev, pager, next"
      :total="config.total * 10"
      :current-page.sync="config.page"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    handleEdit(row) {
      this.$emit('edit', row)
    },
    handleDelete(row) {
      this.$emit('del', row)
    },
    changePage(page) {
      this.$emit('changePage', page)
    }
  },
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object
  }
}
</script>

<style lang="scss" scoped>
.common-table {
  height: calc(100% - 62px);
  position: relative;
  .el-pagination {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
}
</style>
