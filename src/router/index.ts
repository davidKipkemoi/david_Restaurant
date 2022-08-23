import SignUp from "@/components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
  ],
});


export default router;
