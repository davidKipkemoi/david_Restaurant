<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
      height ="100"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-4"
          contain
          src="@/assets/blitz.jpg"
          transition="scale-transition"
          width="100"
          height="100"
          
        />

       
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
