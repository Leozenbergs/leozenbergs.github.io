import Vue from 'vue'
import { Plugin, Context } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $getProfile: Function
    $getRepos: Function
  }
}

const githubPlugin: Plugin = (context: Context) => {
  context.$getProfile = async () => {
    // const response = await context.$axios.$get('')
    // return response
  }
  context.$getRepos = async () => {
    // const response = await context.$axios.$get('/repos')
    // return response
  }
}

export default githubPlugin