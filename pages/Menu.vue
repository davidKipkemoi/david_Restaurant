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

           <v-badge
        v-if="$store.state.cart.cart.length > 0"
        overlap
        :content="`${$store.state.cart.cart.length}`"
      >
        <v-btn nuxt to="/cart" icon>
          <v-icon size="20">mdi-cart-outline</v-icon>
        </v-btn>
      </v-badge>
      <v-btn  v-else nuxt to="/cart" icon>
        <v-icon size="40">mdi-cart-outline</v-icon>
      </v-btn>
          <v-btn
          @click="Signout"
          >Sign OUt</v-btn>


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

          <v-list-item router-link to="/cart">
            <v-list-item-icon >
              <v-icon >mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item>

          <v-list-item router-link to="/dashboard_2">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
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
                  <v-card nuxt :to="`/${p.id}`"
                  link color="surface" class="el ma-1 mb-5 mr-5">
                    <v-img :src="p.image" height="300">
                      <template>
                        <v-row
                        class="fill=height"
                        justify="center"
                        align="center"
                        ></v-row>
                      </template>

                    </v-img>
                    <v-card-title  class="text-md-body-1 font-weight-bold">
                       {{p.name}}</v-card-title>
                    <v-card-subtitle class="primary--text pb-3">
                      {{$formartMoney(p.price) }}
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
      async created(){
        this.categories= await this.$content("category").fetch();
        this.products=  await this.$content("products").fetch();
       },

    data () {
      return {


sm: [
      { icon: "mdi-facebook", link: "#" },
      { icon: "mdi-twitter", link: "#" },
      { icon: "mdi-instagram", link: "#" },
      { icon: "mdi-youtube", link: "#" },
    ],
        search:null,
        drawer: false,
        group: null,
        categories:null,
        products:null

      }
    },

    methods:{
      Signout(){
        localStorage.clear();
        this.$router.push({name:'Login'})
        console.warn("Logged out")
      }
    //   mounted() {
    //   const user = localStorage.getItem("user-details");
    //   if (!user) {
    //     this.$router.push({ name: "Login" });
    //   }
    // }
    },
    computed:{
      filteredProducts(){
        if(!this.search || !this.products ) return this.products || [];
        return this.products.filter((p)=>{
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
