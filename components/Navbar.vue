<template>
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

          <v-btn
             width="1in"
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
</template>
<script>
  export default{
    data(){
      return{
        drawer:null,
        group:null
      }
    }
  }
</script>
