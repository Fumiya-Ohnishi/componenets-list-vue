import { createRouter, createWebHistory } from "vue-router"
// import Home from "./pages/Home.vue"
// import Page1 from "./pages/Page1.vue"
// import Page2 from "./pages/Page2.vue"
import Btn from "./components/Btn.vue"

const routes = [
  // { path: "/", name: "home", component: Home },
  // { path: "/Page1", name: "page1", component: Page1 },
  // { path: "/Page2", name: "page2", component: Page2 },
  {
    path: "/btn",
    name: "home",
    component: Btn,
  },
]

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
})

export default router
