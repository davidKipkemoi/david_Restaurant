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
             <v-btn  
            width="1in" 
            class="mx-4"
            
            >
              <v-badge right color="red">
                <span slot="badge">6</span>
                  <v-icon>mdi-cart</v-icon> Cart

              </v-badge>
          </v-btn>
          
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
      <v-container>
        <v-row dense>
          <v-col md="6">
            <div>
              <v-text-field
               prepend-inner-icon="mdi-magnify" 
               outlined 
               clearable               
               placeholder="Search"/>
               <v-list
              v-if="$vuetify.breakpoint.mdAndUp"
              color="transparent"
              
              subheader
            >
              <v-subheader>Categories</v-subheader>
              <v-list-item
                link
                v-for="(c, i) in categories"
                :key="`categories${i}`"
              >
                <v-list-item-avatar>
                  <v-img :src="c.image"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ c.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  <v-footer dark heigth="auto"></v-footer>  
  
   
  
  </v-app>
  </template>
  
  <script>


    export default {
      // async created() {
      //   this.categories = await axios.get('http://localhost:3000/categories')
      //   this.products = await axios.get('http://localhost:3000/categories')

      // },
      data () {
        return {         
          items: [
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
          categories:[
            {
      "id": 1,
      "name": "Shoes",
      "image": "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "id": 2,
      "name": "Handbags",
      "image": "https://images.pexels.com/photos/45981/pexels-photo-45981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "id": 3,
      "name": "Perfumes",
      "image": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "id": 4,
      "name": "Cosmetics",
      "image": "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
          ],
          products:null,
          // categories:false

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
        if (!user) {
          this.$router.push({ name: "Login" });
        }
      }
      
    }
  </script>
  <style>
    
  </style>