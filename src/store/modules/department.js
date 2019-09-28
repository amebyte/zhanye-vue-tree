
const state = {
  treeData: [
    { uuid: '01', puuid: '0', departmentName: '技术部', isAdding: false, isEdit: false, isVisible: true, disabled: true },
    { uuid: '02', puuid: '01', departmentName: '程序组', isAdding: false, isEdit: false, isVisible: true, disabled: true },
    { uuid: '03', puuid: '01', departmentName: '前端组', isAdding: false, isEdit: false, isVisible: true, disabled: true },
    { uuid: '04', puuid: '0', departmentName: '市场部', isAdding: false, isEdit: false, isVisible: true, disabled: true },
    { uuid: '05', puuid: '02', departmentName: '一号组', isAdding: false, isEdit: false, isVisible: true, disabled: true },
    { uuid: '06', puuid: '05', departmentName: '事号组', isAdding: false, isEdit: false, isVisible: true, disabled: true },
    { uuid: '07', puuid: '06', departmentName: '鲁班组', isAdding: false, isEdit: false, isVisible: true, disabled: true }
  ],
  isRepeatName: false
}

const actions = {
  addTreeItem({ commit }, newTreeItem) {
    commit('ADD_TREE_ITEM', newTreeItem);
  },
  editTreeTtem({ commit }, editTreeTtem) {
    commit('EDIT_TREE_ITEM', editTreeTtem);
  },
  delTreeItem({ commit }, delTreeTtem) {
    commit('DEL_TREE_ITEM', delTreeTtem);
  },
  checkRepeatName({ commit }, treeItem) {
    return new Promise((resolve) => {
      commit('CHECK_REPEAT_NAME', treeItem);
      resolve(state.isRepeatName);
    });
  }
}

const mutations = {
  ADD_TREE_ITEM: (state, newTreeItem) => {
    console.log('state', state, 'newTreeItem', newTreeItem);
    state.treeData.unshift(newTreeItem);
    console.log('state.treeDataADD', state.treeData);
  },
  EDIT_TREE_ITEM: (state, editTreeTtem) => {
    console.log('state', state, 'editTreeTtem', editTreeTtem, 'this', this);
    const list = state.treeData;
    list && list.map((o, k) => {
      if (o.uuid === editTreeTtem.uuid) {
        console.log('ccc');
        list.splice(k, 1, editTreeTtem);
        // list.unshift(editTreeTtem);
      }
    });
    state.treeData = list;
    console.log('state.treeDataEDIT', state.treeData);
  },
  DEL_TREE_ITEM: (state, delTreeTtem) => {
    console.log('delTreeTtem', delTreeTtem);
    const list = state.treeData;
    list && list.map((o, k) => {
      if (o.uuid === delTreeTtem.uuid) {
        list.splice(k, 1);
      }
    });
    state.treeData = list;
    console.log('state.treeDataDEL', state.treeData);
  },
  CHECK_REPEAT_NAME: (state, treeItem) => {
    const list = state.treeData;
    const repeat = list.filter(o => o.departmentName && o.departmentName.replace(/(^\s*)|(\s*$)/g, '') === treeItem.departmentName.replace(/(^\s*)|(\s*$)/g, '') && o.uuid !== treeItem.uuid);
    console.log('repeat', repeat);
    if (repeat.length > 0) {
      state.isRepeatName = true;
    } else {
      state.isRepeatName = false;
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
