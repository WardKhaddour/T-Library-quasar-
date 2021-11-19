import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import User from "./modules/user.js";

export default store(function () {
  const Store = createStore({
    modules: {
      User
    },
    strict: process.env.DEBUGGING
  })

  return Store
})
