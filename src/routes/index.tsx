import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/Dashboard/DashboardPage.tsx";
import Layout from "../shared/components/layout/Layout.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
