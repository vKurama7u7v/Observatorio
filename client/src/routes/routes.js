import { lazy } from "react";

const Index = lazy(() => import("../screens/app/Index/Index.jsx"));

const Error404 = lazy(() =>
  import("../screens/components/Errors/PageNotFound.jsx")
);

const routes = [
  { path: "/index", component: Index, exact: true },
  { component: Error404 },
];

export default routes;
