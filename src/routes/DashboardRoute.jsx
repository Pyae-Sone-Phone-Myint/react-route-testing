import DashboardLayout from "../components/dashboard-layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";

export const DashboardRoute = {
  element: <DashboardLayout />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ],
};
