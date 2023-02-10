import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/LandingPage.vue"),
      beforeEnter: (to, from, next) => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          next({ path: "/cust" });
        } else next();
      },
      redirect: { path: "" },
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../pages/auth/Home.vue"),
        },
      ],
    },

    {
      path: "/auth",
      component: () => import("../layouts/Auth.vue"),
      beforeEnter: (to, from, next) => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          next({ path: "/cust" });
        } else next();
      },
      redirect: { path: "/auth/login" },
      children: [
        {
          path: "login",
          component: () => import("../pages/auth/Login.vue"),
        },
        {
          path: "register",
          component: () => import("../pages/auth/Register.vue"),
        },
      ],
    },

    {
      path: "/cust",
      component: () => import("../layouts/Cust.vue"),
      beforeEnter: (to, from, next) => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          next();
        } else next({ path: "/" });
      },
      redirect: { path: "" },
      children: [
        {
          path: "",
          component: () => import("../pages/cust/Home.vue"),
        },
        {
          path: "favorites",
          component: () => import("../pages/cust/Favorites.vue"),
        },
      ],
    },

    {
      path: "/detail/:id",
      component: () => import("../pages/cust/Detail.vue"),
    },
  ],
});

export default router;
