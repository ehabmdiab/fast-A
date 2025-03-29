import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <NavLink to="/" className="lg:justify-self-start">
            <img
              src="/footer-logo.png"
              alt="Logo image"
              className="inline-block"
            />
          </NavLink>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li className="font-semibold">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to="/technology">Platform</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to="/agents">Agents</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            {/* <li className="font-semibold">
              <a href="#">Blog</a>
            </li> */}
          </ul>
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            <a href="https://www.facebook.com/FastAutomate" target="_blank">
              <BiLogoFacebookCircle className="size-6" />
            </a>
            <a href="https://www.instagram.com/fastautomate/" target="_blank">
              <BiLogoInstagram className="size-6" />
            </a>
            <a href="https://x.com/FastAutomate" target="_blank">
              <FaXTwitter className="size-6 p-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/fastautomate/"
              target="_blank"
            >
              <BiLogoLinkedinSquare className="size-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <p className="mt-8 text-black md:mt-0">
              © {currentYear} FastAutomate. All rights reserved.
            </p>
          </ul>
        </div>
      </div>
    </footer>
  );
}
