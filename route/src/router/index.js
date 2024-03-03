import homePage from "../components/Home.vue";
import contactPage from "../components/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/contact",
    component: contactPage,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
