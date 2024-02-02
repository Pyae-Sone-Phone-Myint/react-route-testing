import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className=" mx-auto w-[60%]">
      {children}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
