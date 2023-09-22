<template lang="md">
  <kinesis-container>
    <kinesis-element :strength="5" type="depth">
      <v-container>
        <div class="text-h3 text-center my-4">About me</div>
        <v-skeleton-loader v-show="!$accessor.about" type="article, article" />
        <div v-html='$md.render($accessor.about)'></div>
      </v-container>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
import global from '~/mixins/globalMixin.vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  components: { KinesisContainer, KinesisElement },
  mixins: [global],
  mounted() {
    this.getMD()
  },
}
</script>
