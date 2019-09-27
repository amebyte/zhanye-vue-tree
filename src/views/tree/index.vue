<template>
  <div class="zhanye-tree">
    <div class="header"><el-button @click="addTreeItem"><i class="el-icon-plus" /></el-button></div>
    <div class="container">
      <cell />
    </div>
  </div>
</template>
<script>
import { generateUUID } from '../../utils'
import Cell from './components/Cell'
export default {
  name: 'Tree',
  components: {
    Cell
  },
  computed: {
    treeData2: function() {
      return this.$store.state.department.treeData;
    }
  },
  created() {
    console.log('departbbb', this.$store.state);
  },
  methods: {
    addTreeItem() {
      const newTreeItem = { puuid: '0', uuid: generateUUID(), departmentName: null, isAdding: true, isEdit: true };
      this.$store.dispatch('department/addTreeItem', newTreeItem)
    },
    save() {
      console.log('departmentName', this.departmentName)
    }
  }
}
</script>
<style lang="stylus" scoped>
.zhanye-tree{
    background-color: #fff;
    .header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
        border-bottom: 1px solid #eef2f6;
        border-top: 1px solid #eef2f6;
        height: 60px;
        line-height: 60px;
        padding-left: 33px;
    }
    .container{
    }
}
</style>
