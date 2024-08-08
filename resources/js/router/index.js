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
      path: "/login",
      component: () => import("../layouts/blank.vue"),
      children: [
        {
          path: "",
          component: () => import("../pages/auth/login.vue"),
        },
      ],
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   component: () => import("../layouts/blank.vue"),
    //   children: [
    //     {
    //       path: "",
    //       component: () => import("../pages/[...all].vue"),
    //     },
    //   ],
    // },

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
    {
      path: "/unauthorized",
      component: () => import("../layouts/blank.vue"),
      children: [
        {
          path: "",
          component: () => import("../pages/auth/unauthorized.vue"),
        },
      ],
    },


    // authenticated
    
    // admin
    // {
    //   path: "/dashboard",
    //   component: () => import("../layouts/admin/default.vue"),
    //   children: [
    //     {
    //       path: "",
    //       component: () => import("../pages/admin/dashboard.vue"),
    //       beforeEnter: (to, from, next) => {
    //         checkAdminLogin(next);
    //       },
    //     },
    //   ],
    // },    

  ],
});

function checkLogin(next) {
  const userToken = localStorage.getItem("userToken");
  if (userToken) {
    next();
  } else {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    
    alert("You need to login to access this page.");
    next("/login");
  }
}

function checkAdminLogin(next) {
  const userToken = localStorage.getItem("userToken");
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userToken && userData && userData.position.role.name=="administrator") {
    next();
  } else {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    
    alert("You need to have admin permission to access this page.");
    next("/login"); 
  }
}

export default router;
