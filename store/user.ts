import { Store } from 'vuex'

interface State {
  name: string
  surname: string
}

export const state = () => ({
  name: '',
  surname: '',
})

export const mutations = {
  setUser(state: State, payload: State) {
    state.name = payload.name
    state.surname = payload.surname
  },
}

export const actions = {
  setUser({ commit }: Store<State>, payload: State) {
    commit('setUser', payload)
  },
}
