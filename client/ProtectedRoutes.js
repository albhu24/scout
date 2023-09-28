import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/test" />;
};

export default ProtectedRoutes;
