import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-black font-secondary"
      id="footer"
    >
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full text-7xl font-bold"
        >
          <h1 className="w-full md:w-2/3 text-4xl lg:text-6xl xl:text-8xl pt-[3rem] font-primary">
            How can we help you? Get in touch.
          </h1>
        </motion.div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-44 pt-6 md:pt-0"
          >
            <a
              className="bg-[#ff0000] justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
              href="tel:09039366017"
            >
              Contact us
            </a>
          </motion.div>
        </div>
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex mt-24 mb-12 md:flex-row flex-col gap-5 justify-between md:items-center items-start"
          >
            <div className="">
              <img
                src="/ryva.png"
                alt="logo-img"
                className="w-[150px] object-contain"
              />
            </div>
            <a
              href="#home"
              className="block cursor-pointer text-white hover:text-white uppercase"
            >
              Home
            </a>
            <a
              href="#about"
              className="block cursor-pointer text-white hover:text-white uppercase"
            >
              About Us
            </a>
            <a
              href="#coming-soon"
              className="block cursor-pointer text-white hover:text-white uppercase"
            >
              Shop
            </a>
            <a
              href="#social-impact"
              className="block cursor-pointer text-white hover:text-white uppercase"
            >
              Social impact
            </a>
            <a
              href="#footer"
              className="block cursor-pointer text-white hover:text-white uppercase"
            >
              Contact
            </a>
            <div className="flex flex-row space-x-8 items-center justify-between">
              <div className="flex justify-between items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/ryva-groceries-03715a254/"
                  target="__blank"
                  className=""
                >
                  <LinkedInIcon sx={{ color: "white" }} />
                </a>
                <a
                  href="https://instagram.com/ryva_groceries?igshid=ZDc4ODBmNjlmNQ=="
                  target="__blank"
                >
                  <InstagramIcon sx={{ color: "white" }} />
                </a>
                <a
                  href="https://twitter.com/ryva_groceries?t=E1CtCM3SQQqB2gXkD8GnqA&s=09"
                  target="__blank"
                >
                  <TwitterIcon sx={{ color: "white" }} />
                </a>
                <a href="tel:09039366017">
                  <PhoneIcon sx={{ color: "white" }} />
                </a>
              </div>
            </div>
          </motion.div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-12 text-white">
            Copyright © 2023 Ryva
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
