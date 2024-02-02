import React from "react";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className=" w-[80%] mx-auto">
      {children}
      <Outlet />
    </div>
  );
};

export default Layout;
