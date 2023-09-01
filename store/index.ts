import { getAccessorType, mutationTree } from 'typed-vuex'

export const state = () => ({
  profile: {
    name: '',
    avatar_url: '',
    bio: '',
  },
  about: '',
  repos: [] as any[],
  languages: [] as string[],
})

type RootState = ReturnType<typeof state>

export const getters = {
  profile: (state: RootState) => state.profile,
  about: (state: RootState) => state.about,
  repos: (state: RootState) => state.repos,
  languages: (state: RootState) => state.languages,
}

export const mutations = mutationTree(state, {
  setProfile(state, newValue) {
    state.profile = newValue
  },

  setAbout(state, newValue) {
    state.about = newValue
  },

  setRepos(state, newValue) {
    state.repos = newValue
  },

  setLanguages(state, newValue) {
    state.languages = newValue
  },
})

export const accessorType = getAccessorType({
  getters,
  mutations,
  state,
})
