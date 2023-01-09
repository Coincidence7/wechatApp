export default{
  state: {
    backEndUrl: "",
  },
  getters: {
    getBackEndUrlValue: state => state.backEndUrl,
  },
  mutations: {
    updateUrl(state, values){
      state.backEndUrl = values.backEndUrl
    }
  },
  actions: {
  },
  modules: {
  }
}
