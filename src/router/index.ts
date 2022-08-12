import Loadable from "@loadable/component";

const routes = [
  {
    path: "/",
    meta: { title: "首页" },
    element: Loadable(() => import("../home"))
  },
  {
    path: "/two-sum",
    meta: { title: "两数之和" },
    element: Loadable(() => import("../source/two-sum"))
  }
];

export default routes;
