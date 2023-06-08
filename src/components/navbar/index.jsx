import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";

import MenuIcon from "@mui/icons-material/Menu";
import SvgLink from "./SvgLink";

import { useState } from "react";

const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <nav
        className="container mx-auto relative px-6 pt-[3rem] flex justify-between items-center"
        id="navbar"
      >
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold"
          href="#"
        >
          <img
            src="/ryva.png"
            alt="logo-img"
            className="w-[120px] object-contain"
          />
        </motion.a>
        {/* Action button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden"
        >
          <button
            className="navbar-burger flex items-center text-gray-800 p-3"
            onClick={() => setOpenBar(true)}
          >
            <MenuIcon />
          </button>
        </motion.div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-3">
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <a
              className="text-sm font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-orange-700 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent"
              href="#home"
            >
              Home
            </a>
          </motion.li>
          <li className="text-gray-300">
            <SvgLink />
          </li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <a
              className="text-sm font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-orange-700 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent"
              href="#about"
            >
              About Us
            </a>
          </motion.li>
          <li className="text-gray-300">
            <SvgLink />
          </li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <a
              className="text-sm font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-orange-700 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent"
              href="#coming-soon"
            >
              Our shop
            </a>
          </motion.li>

          <li className="text-gray-300">
            <SvgLink />
          </li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <a
              className="text-sm font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-orange-700 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent"
              href="#social-impact"
            >
              Social Impact
            </a>
          </motion.li>

          <li className="text-gray-300">
            <SvgLink />
          </li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.1 }}
          >
            <a
              className="text-sm font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-orange-700 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent"
              href="#footer"
            >
              Contact
            </a>
          </motion.li>
        </ul>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.3 }}
          className="hidden lg:flex justify-between items-center gap-5"
        >
          <a
            href="https://www.linkedin.com/in/ryva-groceries-03715a254/"
            target="__blank"
            className=""
          >
            <LinkedInIcon sx={{ color: "#111", opacity: 0.7 }} />
          </a>
          <a href="">
            <InstagramIcon sx={{ color: "#111", opacity: 0.7 }} />
          </a>
          <a
            href="https://twitter.com/ryva_groceries?t=E1CtCM3SQQqB2gXkD8GnqA&s=09"
            target="__blank"
          >
            <TwitterIcon sx={{ color: "#111", opacity: 0.7 }} />
          </a>
          <a href="tel:09039366017">
            <PhoneIcon sx={{ color: "#111", opacity: 0.7 }} />
          </a>
        </motion.div>
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
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mr-auto text-3xl font-bold"
              href="#"
            >
              <img
                src="/ryva.png"
                alt="logo-img"
                className="w-[120px] object-contain"
              />
            </motion.a>
            <button className="navbar-close" onClick={() => setOpenBar(false)}>
              <svg
                className="h-6 w-6 text-gray-800 cursor-pointer hover:bg-gradient-to-r hover:from-orange-700 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent"
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
            <motion.ul>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-1"
              >
                <motion.a
                  onClick={() => setOpenBar(false)}
                  className="block p-4 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-gray-800 rounded"
                  href="#home"
                >
                  Home
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-1"
              >
                <a
                  onClick={() => setOpenBar(false)}
                  className="block p-4 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-gray-800 rounded"
                  href="#about"
                >
                  About Us
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-1"
              >
                <a
                  onClick={() => setOpenBar(false)}
                  className="block p-4 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-gray-800 rounded"
                  href="#coming-soon"
                >
                  Our Shop
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-1"
              >
                <a
                  onClick={() => setOpenBar(false)}
                  className="block p-4 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-gray-800 rounded"
                  href="#social-impact"
                >
                  Social Impact
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="mb-1"
              >
                <a
                  onClick={() => setOpenBar(false)}
                  className="block p-4 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-gray-800 rounded"
                  href="#footer"
                >
                  Contact
                </a>
              </motion.li>
            </motion.ul>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="mt-auto"
          >
            <div className="pt-6">
              <div className="flex justify-between items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/ryva-groceries-03715a254/"
                  target="__blank"
                  className=""
                >
                  <LinkedInIcon sx={{ color: "gray" }} />
                </a>
                <a href="/">
                  <InstagramIcon sx={{ color: "gray" }} />
                </a>
                <a
                  href="https://twitter.com/ryva_groceries?t=E1CtCM3SQQqB2gXkD8GnqA&s=09"
                  target="__blank"
                >
                  <TwitterIcon sx={{ color: "gray" }} />
                </a>
                <a href="tel:09039366017">
                  <PhoneIcon sx={{ color: "gray" }} />
                </a>
              </div>
            </div>
            <p className="my-4 text-xs text-center text-gray-800">
              <span>Copyright © 2023</span>
            </p>
          </motion.div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
