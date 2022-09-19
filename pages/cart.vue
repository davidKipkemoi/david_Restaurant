<template>
  <v-app >
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

          <v-list-item nuxt to="dashboard_2">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    <div>

<div class="text-center" v-if="$store.state.cart.cart.length == 0">
  <v-img class="d-block mx-auto" src="/emptycart.svg" width="400"></v-img>
  <p>Select Items from Menu to Add to Cart</p>
</div>
<v-container>

  <v-row>
    <template v-for="(c, i) in $store.state.cart.cart">
      <v-col :key="`cartItem${i}`">
        <v-card color="surface" flat>
          <v-btn
            @click="$store.commit('cart/RemoveCartItem', i)"
            absolute
            top
            right
            icon
          >
            <v-icon size="50">mdi-delete</v-icon>
          </v-btn>

          <v-row dense>
            <v-col md="3">
              <v-img
                class="rounded-lg"
                height="220"
                :src="c.product.image"
              ></v-img>
            </v-col>
            <v-col class="pl-5 pt-2" md="9">
              <h2 class="text-md-h6 font-weight-bold">
                {{ c.product.name }} x {{ c.quantity }}
              </h2>
              <p class="primary--text mt-2">
                {{ $formartMoney(c.product.price * c.quantity) }}
              </p>
              <v-btn
                @click="$store.commit('cart/IncreaseItemCount', i)"
                icon
              >
                <v-icon size="30">mdi-plus-circle</v-icon>
              </v-btn>
              <span class="mx-4">{{ c.quantity }}</span>
              <v-btn
                @click="$store.commit('cart/DecreaseItemCount', i)"
                icon
              >
                <v-icon size="30">mdi-minus-circle</v-icon>
              </v-btn>

            </v-col>

          </v-row>
        </v-card>

      </v-col>

    </template>


  </v-row>
  <div class="mt-6" v-if="$store.state.cart.cart.length > 0">
    <v-btn
      nuxt
      to="/checkout"
      min-width="150"
      min-height="45"
      color="primary"
      >Checkout</v-btn
    >
  </div>
</v-container>




</div>

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
  </v-card>




</v-app>

</template>

<script>
export default {
data (){
  return{
    sm: [
        { icon: "mdi-facebook", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-youtube", link: "#" },
      ],
    drawer:null,
    group:null
   }
  },
  methods:{
    Signout(){
        localStorage.clear();
        this.$router.push({name:'Login'})
        console.warn("Logged out")
      }
  }
}
</script>


<style></style>
