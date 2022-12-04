<template lang="md">
  <v-container>
    <div v-html='$md.render($accessor.about)'></div>
  </v-container>
</template>

<script>
import global from '~/mixins/global.vue'


export default {
  mixins: [global],
  mounted() {
    this.getMD()
  }
}
</script>
