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
          mx-3
          v-if="$store.state.cart.cart.length > 0"
          overlap
          :content="`${$store.state.cart.cart.length}`"
        >
        <v-btn nuxt to="/cart" icon>
          <v-icon size="40">mdi-cart-outline</v-icon>
        </v-btn>
      </v-badge>
      <v-btn v-else nuxt to="/cart" icon>
        <v-icon size="40">mdi-cart-outline</v-icon>
      </v-btn>

          <v-btn
             width="1in"
             ml-12
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

          <v-list-item nuxt to="Menu">
            <v-list-item-icon>
              <v-icon>mdi-food</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item>

          <v-list-item router-link to="cart">
            <v-list-item-icon >
              <v-icon >mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item>

          <v-list-item router-link to="dashboard_2">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    <div >
  <v-container v-if="product">
    <v-row justify="center">
      <v-col cols="11" md="7">
        <h2 clas="text-center text-md-h4 text-weight-bold">
          {{product.name}}
        </h2>
        <v-rating readonly
        half-increaments
        class="mb-2" color="black"
        background-color="primary"
        :value="product.ratings"
        dense
        size="20 "></v-rating>
        <v-chip
          v-for="(t,i) in product.tags"
          :key="`products${product.id}-${i}`"
          x-small
          label
          outlined
          class="mr-1"
        >
          {{t}}
        </v-chip>
          <br/>
          <v-img
            width="100%"
            class="el rouunded-lg"
            height="50vh"
            :src="product.image"
          ></v-img>
          <p class="mt-5 mb-7">
            {{product.description}}
          </p>
          <v-btn @click="$store.commit('cart/AddToCart', product )"
          min-height="45"
          min-width="170"
          class="text-capitalize"
          color="primary"

          >Add To Cart</v-btn>

      </v-col>
    </v-row>
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
  </v-container>

</div>

  </v-card>




</v-app>

</template>
<script>


export default{
async created (){
  const p = await this.$content('products')
  .where({id: parseInt(this.$route.params.id)})
  .limit(1)
  .fetch();
  this.product = p[0];
},
data(){
  return{
    sm: [
        { icon: "mdi-facebook", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-youtube", link: "#" },
      ],
    product:null,
    drawer:null,
    group:null
  };



},
methods:{
  Signout(){
        localStorage.clear();
        this.$router.push({name:'Login'})
        console.warn("Logged out")
      }
}


};

</script>
<style>

</style>
