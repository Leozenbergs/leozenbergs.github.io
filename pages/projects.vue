<template>
  <v-container>
    <p class="text-h3 text-center my-5">Projects</p>
    <v-text-field
      v-model="search"
      rounded
      filled
      clearable
      hint="Type enter for search"
      label="Search some repositories"
      append-icon="mdi-magnify"
      class="my-5"
      @keydown.enter="searchRepos"
    />
    <v-skeleton-loader v-show="loading" type="card, card, card" />
    <v-row v-if="projects.length">
      <v-col
        v-for="(repo, index) in projects"
        :md="6"
        :cols="12"
        width="30%"
        :key="index"
      >
        <a :href="repo.html_url" target="_blank">
          <v-card :min-height="100">
            <v-card-title>{{ repo.name }}</v-card-title>
            <v-card-text>
              <div>{{ repo.description }}</div>
              <div>{{ repo.language }}</div>
            </v-card-text>
          </v-card>
        </a>
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
      search: '' as string,
      projects: [] as any[],
      loading: true as boolean
    }
  },
  async mounted() {
    this.projects = await this.getRepos()
    this.loading = false
    this.prepareLanguages()

    this.$nuxt.$on('select-filter', (langs: Array<any>) => {
      langs = langs.filter(item => item !== null)
      this.filterLanguages(langs)
    })
  },
  methods: {
    prepareLanguages(): void {
      const langs = Object.values(this.projects)?.map((item: any) => item.language )

      let uniqueChars = langs.filter((char: string, index: number) => langs.indexOf(char) === index);

      let validLangs : string[] = uniqueChars.filter((item: string) => item !== null)
      this.getLanguages(validLangs)
    },

    filterLanguages(langs: Array<string>): void | any[] {
      if(!langs.length) return this.projects = this.$accessor.repos

      this.projects = this.projects.filter(item => langs.includes(item.language))
    },

    searchRepos(): void | any[] {
      if(!this.search?.length) return this.projects = this.$accessor.repos
      let regSearch: RegExp = new RegExp(this.search)
      const result = this.projects.filter((item: any) => regSearch.test(item.name))
      this.projects = result
    }
  }
}
</script>
