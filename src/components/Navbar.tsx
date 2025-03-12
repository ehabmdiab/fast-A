import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import { useRelume } from "../hooks/useRelume";
import { NavLink, useNavigate } from "react-router";

export function Navbar() {
  const useActive = useRelume();
  const navigate = useNavigate();
  return (
    <section
      id="relume"
      className="flex w-full z-50 absolute items-center bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <div className="flex z-10 w-full max-w-[200px] items-center justify-center">
            <NavLink to="/" className="w-full">
              <img src="/logo.png" className="w-full" alt="Logo image" />
            </NavLink>
          </div>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <NavLink
            to="/technology"
            className="block py-3 !neutral-lightest text-md neutral-lightest first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Platform
          </NavLink>

          <NavLink
            to="/about"
            className="block py-3 text-md !neutral-lightest first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-3 text-md !neutral-lightest first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Contact Us
          </NavLink>
          {/* <NavLink
            to="/blog"
            className="block py-3 text-md !neutral-lightest first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Blog
          </NavLink> */}
          {/* <NavLink
            to="/blog-post"
            className="block py-3 text-md first:pt-7 !neutral-lightest lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Blog posts
          </NavLink> */}
          {/* <NavLink
            to="/pricing"
            className="block py-3 text-md first:pt-7 !neutral-lightest lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            pricing

          </NavLink> */}
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
            <Button
              title="Agent Portal"
              variant="secondary"
              size="sm"
              onClick={() => {
                navigate("/agents");
              }}
              className="w-full bg-black/30 backdrop-blur-sm shadow-xl hover:bg-black/40 transition-all duration-300"
            >
              Agent Portal
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
