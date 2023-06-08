import { motion } from "framer-motion";
const HeroModule = () => {
  return (
    <>
      <div className="container mx-auto flex lg:flex-row flex-col justify-center lg:gap-[10rem] h-full pb-[2rem] items-center font-secondary">
        {/* Text box */}
        <div className="flex flex-col gap-8 xl:w-[40%] lg:w-[80%] w-full px-5 mt-[5rem] mb-[2rem] lg:my-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-8xl dark:text-white font-primary"
          >
            <span className="text-[#ff0000] mb-2">Buy more,</span> <br />
            <span className="text-green-400">With less.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-secondary mt-2 text-xl leading-7 text-gray-600"
          >
            Make your grocery budget go further with Ryva`s groceries. Join
            thousands of households and enjoy shopping now!
          </motion.p>
          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex gap-3 w-full my-3 lg:w-[70%] "
          >
            <a
              href="#about"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-full text-center"
            >
              <span className="w-full h-full bg-gradient-to-r from-[#ff8a05] via-[#ff5454] to-white group-hover:from-[#ff0000] group-hover:via-[#ff5454] group-hover:to-gray-200 absolute border-none"></span>
              <span className="w-full relative px-6 py-3 transition-all ease-out bg-[#ff0000] rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Learn more</span>
              </span>
            </a>
            <a
              href="#coming-soon"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-full text-center"
            >
              <span className="w-full h-full bg-gradient-to-r group-hover:from-[#000000] group-hover:via-[#000000] group-hover:to-gray-500 absolute border-none"></span>
              <span className="w-full relative px-6 py-3 transition-all ease-out bg-black rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Shop</span>
              </span>
            </a>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center relative"
        >
          <img
            src="/phone_img1.png"
            alt="phone_img"
            className="min-w-[200px] lg:w-[400px] w-[300px] object-contain relative z-10"
          />

          {/* <div className="inset-0 h-full w-full absolute bg-red-100 filter blur-3xl -z-0 opacity-50" /> */}
        </motion.div>
      </div>
    </>
  );
};

export default HeroModule;
