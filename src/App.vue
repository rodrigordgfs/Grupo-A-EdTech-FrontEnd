<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Grupo A</v-toolbar-title>
        </v-app-bar>
         <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item v-for="route in routes" :key="route.name" :to="route.path">
                        <v-list-item-icon>
                            <v-icon>{{route.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{route.name}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null
  }),

  computed: {
    routes () {
      return this.$router.options.routes.filter((item) => !item.hidden)
    }
  }
}
</script>
