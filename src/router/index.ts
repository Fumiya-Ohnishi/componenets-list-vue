import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../view/Home.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../view/Test.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
})

export default router
