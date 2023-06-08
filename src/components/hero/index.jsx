import HeroModule from "../landing/HeroModule";
import Navbar from "../navbar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Hero = () => {
  return (
    <>
      <div
        className="lg:flex flex-col relative w-full h-full lg:h-[100vh] max-h-full bg-[url('/bg-gradient.png')] lg:bg-[url('/blob2.svg')] bg-no-repeat bg-cover bg-center"
        id="home"
      >
        <div>
          <Navbar />
        </div>

        <div>
          <HeroModule />
        </div>

        <button
          type="button"
          className="hidden lg:block absolute bottom-[2rem] left-[50%] text-lg"
          disabled
        >
          <a href="#about">
            <ArrowDownwardIcon
              className="animate-bounce"
              sx={{ fontSize: "2rem", color: "red" }}
            />
          </a>
        </button>
      </div>
    </>
  );
};

export default Hero;
