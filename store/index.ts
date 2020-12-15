// store/index.ts
import { Module } from 'vuex-smart-module'
import uservsm from './uservsm'

const root = new Module({
  modules: {
    uservsm,
  },
})

export const {
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins,
} = root.getStoreOptions()
