<template>
  <v-navigation-drawer
    v-model="drawer"
    right
    temporary
    fixed
    class="text-center"
  >
    <p class="text-h5 my-5">Language filters</p>
    <v-divider />
    <v-list>
      <v-list-item v-for="(lang, index) in $accessor.languages" :key="index">
        <v-list-item-action>
          <v-checkbox
            v-model="selected[index]"
            :label="lang"
            :value="lang"
            @change="$nuxt.$emit('select-filter', selected)"
          />
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      drawer: false,
      selected: [] as string[],
    }
  },
  watch: {
    opened: {
      immediate: true,
      handler() {
        this.drawer = this.opened
      },
    },
  },
})
</script>
