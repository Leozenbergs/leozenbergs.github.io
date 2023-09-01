<template><span /></template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    async getProfile() {
      const response: XMLHttpRequest = await this.$axios.$get('')
      this.$accessor.setProfile(response)
      return response
    },

    async getRepos() {
      const response: XMLHttpRequest = await this.$axios.$get('/repos')
      this.$accessor.setRepos(response)
      return response
    },

    async getMD() {
      const response: XMLHttpRequest = await this.$axios.$get(
        'https://raw.githubusercontent.com/leozenbergs/Leozenbergs/master/README.md'
      )
      this.$accessor.setAbout(response)
      return response
    },

    getLanguages(languages: Array<string>) {
      this.$accessor.setLanguages(languages)
    },
  },
})
</script>
