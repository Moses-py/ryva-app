import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import MenuIcon from "@mui/icons-material/Menu";
import SvgLink from "./SvgLink";

import { useState } from "react";

const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <nav
        className="container mx-auto relative px-4 pt-10 flex justify-between items-center"
        id="navbar"
      >
        <a className="text-3xl font-bold" href="#">
          <img
            src="/ryva.png"
            alt="logo-img"
            className="w-[120px] object-contain"
          />
        </a>
        {/* Action button */}
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-gray-800 p-3"
            onClick={() => setOpenBar(true)}
          >
            <MenuIcon />
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-sm font-semibold text-gray-800 hover:text-gray-500"
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="text-gray-300">
            <SvgLink />
          </li>
          <li>
            <a className="text-sm font-semibold text-gray-800" href="#about">
              About Us
            </a>
          </li>
          <li className="text-gray-300">
            <SvgLink />
          </li>
          <li>
            <a
              className="text-sm font-semibold text-gray-800 hover:text-gray-500"
              href="#coming-soon"
            >
              Our shop
            </a>
          </li>

          <li className="text-gray-300">
            <SvgLink />
          </li>
          <li>
            <a
              className="text-sm font-semibold text-gray-800 hover:text-gray-500"
              href="#team"
            >
              Our Team
            </a>
          </li>

          <li className="text-gray-300">
            <SvgLink />
          </li>
          <li>
            <a
              className="text-sm font-semibold text-gray-800 hover:text-gray-500"
              href="#footer"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex justify-between items-center gap-5">
          <LinkedInIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </nav>
      {/* Mobile */}
      <div
        className={`navbar-menu relative z-50 bg-[url('/bg_gradient.png')] ${
          openBar ? "block" : "hidden"
        }`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold" href="#">
              <img
                src="/ryva.png"
                alt="logo-img"
                className="w-[120px] object-contain"
              />
            </a>
            <button className="navbar-close" onClick={() => setOpenBar(false)}>
              <svg
                className="h-6 w-6 text-gray-800 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  onClick={() => setOpenBar(false)}
                  className="block p-4 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-gray-800 rounded"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  onClick={() => setOpenBar(false)}
                  className="block p-4 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-gray-800 rounded"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  onClick={() => setOpenBar(false)}
                  className="block p-4 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-gray-800 rounded"
                  href="#coming-soon"
                >
                  Our Shop
                </a>
              </li>
              <li className="mb-1">
                <a
                  onClick={() => setOpenBar(false)}
                  className="block p-4 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-gray-800 rounded"
                  href="#team"
                >
                  Our Team
                </a>
              </li>
              <li className="mb-1">
                <a
                  onClick={() => setOpenBar(false)}
                  className="block p-4 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-gray-800 rounded"
                  href="#footer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <div className="flex justify-between items-center gap-5">
                <LinkedInIcon />
                <FacebookIcon />
                <TwitterIcon />
              </div>
            </div>
            <p className="my-4 text-xs text-center text-gray-800">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
