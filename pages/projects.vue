<template>
  <v-container v-if="projects.length">
    <p class="text-h3 text-center my-5">Projects</p>
    <v-text-field
      rounded
      filled
      clearable
      label="Search some repositories"
      append-icon="mdi-magnify"
      class="my-5"
    />
    <v-row>
      <v-col
        v-for="(repo, index) in projects"
        :md="6"
        :cols="12"
        width="30%"
        :key="index"
      >
        <v-card :min-height="100">
          <v-card-title>{{ repo.name }}</v-card-title>
          <v-card-text>{{ repo.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import global from '~/mixins/global.vue'


export default {
  mixins: [global],
  data() {
    return {
      projects: [] as any[]
    }
  },
  async mounted() {
    this.projects = await this.getRepos()
  }
}
</script>
