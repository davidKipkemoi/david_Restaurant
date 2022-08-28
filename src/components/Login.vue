<template>
  
    <div class="Loginn">
      <img class="logo" src="@/assets/blitz.jpg" />
      <h1 class="text">Login</h1>
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" required="require" v-model="password" placeholder="Enter Password" />
      <button v-on:click="Login()">Login</button>
      <p class="Log-in">
        <router-link to="/">
          Don't Have an Account?
        </router-link>
      </p>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    name: "Log-in",
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
  
  .Loginn{
       display: grid;
      background-image: url("https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");    
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
  }
   .logo {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  
  .Loginn input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid slateblue;
  }
  
  .Loginn button {
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
     width: 320px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    color: white;
  
  }
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
  </style>
  