import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  ProtectedRout,
} from "react-router-dom";
import Home from "./components/login/Home";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import ProtectedRoutes from "./ProtectedRoutes";
import Test from "./Test";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route element={<ProtectedRoutes />}>
        <Route element={<App />} path="/app"></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
