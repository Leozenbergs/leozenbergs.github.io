import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'github-module',
  stateFactory: true,
  namespaced: true,
})
class GithubModule extends VuexModule {
  profile: Object = {};

  @Mutation
  setProfile(profile: Object): void {
    this.profile = profile
  }
}