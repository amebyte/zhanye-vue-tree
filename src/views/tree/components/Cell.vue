<template>
  <div>
    <div v-for="(item, key) of treeData" :key="key" class="cell">
      <edit-cell v-if="item.isEdit" :item="item" />
      <item-cell v-else :item="item" />
    </div>
  </div>
</template>
<script>
import EditCell from './EditCell'
import ItemCell from './ItemCell'
export default {
  name: 'Cell',
  components: {
    EditCell,
    ItemCell
  },
  props: {
    puuid: {
      type: String,
      default: '0'
    }
  },
  computed: {
    treeData: function() {
      return this.$store.state.department.treeData.filter(v => v && v.puuid === this.puuid);
    }
  }
}
</script>
<style lang="stylus" scoped>
    .cell{
        border-bottom: 1px solid #f7f7f7;
        padding: 23px 20px;
        &:hover{
            background-color: #fbfbfb;
        }
    }
</style>
