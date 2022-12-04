<template>
  <v-app dark>
    <custom-drawer :drawer="drawer" />
    <v-app-bar fixed app dense flat color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />

      <theme-mode-button/>

      <v-btn ml-4 icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-filter</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
import global from '~/mixins/global.vue'

// Vue.mixins(global)

export default{
  components: {customDrawer, themeModeButton},
  data() {
    return {
      drawer: true,
      right: true,
      rightDrawer: false,
      title: 'Portfolio',
    }
  },
}
</script>
