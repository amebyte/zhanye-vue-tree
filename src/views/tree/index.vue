<template>
  <div class="zhanye-tree">
    <div class="header"><el-button @click="addTreeItem"><i class="el-icon-plus" /></el-button></div>
    <div class="container">

      <cell v-for="(items, key) of treeData" :key="key" :items="items" />

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
  data() {
    return {
      // treeData: null
    }
  },
  computed: {
    treeData: function() {
      const data = this.initTreeData();
      console.log('tt', data);
      // return this.$store.state.department.treeData.filter(v => v && v.puuid === this.puuid);
      return data;
    }
  },
  mounted() {
    // console.log('departbbb', this.$store.state);
    // const treeData = this.initTreeData();
    // console.log('treeData', treeData);
    // this.treeData = treeData;
  },
  created() {

  },
  methods: {
    addTreeItem() {
      const newTreeItem = { puuid: '0', uuid: generateUUID(), departmentName: null, isAdding: true, isEdit: true };
      this.$store.dispatch('department/addTreeItem', newTreeItem)
    },
    save() {
      console.log('departmentName', this.departmentName)
    },
    initTreeData(puuid = '0', dept = 1) {
      const d = this.$store.state.department.treeData.filter(v => v && v.puuid === puuid);
      return d && d.map((o) => {
        const children = this.initTreeData(o.uuid, dept + 1);
        o.dept = dept;
        if (children) {
          o.children = children;
        }
        return o;
      });
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
