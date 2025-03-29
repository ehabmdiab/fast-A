import { RouteObject } from "react-router-dom";
import HomePage from "../Pages/Home";
// import PricingPage from "../Pages/Pricing";
import Layout from "../components/Layout";
import TechnologyPage from "../Pages/Technology";
import ContactPage from "../Pages/Contact";
// import BlogPostPage from "../Pages/BlogPost";
import AboutPage from "../Pages/About";
import AgentsPage from "../Pages/Agents";
// import BlogPage from "../Pages/Blog";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: "pricing",
      //   element: <PricingPage />,
      // },
      {
        path: "technology",
        element: <TechnologyPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      // {
      //   path: "blog",
      //   element: <BlogPage />,
      // },
      // {
      //   path: "blog-post",
      //   element: <BlogPostPage />,
      // },

      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "agents",
        element: <AgentsPage />,
      },
    ],
  },
];
