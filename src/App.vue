<template>
  <v-app light>
    <!-- MENU ESQUERDA -->
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
    <!-- FIM > MENU ESQUERDA -->

    <!-- BARRA NAVEGAÇÃO SUPERIOR -->
    <v-toolbar flat>

      <!-- ICONE DO MENU ESQUERDO -->
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="sideNav = !sideNav"></v-toolbar-side-icon>
      <!-- FIM> ICONE DO MENU ESQUERDO -->
      
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
    <!-- FIM > BARRA NAVEGAÇÃO SUPERIOR -->

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
          {icon: 'face', title: 'Inscreva-se', link: '/signup'},
          {icon: 'lock_open', title: 'Login', link: '/login'}
        ]
      }
    }
  }

</script>
