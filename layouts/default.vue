<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-avatar>
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
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
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import themeModeButton from '~/components/buttons/themeModeButton';

export default {
  name: 'DefaultLayout',
  components: {themeModeButton},
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-book-open-variant',
          title: 'About',
          to: '/',
        },
        {
          icon: 'mdi-xml',
          title: 'Projects',
          to: '/inspire',
        },
        {
          icon: 'mdi-account-circle',
          title: 'Contact',
          to: '/inspire',
        },
      ],
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  }
}
</script>
