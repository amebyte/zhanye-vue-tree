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
      // treeData: this.initTreeData()
      list: this.$store.state.department.treeData
    }
  },
  computed: {
    treeData: function() {
      const data = this.initTreeData(this.list);
      console.log('tt', data);
      // return this.$store.state.department.treeData.filter(v => v && v.puuid === this.puuid);
      return data;
    }
    // treeData: {
    //   get: function() {
    //     return this.initTreeData();
    //   },
    //   set: function(newVal) {
    //     console.log('newVal', newVal);
    //     this.treeData = this.initTreeData();
    //   }
    // }
  },
  watch: {
    list: function(oldVal, newVal) {
      console.log('old', oldVal, 'newVal', newVal);
    },
    immediate: true,
    deep: true
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
    initTreeData(list, puuid = '0', dept = 1) {
      // const d = this.$store.state.department.treeData.filter(v => v && v.puuid === puuid);
      const d = list.filter(v => v && v.puuid === puuid);
      return d && d.map((o) => {
        const children = this.initTreeData(list, o.uuid, dept + 1);
        // o.loop = Math.random();
        this.$set(o, 'dept', dept);
        // o.dept = dept;
        if (children) {
          this.$set(o, 'children', children);
          // o.children = children;
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
