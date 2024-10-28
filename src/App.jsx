import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { distinctRoutes } from "./routes";
import PageNotFound from "./views/PageNotFound";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {distinctRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  const location = useLocation();
  const noFooterRoutes = [
    "/signup",
    "/login",
   "/forgot-password",
   "/check-mail",
    "/reset-password",
    "/new-password",
    "/*",
  ];

  // this statement is for exact match of routes
  let shouldRenderFooter = !noFooterRoutes.includes(location.pathname);

  return (
    <div className="flex-1 min-w-screen min-h-screen max-w-[2000px] mx-auto">
      {shouldRenderFooter && <Navbar />}
      <main>
        <Outlet />
      </main>
      {shouldRenderFooter && <Footer />}
    </div>
  );
}

export default App;
