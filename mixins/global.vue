<template>
  
</template>

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
      const response = await this.$axios.$get('/repos')
      return response
    },

    async getMD() {
      const response : XMLHttpRequest = await this.$axios.$get('https://raw.githubusercontent.com/leozenbergs/Leozenbergs/master/README.md')
      this.$accessor.setAbout(response)
      return response
    }
  }
})
</script>