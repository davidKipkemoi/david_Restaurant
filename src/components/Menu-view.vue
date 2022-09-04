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
          <v-col md="3">
            <div>
              <v-text-field v-model="search"
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
            <v-col md="9">
              <v-row>
                <template v-for="(p, i) in filteredProducts">
                  <v-col cols="12" md="6" :key="`products${p.id}-${i}`">
                    <v-card link color="surface" class="el ma-1 mb-5 mr-5">
                      <v-img :src="p.image" height="300">
                        <template>
                          <v-row
                          class="fill=height"
                          justify="center"
                          align="center"
                          >
                            <v-progress-circular
                            width="2"
                            size="100"
                            color="primary"
                            intermediate
                            ></v-progress-circular>

                          </v-row>
                        </template>

                      </v-img>
                      <v-card-title  class="text-md-body-1 font-weight-bold">
                         {{p.name}}</v-card-title>
                      <v-card-subtitle class="primary--text pb-3">
                        {{p.price}}
                      </v-card-subtitle>
                      <v-card-text>
                        <v-chip
                          v-for="(t,i) in p.tags"
                          :key="`prod${p.id}-${i}`"
                          x-small
                          label
                          outlined
                          class="mr-1"
                        >
                          {{t}}
                        </v-chip>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </template>
              </v-row>


            </v-col>
        </v-row>
      </v-container>
    
    </v-card>
    <v-card
    tile
    flat
    rounded="lg"
    class="pa-md-10 pa-5 text-center"
    color="surface"
  >
    <h2 class="text-md-h6 font-weight-bold">Karibu Blitz Chakula</h2>
    <p class="text-md-body-2 mt-5">Follow us On</p>
    <div class="text-center">
      <v-btn
        color="surface"
        class="mr-2"
        v-for="(b, i) in sm"
        :key="`sm${i}`"
        fab
        depressed
      >
        <v-icon>{{ b.icon }}</v-icon>
      </v-btn>
    </div>
    <br />
  </v-card>
  
   
  
  </v-app>
  </template>
  
  <script>

    
    export default {
      
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
            products:[
    {
      "id": 1,
      "name": "Silky Smooth Beats",
      "onSale": false,
      "tags": ["Headphone", "People"],
      "image": "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
      "price": 20000,
      "salePrice": null,
      "ratings": 4.0
    },
    {
      "id": 2,
      "name": "Lady Luck Is Smiling",
      "onSale": true,
      "tags": ["Perfume", "Women"],
      "image": "https://images.pexels.com/photos/6062560/pexels-photo-6062560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
      "price": 3500,
      "salePrice": 3000,
      "ratings": 4.5
    },
    {
      "id": 3,
      "name": "Green Nike Zoom",
      "onSale": true,
      "tags": ["Nike", "Men"],
      "image": "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
      "price": 10500,
      "salePrice": 9000,
      "ratings": 4.5
    },
    {
      "id": 4,
      "name": "New Home Living Room Set",
      "onSale": false,
      "tags": ["Home", "Pretty"],
      "image": "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
      "price": 100500,
      "salePrice": null,
      "ratings": 4
    },
    {
      "id": 5,
      "name": "Classic Man Watch",
      "onSale": true,
      "tags": ["Watch", "Men"],
      "image": "https://images.pexels.com/photos/3210711/pexels-photo-3210711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
      "price": 50500,
      "salePrice": 40000,
      "ratings": 3.5
    }
  ],
  sm: [
        { icon: "mdi-facebook", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-youtube", link: "#" },
      ],
          search:null,
          drawer: false,
          group: null,
      
        }
      },
      
      methods:{
        Signout(){
          localStorage.clear();
          this.$router.push({name:'Login'})
          console.warn("Logged out")
        },
        mounted() {
        const user = localStorage.getItem("user-details");
        if (!user) {
          this.$router.push({ name: "Login" });
        }
      }  
      },
      computed:{
        filteredProducts(){
          if(!this.search || !this.products ) return this.products || [];
          return this.products.filter(p=>{
              const s = this.search.toLowerCase();
              const n = p.name.toLowerCase()
              const price = p.price.toString()
              const r = p.ratings.toString()
              const sprice = p.salePrice ?.toString() || '';
              return ( n.includes(s) || price.includes(s) || r.includes(s) || sprice.includes(s));




          })
        }
      }
      
    }
  </script>
  <style>
    
  </style>