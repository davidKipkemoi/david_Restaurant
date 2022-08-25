<template>
 
  <div class="register">
     <img class="logo" src="@/assets/blitz.jpg" />
    <h1 class="text">Kindly Sign up</h1>
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="Signwhere">Sign Up</button>
    <p class="sign-up">
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
@media (hover: hover) {
  a:hover {
    background-color: hsl(0, 6%, 27%);
  }
}
a,
.green {
  text-decoration: none;
  color: rgb(255, 255, 255);
  transition: 0.4s;
}

.logo {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.register{
    display: grid;
    background-image: url("https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
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
  margin-left: auto;
  color: white;
}

.sign-up{
    display: grid;
margin-right: auto;
  margin-left: auto;
}

</style>
