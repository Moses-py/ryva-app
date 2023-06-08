import About from "./components/about/About";
import ComingSoon from "./components/coming-soon/ComingSoon";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero";
import SocialImpact from "./components/impact/SocialImpact";
import { Progress } from "./components/scrollProgress/Progress";
// import Team from "./components/team/Team";

function App() {
  return (
    <>
      <Progress />
      <Hero />
      <About />
      <SocialImpact />
      <ComingSoon />
      <Footer />
    </>
  );
}

export default App;
