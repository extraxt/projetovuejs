<template>
  <v-app light>

    <v-navigation-drawer v-model="sideNav" temporary>
      <v-list>
        <v-list-tile
          v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar flat>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Meu Primeiro Projeto</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon: 'search', title: 'Retornos', link: '/retornos'},
          {icon: 'add', title: 'Criar Retorno', link: '/retornos/novo'},
          {icon: 'person', title: 'Perfil', link: '/perfil'},
          {icon: 'face', title: 'Inscreva-se', link: '/signup'},
          {icon: 'lock_open', title: 'Sign In', link: '/signin'}
        ]
      }
    }
  }

</script>
