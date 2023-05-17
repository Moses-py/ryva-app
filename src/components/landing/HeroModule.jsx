const HeroModule = () => {
  return (
    <>
      <div className="container mx-auto flex lg:flex-row flex-col justify-center lg:gap-[10rem] h-full pb-[2rem] items-center">
        {/* Text box */}
        <div className="flex flex-col gap-8 xl:w-[40%] lg:w-[80%] w-full px-5 mt-[5rem] mb-[2rem] lg:my-0">
          <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-8xl dark:text-white">
            <span className="text-[#ff0000]">Buy more,</span> <br />
            <span className="text-green-400">with less.</span>
          </h1>
          <p className="font-secondary text-[17px] leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            at dolorum impedit aliquam, a ipsam magnam harum exercitationem
            delectus consectetur nulla commodi tempore odio similique nam
            dignissimos sed atque laboriosam!
          </p>
          {/* buttons */}
          <div className="flex gap-3 w-full my-3 lg:w-[70%] ">
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
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/phone_img1.png"
            alt="phone_img"
            className="min-w-[200px] lg:w-[400px] w-[300px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default HeroModule;
