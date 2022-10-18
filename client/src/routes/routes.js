import { lazy } from "react";

const Index = lazy(() => import("../screens/app/Index/Index.jsx"));
const About = lazy(() => import("../screens/app/About/About.jsx"));
const Reportes = lazy(() => import("../screens/app/Reportes/Reportes.jsx"));
const Noticias = lazy(() => import("../screens/app/Noticias/Noticias.jsx"));

const Error404 = lazy(() =>
  import("../screens/components/Errors/PageNotFound.jsx")
);

const routes = [
  { path: "/index", component: Index, exact: true },
  { path: "/nosotros", component: About, exact: true },
  { path: "/reportes", component: Reportes, exact: true },
  { path: "/noticias", component: Noticias, exact: true },
  { component: Error404 },
];

export default routes;
