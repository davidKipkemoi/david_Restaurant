<template>
  <img class="logo" src="@/assets/blitz.jpg" />
  <div class="register">
    <h1 class="text">Kindly Sign up</h1>
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="Signwhere">Sign Up</button>
    <p class="Loginn">
      <router-link to="Login"> Already Have an Account? </router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async Signwhere() {
      const results = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(results);
      if (results.status == 201) {
        alert("Thank You for Signing Up!!");
        localStorage.setItem("user-details", JSON.stringify(results));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    const user = localStorage.getItem("user-details");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
<style scoped>
.logo {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid slateblue;
}

.register button {
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
  margin-left: 100px;
}
</style>
