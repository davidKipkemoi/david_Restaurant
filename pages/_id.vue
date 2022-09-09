<template>

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
  };



},


};

</script>
<style>

</style>
