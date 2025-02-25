import { RouteObject } from "react-router-dom";
import HomePage from "../Pages/home/Home";
import PricingPage from "../Pages/pricing/Pricing";
import Layout from "../components/Layout";
import TechnologyPage from "../Pages/technology-page/Technology";
import ContactPage from "../Pages/contact-page/Contact";
import BlogPostPage from "../Pages/blog-post/BlogPost";
import AboutPage from "../Pages/about-us-page/About";
import AgentsPage from "../Pages/agents/Agents";
import BlogPage from "../Pages/blog/Blog";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "technology",
        element: <TechnologyPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog-post",
        element: <BlogPostPage />,
      },
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
