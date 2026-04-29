import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PortfolioGrid from "@/components/mainbloc/PortfolioGrid.vue";
import AboutSelf from "@/components/mainbloc/AboutSelf.vue";
import Footer from "@/components/Footer.vue";
import ExampleComponents from "@/components/mainbloc/ExampleComponents.vue";
import ServicesGrid from "@/components/mainbloc/ServicesGrid.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:any(.*)",
    redirect: "/",
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioGrid,
  },
  {
    path: "/aboutself",
    name: "aboutself",
    component: AboutSelf,
  },
  {
    path: "/footer",
    name: "footer",
    component: Footer,
  },
  {
    path: "/example",
    name: "examplecomponents",
    component: ExampleComponents,
  },
  {
    path: "/services",
    name: "servicesgrid",
    component: ServicesGrid,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
