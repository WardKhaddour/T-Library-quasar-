import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import store from "../store/index.js";

const myStore = store();
export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    history: createHistory(
      process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });
  Router.beforeEach(async (to, from, next) => {
    // console.log(store);
    let isLoggedIn = await myStore.dispatch("User/checkIfLoggedIn");
    // next();
    if (to.path === "/" && isLoggedIn) {
      next("home");
      return;
    } else if (to.path === "/" && !isLoggedIn) {
      next();
      return;
    } else if (to.path !== "/" && !isLoggedIn) {
      alert("Not Authenticate!!");
      next("/");
      return;
    }
    next();
  });
  return Router;
});
