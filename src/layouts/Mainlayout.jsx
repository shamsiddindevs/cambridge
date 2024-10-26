import React from "react";
import {Outlet} from "react-router";
import { Navbar } from "../components";

const Mainlayout = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Mainlayout;
