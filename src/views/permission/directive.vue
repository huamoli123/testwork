<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
    <div class="test-wrapper">
      <list-layout>
        <template slot="header">
          <div v-if="checkPermission(['admin'])" label="admin" class="search">
            <div class="input">
              <el-input
                v-model="input"
                placeholder="请输入内容"
                clearable
              />
            </div>
            <div class="button">
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
          </div>
          <al-table :column="formData.column" :data="formData.list" :pagination="true" />
        </template>
        <template slot="main">
          <div class="renderless">
            <render-less />
          </div>
        </template>
        <template slot="footer">
          <div class="tablelist">
            <al-table :column="formData.column" :data="formData.list" :pagination="true" />
          </div>
        </template>
      </list-layout>
    </div>
    <!-- <div :key="key" style="margin-top:30px;">
      <div>
        <span v-permission="['admin']" class="permission-alert">
          Only
          <el-tag class="permission-tag" size="small">admin</el-tag> can see this
        </span>
        <el-tag v-permission="['admin']" class="permission-sourceCode" type="info">
          v-permission="['admin']"
        </el-tag>
      </div>

      <div>
        <span v-permission="['editor']" class="permission-alert">
          Only
          <el-tag class="permission-tag" size="small">editor</el-tag> can see this
        </span>
        <el-tag v-permission="['editor']" class="permission-sourceCode" type="info">
          v-permission="['editor']"
        </el-tag>
      </div>

      <div>
        <span v-permission="['admin','editor']" class="permission-alert">
          Both
          <el-tag class="permission-tag" size="small">admin</el-tag> and
          <el-tag class="permission-tag" size="small">editor</el-tag> can see this
        </span>
        <el-tag v-permission="['admin','editor']" class="permission-sourceCode" type="info">
          v-permission="['admin','editor']"
        </el-tag>
      </div>
    </div>

    <div :key="'checkPermission'+key" style="margin-top:60px;">
      <aside>
        In some cases, using v-permission will have no effect. For example: Element-UI's Tab component or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.
        <br> e.g.
      </aside>

      <el-tabs type="border-card" style="width:550px;">
        <el-tab-pane v-if="checkPermission(['admin'])" label="Admin">
          Admin can see this
          <el-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['admin'])"
          </el-tag>
        </el-tab-pane>

        <el-tab-pane v-if="checkPermission(['editor'])" label="Editor">
          Editor can see this
          <el-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['editor'])"
          </el-tag>
        </el-tab-pane>

        <el-tab-pane v-if="checkPermission(['admin','editor'])" label="Admin-OR-Editor">
          Both admin or editor can see this
          <el-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['admin','editor'])"
          </el-tag>
        </el-tab-pane>
      </el-tabs>
    </div> -->
  </div>
</template>

<script>
import { getTestList } from '@/api/test.js'
import ListLayout from '@/components/ListLayout/index.vue'
import AlTable from '@/components/AlTable/index.vue'
import RenderLess from '@/views/renderless/index.vue'
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'DirectivePermission',
  components: {
    ListLayout,
    AlTable,
    SwitchRoles,
    RenderLess
  },
  directives: { permission },
  data() {
    return {
      key: 1, // 为了能每次切换权限的时候重新初始化指令
      input: '',
      formData: {
        column: [
          {
            prop: 'nick',
            label: '昵称'
          },
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'name',
            label: '真实姓名'
          },
          {
            prop: 'subject',
            label: '所属学科'
          },
          {
            prop: 'job',
            label: '职位'
          },
          {
            prop: 'year',
            label: '工作年限'
          },
          {
            prop: 'updateTime',
            label: '录入时间'
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (<div>
                <el-button>操作</el-button>
              </div>)
            }
          }
        ],
        list: []
      }
    }
  },
  created() {
    getTestList().then((res) => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items, total } = data
        this.formData.list = items
      }
      console.log('test', res)
    })
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++
    }
  }
}

</script>

<style lang="scss" scoped>
.app-container {
  ::v-deep .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  ::v-deep .permission-sourceCode {
    margin-left: 15px;
  }
  ::v-deep .permission-tag {
    background-color: #ecf5ff;
  }
  .search {
  margin-top: 20px;
}
  .input{
  display: inline-block;
  margin-right: 10px;
  }
  .button{
  display: inline;
  }
  .tablelist {
    margin-top: 20px;
  }
  .renderless {
    margin: 20px;
  }
}
</style>

