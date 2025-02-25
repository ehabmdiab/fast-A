import { RouteObject } from "react-router-dom";
import HomePage from "../Pages/home/Home";
import PricingPage from "../Pages/pricing/Pricing";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  //   {
  //     path: "/dashboard",
  //     element: <DashboardPage />,
  //   },
  //   {
  //     path: "/profile",
  //     element: <ProfilePage />,
  //   },
  //   {
  //     path: "/settings",
  //     element: <SettingsPage />,
  //   },
];
