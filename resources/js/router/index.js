import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      redirect: (to) => {
        return "/dashboard";
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../layouts/blank.vue"),
      children: [
        {
          path: "",
          component: () => import("../pages/[...all].vue"),
        },
      ],
    },

    {
      path: "/dashboard",
      component: () => import("../layouts/user/App.vue"),
      children: [
        {
          path: "",
          component: () => import("../pages/user/dashboard.vue"),
        },
      ],
    },
  ],
});

export default router;
