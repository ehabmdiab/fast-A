import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
