<template>
 <img class="logo" src="@/assets/blitz.jpg"  />
 <h1>Kindly Sign up</h1>
 <div class="register">
    <input type="text" placeholder="Enter Name"/>
    <input type="text" placeholder="Enter Email"/>
    <input type="password" placeholder="Enter Password"/>
    <button>Sign Up</button>
 </div>
</template>
<script>
    export default{
        name:"SignUp"
    }
</script>
<style scoped>
    .logo{
        
    }
    .register input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid slateblue;
    }
    .register button{
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
    
</style>
