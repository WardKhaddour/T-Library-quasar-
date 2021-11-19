import MainLayout from "src/pages/HomeScreen.vue";
import LoginForm from "src/pages/LoginScreen.vue";
import Error404 from "pages/Error404.vue";
const routes = [
  {
    path: "/home",
    component: MainLayout,
    // children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "",
    component: LoginForm,
  },
  {
    path: "/:catchAll(.*)*",
    component: Error404,
  },
];

export default routes;
