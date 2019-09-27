<template>
  <div>
    <div class="cell">
      <edit-cell v-if="items.isEdit" :item="items" />
      <item-cell v-else :item="items" />
    </div>
    <slot :items="items" />
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
    items: {
      type: Object,
      default: null
    }
  },
  computed: {

  },
  methods: {

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
