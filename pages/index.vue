<template lang="md">
  <v-container>
    <div class="text-h3 text-center my-4">About me</div>
    <v-skeleton-loader v-show="!$accessor.about" type="article, article" />
    <div v-html='$md.render($accessor.about)'></div>
  </v-container>
</template>

<script>
import global from '~/mixins/globalMixin.vue'

export default {
  mixins: [global],
  mounted() {
    this.getMD()
  },
}
</script>
