<template>
  <div class="manage">
    <el-dialog title="新增用户" :visible.sync="addIsShow">
      <Form :formLable="addFormLabel" :form.sync="addForm"></Form>
      <div slot="footer">
        <el-button @click="addIsShow = false">取消</el-button>
        <el-button type="primary" @click="addUser">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="operateType === 'add' ? '更新用户' : '修改用户'"
      :visible.sync="isShow"
    >
      <Form :form="operateForm" :formLable="operateFormLabel"></Form>
      <div slot="footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="showAddUserForm">+ 新增</el-button>
      <Form inline :formLable="formLable" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </Form>
    </div>
    <Table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getData"
      @edit="editUser"
      @del="delUser"
    ></Table>
  </div>
</template>

<script>
import Form from '../../components/form'
import Table from '../../components/table'

export default {
  components: {
    Form,
    Table
  },
  data() {
    return {
      addFormLabel: [
        {
          model: 'name',
          label: '姓名'
        },
        {
          model: 'age',
          label: '年龄'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址'
        }
      ],
      addForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      addIsShow: false,
      isShow: false,
      operateType: 'add',
      searchForm: {
        keyword: ''
      },
      formLable: [
        {
          model: 'keyword',
          label: '',
          type: ''
        }
      ],
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'sexLabel',
          label: '性别'
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: 200
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名'
        },
        {
          model: 'age',
          label: '年龄'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址'
        }
      ]
    }
  },
  methods: {
    addUser() {
      let data = this.addForm
      if (data.name && data.addr && data.age && data.birth && data.sex) {
        this.$http.post('/api/user/add', data).then(() => {
          this.addIsShow = false
          this.getData()
          this.$message({
            message: '添加成功',
            type: 'success'
          })
        })
      } else {
        this.$message({
          message: '内容不能为空',
          type: 'warning'
        })
      }
    },
    showAddUserForm() {
      this.addIsShow = true
    },
    delUser(row) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          let id = row.id
          this.$http.get('/api/user/del', { params: id }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getData()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    confirm() {
      this.$http.post('/api/user/edit', this.operateForm).then(() => {
        this.isShow = false
        this.getData()
      })
    },
    editUser(row) {
      this.operateType = 'add'
      this.isShow = true
      this.operateForm = row
    },
    getData() {
      this.config.loading = true
      this.$http
        .get('/api/user/getUser', {
          params: {
            page: this.config.page
          }
        })
        .then(res => {
          this.tableData = res.data.list.map(item => {
            item.sexLabel = item.sex === 0 ? '女' : '男'
            return item
          })
        })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common';
</style>
