<template>
  <div>
    <v-tooltip v-if="!$vuetify.theme.dark" bottom>
      <template #activator="{ on }">
        <v-btn
          color="transparent"
          small
          fab
          depressed
          v-on="on"
          @click="darkMode"
        >
          <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
        </v-btn>
      </template>
      <span>Dark Mode On</span>
    </v-tooltip>

    <v-tooltip v-else bottom>
      <template #activator="{ on }">
        <v-btn
          color="transparent"
          small
          fab
          depressed
          v-on="on"
          @click="darkMode"
        >
          <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
        </v-btn>
      </template>
      <span>Dark Mode Off</span>
    </v-tooltip>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
})
</script>
