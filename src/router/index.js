import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PortfolioGrid from "@/components/mainbloc/PortfolioGrid.vue";
import AboutSelf from "@/components/mainbloc/AboutSelf.vue";
import Footer from "@/components/Footer.vue";
import ExamplePage from "@/components/mainbloc/ExamplePage,.vue";
import ServicesGrid from "@/components/mainbloc/ServicesGrid.vue";
import ContactsPage from "@/components/mainbloc/ContactsPage.vue";
import ReviewsSection from "@/components/mainbloc/ReviewsSection.vue";

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
    path: "/examplepage",
    name: "examplepage",
    component: ExamplePage,
  },
  {
    path: "/services",
    name: "servicesgrid",
    component: ServicesGrid,
  },
  {
    path: "/contactspage",
    name: "contactspage",
    component: ContactsPage,
  },
  {
    path: "/reviews",
    name: "reviewssection",
    component: ReviewsSection,
  },
  {
    path: "/admin-login",
    component: () => import("@/pages/admin/AdminLogin.vue"),
  },
  {
    path: "/admin/reviews",
    component: () => import("@/pages/admin/AdminReviews.vue"),
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;

