<template lang="md">
  <kinesis-container>
    <kinesis-element :strength="15" type="depth">
      <div class="d-flex justify-center align-center fill">
        <div class="text-center">
          <h1 class="mb-4 index-title">Leonardo's Portfolio!</h1>
          <NuxtLink to="/about">
            <v-btn color="primary" class="about-btn">Begin</v-btn>
          </NuxtLink>
        </div>
      </div>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  layout: "outside",
  components: { KinesisContainer, KinesisElement },
}
</script>

<style>
.index-title {
  font-size: 3rem !important;
  padding: 10px 15px !important;
}
</style>