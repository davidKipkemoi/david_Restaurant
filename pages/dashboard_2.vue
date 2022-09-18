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

          <v-list-item nuxt to="dashboard_2">
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
    <div class="" v-if="arrprice.length > 0">
      <h1 class="text-center" >Food Prices</h1>
      <line-chart  :chartData="arrprice" label="Food-Prices" chartOptions="chartOptions"></line-chart>
    </div>
    </v-col>

  <v-col md="6">
    <div class="" v-if="arrratings.length > 0">
      <h1 class="text-center" >Food Ratings</h1>
    <line-chart  :chartData="arrratings" label="Food-Ratings" chartOptions="chartOptions"></line-chart>
    </div>
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
import moment from 'moment'
import axios from 'axios'
import LineChart from "../components/LineChart.vue";
import donut from "../components/donut.vue";


export default{
  components:{
    LineChart,
    donut
  },
    data() {
        return {
            arrname: [],
            arronSale: [],
            arrprice: [],
            arrratings: [],
            arrsalePrice: [],
            arrtags: [],
            chartOptions:{
              responsive:true,
              maintainAspectRatio:false
            },
            drawer:null,
            group:null,
            sm: [
      { icon: "mdi-facebook", link: "#" },
      { icon: "mdi-twitter", link: "#" },
      { icon: "mdi-instagram", link: "#" },
      { icon: "mdi-youtube", link: "#" },
    ],
        };
    },
    async created() {
      const data=  await this.$content("products").fetch();
        data.forEach(d => {
          const date =  moment(d.date,'YYYYMMDD').format("MM/DD");
            const { name,
                    onSale,
                    price,
                    ratings,
                    salePrice,
                    tags } = d;

            this.arrprice.push({ name, total: price });
            this.arrname.push({ date, total: name });
            this.arronSale.push({ date, total: onSale });
            this.arrratings.push({ name, total: ratings });
            this.arrsalePrice.push({ date, total: salePrice });
            this.arrtags.push({ date, total: tags });
            console.log(this.arrprice);
        });
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
