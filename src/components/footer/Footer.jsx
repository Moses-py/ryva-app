import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-black font-secondary"
      id="footer"
    >
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full md:w-2/3 text-4xl lg:text-6xl xl:text-8xl pt-[3rem] font-primary">
            How can we help you. get in touch
          </h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            numquam adipisci nesciunt ipsum aut dolore natus laboriosam deleniti
            veniam facere.
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <a className="bg-[#ff0000] justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
              Contact us
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 md:flex-row flex-col gap-5 justify-between md:items-center items-start">
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
              AboutvUs
            </a>
            <a
              href="#coming-soon"
              className="block cursor-pointer text-white hover:text-white uppercase"
            >
              Shop
            </a>
            <a
              href="#team"
              className="block cursor-pointer text-white hover:text-white uppercase"
            >
              Our Team
            </a>
            <a
              href="#footer"
              className="block cursor-pointer text-white hover:text-white uppercase"
            >
              Contact
            </a>
            <div className="flex flex-row space-x-8 items-center justify-between">
              <div className="flex justify-between items-center gap-5">
                <LinkedInIcon />
                <FacebookIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
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
