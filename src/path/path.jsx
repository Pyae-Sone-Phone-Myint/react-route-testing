import { createBrowserRouter } from "react-router-dom";
import { ClientRoute } from "../routes/ClientRoute";
import { DashboardRoute } from "../routes/DashboardRoute";

const route = [{ ...ClientRoute }, { ...DashboardRoute }];

export const router = createBrowserRouter(route);
