import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [

  { path: "/", component: () => import("./pages/Homepage.vue") },
  { path: "/calendar", component: () => import("./pages/Calendar.vue") },
  { path: "/faq", component: () => import("./pages/Faq.vue") },
  { path: "/newmembers", component: () => import("./pages/NewMembers.vue") },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (_to, _from, _savedPosition) {
    return { top: 0 };
  }
});

createApp(App).use(router).mount("#app");
