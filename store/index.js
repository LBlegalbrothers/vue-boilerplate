import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters,
  actions,
  mutations,
})