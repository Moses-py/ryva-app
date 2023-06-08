import { motion, useScroll, useSpring } from "framer-motion";

export const Progress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 h-[10px] bg-gradient-to-r from-red-600 to-yellow-200 origin-[0%] z-10"
      style={{ scaleX }}
    />
  );
};
