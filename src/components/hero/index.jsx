import HeroModule from "../landing/HeroModule";
import Navbar from "../navbar";

const Hero = () => {
  return (
    <>
      <div
        className="w-full h-full max-h-full bg-[url('/bg_gradient.png')]"
        id="home"
      >
        <Navbar />
        <HeroModule />
      </div>
    </>
  );
};

export default Hero;
