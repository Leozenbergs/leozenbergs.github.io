<template>
  <v-app dark>    
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="false" app>
      <v-flex class="text-center">
        <span
          >{{ $accessor.profile?.name }} &copy;
          {{ new Date().getFullYear() }}</span
        >
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import customDrawer from '~/components/drawer/customDrawer'
import themeModeButton from '~/components/buttons/themeModeButton'
import filtersDrawer from '~/components/drawer/filtersDrawer'

export default {
  components: { customDrawer, themeModeButton, filtersDrawer },
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
    },
  },
  methods: {
    toggleRightDrawer() {
      this.rightDrawer ? (this.rightDrawer = false) : (this.rightDrawer = true)
    },
  },
}
</script>

<style>
a {
  text-decoration: none;
}

.fill {
  height:100vh
}

* {
  font-family: 'Inconsolata', Verdana !important;
}
</style>