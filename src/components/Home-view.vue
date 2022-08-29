<template>
  <v-app>
    <v-card
    class="mx-auto overflow-hidden"
    height="100%"
    width="100%"
    
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title> Blitz Kenya</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      
    >
      <v-list
        nav
        dense
      >
      
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4">
          <v-list-item >
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item >
            <v-list-item-icon>
              <v-icon
              
              >mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
      
    </v-navigation-drawer>
    <v-carousel
    cycle
    height="700"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="success"
        v-bind="attrs"
        v-on="on"
      >Previous slide</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="info"
        v-bind="attrs"
        v-on="on"
      >Next slide</v-btn>
    
    </template>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      height="700"
      width="100%"
    ></v-carousel-item>
  </v-carousel>
  </v-card>
  

 

</v-app>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],items: [
          {
            src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          },
          
            
        ],
        
        drawer: false,
      group: null,
    
      }
    },
    methods:{
      
    }
    
  }
</script>
<style>
  
</style>