// Import components for the new project
// import Home from "./views/Home";
// import About from "./views/About";
// import Services from "./views/Services";
// import Contact from "./views/Contact";
import Login from "./views/authentication/Login";
import Signup from "./views/authentication/Signup";
import Home from "./views/pages/Home";

const routeObjs = {
  Auth: [
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
  ],
  Main: [
    { path: "/", component: Home },
    // { path: "/about", component: About },
    // { path: "/services", component: Services },
    // { path: "/contact", component: Contact },
  ],
};

const routes = {
  Auth: [],
  Main: [],
};

for (const [key, value] of Object.entries(routeObjs)) {
  for (const route of value) {
    routes[key].push(route.path);
  }
}

const allRoutes = Object.values(routeObjs).flat();

const distinctRoutes = allRoutes.reduce((acc, current) => {
  if (!acc.find((route) => route.path === current.path)) {
    acc.push(current);
  }
  return acc;
}, []);

export default routes;
export { distinctRoutes };
