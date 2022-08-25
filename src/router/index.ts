import SignUp from "@/components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "SignUp",
      component: SignUp,

    }, {
      path: "/Home",
      name: "Home",
      component: Home,


    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
  ],
});


export default router;
