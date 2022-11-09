import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { auth } from "../firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import('../views/SignIn.vue'),
    },
    {
      path: "/coming",
      name: "coming",
      component: () => import('../views/Coming.vue'),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import('../views/404.vue'),
    }
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next('/signin');
  } else {
    next();
  }
});

export default router;
