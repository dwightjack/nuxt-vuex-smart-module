import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'

class State {
  name = ''
  surname = ''

  toJSON() {
    const { name, surname } = this
    return {
      name,
      surname,
    }
  }
}

class UserMutations extends Mutations<State> {
  setUser(payload: State) {
    this.state.name = payload.name
    this.state.surname = payload.surname
  }
}

class UserActions extends Actions<
  State,
  Getters<State>,
  UserMutations,
  UserActions
> {
  setUser(payload: State) {
    this.mutations.setUser(payload)
    console.log(this.state.name)
  }
}

export default new Module({
  state: State,
  mutations: UserMutations,
  actions: UserActions,
})
