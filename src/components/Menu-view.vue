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
        
        <v-toolbar-title> Blitz Food</v-toolbar-title>
             <v-spacer></v-spacer>
          
            <v-btn >Sign OUt</v-btn>
      
        
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

            <v-list-item router-link to="Home">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
  
            <v-list-item router-link to="Menu">
              <v-list-item-icon>
                <v-icon>mdi-food</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Menu</v-list-item-title>
            </v-list-item>
  
            <v-list-item router-link to="">
              <v-list-item-icon >
                <v-icon >mdi-cart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Orders</v-list-item-title>
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
  
    </v-card>
  <v-footer dark heigth="auto"></v-footer>  
  
   
  
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
            {
              src:'https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },{
              src:'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            
              
          ],
          
          drawer: false,
        group: null,
      
        }
      },
      
      methods:{
        Signout(){
          localStorage.clear();
          this.$router.push({name:'Login'})
          console.warn("Logged out")
        }
        
      },
      mounted() {
        const user = localStorage.getItem("user-details");
        if (user) {
          this.$router.push({ name: "Login" });
        }
      }
      
    }
  </script>
  <style>
    
  </style>