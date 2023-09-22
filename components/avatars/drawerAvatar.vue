<template>
  <div class="d-flex justify-center my-4">
    <nuxt-link to="/">
      <v-avatar :size="100" style="border: 3px solid #ffa500">
        <img :src="$accessor.profile?.avatar_url" alt="John" />
      </v-avatar>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
  computed: {
    img(): string {
      return this.$accessor.profile?.avatar_url
    },
  },
})
</script>
