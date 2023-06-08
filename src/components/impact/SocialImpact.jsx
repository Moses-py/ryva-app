import { motion } from "framer-motion";

const impacts = [
  {
    name: "Reducing food waste",
    description:
      "With our amazing discount offers, less food items end up in land fills.",
    icon: "/food-waste.png",
  },
  {
    name: "Zero hunger",
    description:
      "By offering affordable food items, we make nutritious foods more accessible to individuals and communities, thereby eliminating hunger and ensuring food security.",
    icon: "/hunger-strike.png",
  },
  {
    name: "Economic growth",
    description: `We create employment opportunities and contribute to the local economy, thus promoting inclusive economic growth.`,
    icon: "/economic.png",
  },
  {
    name: "Climate action",
    description:
      "We help mitigate climate change by preventing food from ending up in land fills. We contribute to climate action by promoting more sustainable resource management.",
    icon: "/climate.png",
  },
];

const SocialImpact = () => {
  return (
    <>
      <div
        id="social-impact"
        className="mx-auto max-w-2xl lg:text-center my-[4rem]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="subheading flex gap-2 justify-center items-center my-5"
        >
          <h3 className="bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent font-bold text-3xl">
            Social Impact
          </h3>
        </motion.div>
      </div>
      <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex mb-[5rem] px-6 bg-[url('/Sprinkle.svg')] bg-cover bg-no-repeat">
        {impacts.map((impact, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              key={index}
              className="w-full px-4 py-8 mt-6 bg-white rounded-lg border border-gray=300 sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-white border border-gray-300 rounded-md">
                  <img
                    src={impact.icon}
                    alt="impact-icon"
                    className="h-[30px] w-[30px]"
                  />
                </div>
              </div>
              <h3 className="py-4 text-xl font-bold leading-7 bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent sm:text-xl dark:text-white">
                {impact.name}
              </h3>
              <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                {impact.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SocialImpact;
