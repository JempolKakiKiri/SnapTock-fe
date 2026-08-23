import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/Dashboard/DashboardPage.tsx";
import Layout from "../shared/components/layout/Layout.tsx";
import ScanPage from "../pages/Scan/ScanPage.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/scan",
        element: <ScanPage />,
      },
    ],
  },
]);

export default router;
