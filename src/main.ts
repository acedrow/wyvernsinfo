import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/Homepage.vue";
import Calendar from "./pages/Calendar.vue";
import Faq from "./pages/Faq.vue";

const routes = [

  { path: "/", component: Homepage },
  { path: "/calendar", component: Calendar },
  { path: "/faq", component: Faq },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
