import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./assets/component/Header/Header";
import Fotter from "./assets/component/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
    </>
  );
}
