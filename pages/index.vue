<template lang="md">
  <v-container>
    <div class="text-h3 text-center my-4 text-uppercase">About me</div>
    <v-card outlined>
      <v-card-text>
        <div v-html='$md.render($accessor.about)'></div>
      </v-card-text>
    </v-card>
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
