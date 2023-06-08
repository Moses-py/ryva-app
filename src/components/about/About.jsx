import { motion } from "framer-motion";
const features = [
  {
    name: "We Source",
    description:
      "We work tirelessly to a source wide range of high quality grocery items including pantry staples, snacks and beverages from manufacturers, retailers and distributors.",
    icon: "/source.png",
  },
  {
    name: "We Inspect",
    description:
      "We prioritize rigirous quality control methods to ensure that the salvaged items meet our strict standards.",
    icon: "/inspect.png",
  },
  {
    name: "We Acquire",
    description: `After these products pass inspection, they are delivered to Ryva. We in turn sell these products to our customers at DISCOUNTED PRICES.`,
    icon: "/acquire.png",
  },
  {
    name: "We Sell",
    description:
      "We make these products available to our customers via our online channels.",
    icon: "/sale.png",
  },
];

export default function About() {
  return (
    <div
      className="bg-white py-16 md:py-32  bg-[url('/curve.svg')] bg-cover bg-no-repeat"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading flex gap-2 justify-center items-center my-5"
          >
            <h3 className="bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent font-bold text-2xl">
              What we do and How we do it
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-2 text-4xl font-bold tracking-tight text-gray-900 "
          >
            Our goal is to curb food waste and reduce land pollution. To do this
            this, we offer great deals on salvage products.
          </motion.p>
        </div>
        <motion.div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                key={feature.name}
                className="relative pl-16"
              >
                <dt className="text-xl font-bold leading-7 bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <img
                      src={feature.icon}
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
