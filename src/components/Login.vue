<template>
  <img class="logo" src="@/assets/blitz.jpg" />
  <div class="Login">
    <h1 class="text">Login</h1>
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="Login()">Login</button>
    <p class="Loginn">
      <router-link to="SignUp">
        Don't Have an Account?
      </router-link>
    </p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    }


  },
  methods: {
    async Login() {
      const results = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)

      if (results.status == 200 && results.data.length > 0) {

        localStorage.setItem('user-details', JSON.stringify(results.data[0]))
        this.$router.push({ name: 'Home' })
        alert("Thank You for Login In");
      }
      console.warn(results);
    }
  },
  mounted() {
    const user = localStorage.getItem("user-details");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  }
}
</script>
<style scoped>
.logo {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.Login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid slateblue;
}

.Login button {
  width: 320px;
  height: 40px;
  border: 1px solid slateblue;
  background: rgb(0, 183, 255);
  color: rgb(0, 0, 0);
  cursor: pointer;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
}

.text {
  display: block;
  margin-right: auto;
  margin-left: auto;

}
</style>
