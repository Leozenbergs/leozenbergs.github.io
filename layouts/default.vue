<template>
  <v-app dark>
    <custom-drawer :drawer="drawer" />
    <v-app-bar fixed app dense flat color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />

      <theme-mode-button/>

      <v-tooltip v-if="showFilters" bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            ml-4
            icon
            @click.stop="toggleRightDrawer"
          >
            <v-icon>mdi-filter</v-icon>
          </v-btn>
        </template>
        <span>Filters</span>
      </v-tooltip>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <filters-drawer :opened="rightDrawer"/>
    <v-footer :absolute="false" app>
      <v-flex class="text-center">
        <span>{{$accessor.profile?.name}} &copy; {{ new Date().getFullYear() }}</span>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue';
import customDrawer from '~/components/drawer/customDrawer'
import themeModeButton from '~/components/buttons/themeModeButton';
import filtersDrawer from '~/components/drawer/filtersDrawer'


export default{
  components: {customDrawer, themeModeButton, filtersDrawer},
  data() {
    return {
      drawer: true,
      rightDrawer: false,
      title: 'Portfolio',
    }
  },
  computed: {
    showFilters() {
      return this.$nuxt?.$route?.path === '/projects'
    }
  },
  methods: {
    toggleRightDrawer() {
      this.rightDrawer ? this.rightDrawer = false : this.rightDrawer = true
    }
  }
}
</script>
