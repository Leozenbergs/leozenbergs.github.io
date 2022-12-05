<template>
  <v-navigation-drawer
    :value="drawer"
    fixed
    app
  >
    <drawer-avatar />
    <v-divider />
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        color="primary"
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
</template>

<script>

import Vue from 'vue';
import drawerAvatar from '~/components/avatars/drawerAvatar.vue';
import global from '~/mixins/global.vue';

export default {
  components: {drawerAvatar},
  mixins: [global],
  props: {
    drawer: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-book-open-variant',
          title: 'About',
          to: '/',
        },
        {
          icon: 'mdi-xml',
          title: 'Projects',
          to: '/projects',
        },
        {
          icon: 'mdi-account-circle',
          title: 'Contact',
          to: '/contact',
        },
      ],
      loaded: false
    }
  },
  mounted() {
    this.getProfile()
  }
}
</script>