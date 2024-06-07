import { Routes as RouterRoutes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import { useEffect } from "react";
import Highlights from "../pages/Highlights";

export const Routes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/highlights/:id" element={<Highlights />} />
    </RouterRoutes>
  );
};
