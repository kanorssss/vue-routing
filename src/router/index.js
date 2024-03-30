import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import JobsView from "../views/jobs/JobsView.vue";
import JobsDetailsView from "../views/jobs/JobsDetailsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: JobsView,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobsDetailsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
