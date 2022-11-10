import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import amazon from './store-amazon'

export default store(function () {
  const Store = createStore({
    modules: {
      amazon
    },
    strict: process.env.DEBUGGING
  })
  return Store
})
