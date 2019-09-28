const state = {
  treeData: [
    { uuid: '01', puuid: '0', departmentName: '技术部', isAdding: false, isEdit: false },
    { uuid: '02', puuid: '01', departmentName: '程序组', isAdding: false, isEdit: false },
    { uuid: '03', puuid: '01', departmentName: '前端组', isAdding: false, isEdit: false },
    { uuid: '04', puuid: '0', departmentName: '市场部', isAdding: false, isEdit: false }
  ]
}

const actions = {
  addTreeItem({ commit }, newTreeItem) {
    commit('ADD_TREE_ITEM', newTreeItem);
  },
  editTreeTtem({ commit }, editTreeTtem) {
    commit('EDIT_TREE_ITEM', editTreeTtem);
  }
}

const mutations = {
  ADD_TREE_ITEM: (state, newTreeItem) => {
    console.log('state', state, 'newTreeItem', newTreeItem);
    state.treeData.unshift(newTreeItem);
  },
  EDIT_TREE_ITEM: (state, editTreeTtem) => {
    console.log('state', state, 'editTreeTtem', editTreeTtem);
    const list = state.treeData;
    list && list.map((o, k) => {
      if (o.uuid === editTreeTtem.uuid) {
        list[k] = editTreeTtem;
        // list.$set(k, editTreeTtem);
        // this.$set(list, k, editTreeTtem);
      }
    });
    state.treeData = list;
    console.log('state.treeData', state.treeData);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
