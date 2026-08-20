import {createBrowserRouter} from "react-router-dom";
import DashboardPage from "../pages/Dashboard/DashboardPage.tsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardPage />
  }
])


export default router;

