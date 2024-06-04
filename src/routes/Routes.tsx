import { Routes as RouterRoutes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import { useEffect } from "react";

export const Routes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
    </RouterRoutes>
  );
};
