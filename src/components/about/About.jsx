const features = [
  {
    name: "We Source",
    description:
      "We take our time to source for good quality products but close to their best before dates.",
    icon: "/source.png",
  },
  {
    name: "We Inspect",
    description:
      "Our quality control team inspects the products with care to ensure all products are still very much safe for consumption.",
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
      "We make these products available to our customers via our online channels and our walk-in stores.",
    icon: "/sale.png",
  },
];

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="subheading flex gap-2 justify-center items-center my-5">
            <h3 className="text-gray-400 font-bold text-2xl">
              What we do and How we do it
            </h3>
          </div>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 ">
            Our goal is to curb food waste and reduce land pollution. To do this
            this, we offer great deals on salvage products.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-bold leading-7 text-gray-900">
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
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
