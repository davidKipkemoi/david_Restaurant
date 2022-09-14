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
          <v-list-item router-link to="/">
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

          <v-list-item nuxt to="dashboard">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    <v-row dense>
  <v-col md="6">
      <h1>Sales</h1>
      <apexchart id="apex1" width="500" type="line" :options="options" :series="series"></apexchart>

  </v-col>
  <v-col md="6">
    <h1 justify="center">Sales</h1>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </v-col>
  <v-col md="6">
    <apexchart width="500" type="histogram" :options="options" :series="series"></apexchart>
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
  </v-card>




</v-app>
</template>
<script>
export default{
  data: function() {
    return {
      drawer:null,
      options: {
        chart: {
          id:'apex1'
        },
        xaxis: {
          categories: ["Jan", "Feb","Mar", "Apr"," May"," Jun"," Jul"," Aug"]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
},
methods:{

}
}
</script>
