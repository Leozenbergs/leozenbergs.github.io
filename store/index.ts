import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'


export const state = () => ({
  profile: {
    name: '',
    avatar_url: '',
    bio: ''
  },
  about: ''
})

type RootState = ReturnType<typeof state>

export const getters = {
  profile: (state: RootState) => state.profile,
  about: (state: RootState) => state.about,
}

export const mutations = mutationTree(state, {
  setProfile(state, newValue) {
    state.profile = newValue
  },

  setAbout(state, newValue) {
    state.about = newValue
  },

  initialiseStore() {
    console.log('initialised')
  },
})

export const accessorType = getAccessorType({
  getters,
  mutations,
  state
})
