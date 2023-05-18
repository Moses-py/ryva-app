const ComingSoon = () => {
  return (
    <>
      <div
        className="bg-gray-50 leading-normal tracking-normal font-secondary"
        id="coming-soon"
      >
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="subheading flex gap-2 justify-center items-center my-5">
                <h3 className="text-gray-400 font-bold text-2xl">Our Shop</h3>
              </div>
              <h1 className="text-4xl font-bold mb-6 font-primary">
                We are working hard to bring you something amazing
              </h1>
              <p className="mt-2 text-lg leading-7 text-gray-600 mb-12">
                Stay tuned to find out when we launch
              </p>
            </div>
          </div>
        </section>

        {/* Features section */}

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 font-primary">
                What to expect
              </h2>
              {/* <p className="mt-2 text-lg leading-7 text-gray-600 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec orci quis justo aliquam euismod eget a leo. Sed eget orci
                feugiat, porttitor nibh vel, faucibus mauris.
              </p> */}
            </div>
            <div className="flex flex-wrap -mx-4 mt-12">
              {/* First section */}
              <div className="w-full md:w-1/3 px-4 mb-8 rounded-lg">
                <div className=" relative rounded-lg bg-white shadow-md p-8 bg-[url('https://images.unsplash.com/photo-1553531889-56cc480ac5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeSUyMHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-center bg-no-repeat bg-cover">
                  <div className="overlay absolute w-full h-full bg-[#111111] opacity-50 top-0 left-0" />
                  <div className="relative z-10 text-white">
                    <div className="text-4xl font-bold text-purple-400 mb-4">
                      01
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Great Quality, Great Discount.
                    </h3>
                    <p className=" mb-4 mt-2 text-lg leading-7 text-white">
                      Shop for your favorite groceries and enjoy discounted
                      prices while we guarantee the quality of our products.
                    </p>
                  </div>
                </div>
              </div>
              {/* Second */}
              <div className="w-full md:w-1/3 px-4 mb-8 rounded-lg">
                <div className=" relative rounded-lg bg-white shadow-md p-8 bg-[url('https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob3AlMjBhbmQlMjBvbmxpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')] bg-center bg-no-repeat bg-cover">
                  <div className="overlay absolute w-full h-full bg-[#111111] opacity-50 top-0 left-0" />
                  <div className="relative z-10 text-white">
                    <div className="text-4xl font-bold text-green-400 mb-4">
                      02
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Ease of Access</h3>
                    <p className="text-white mb-4 mt-2 text-lg leading-7 ">
                      Our products are readily available at our{" "}
                      <strong>physical stores</strong> and{" "}
                      <strong> our online platforms.</strong>
                    </p>
                  </div>
                </div>
              </div>
              {/* Third */}
              <div className="w-full md:w-1/3 px-4 mb-8 rounded-lg">
                <div className=" relative rounded-lg bg-white shadow-md p-8 bg-[url('https://plus.unsplash.com/premium_photo-1661726713231-7f3c4e1e7e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc3QlMjBkZWxpdmVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-center bg-no-repeat bg-cover">
                  <div className="overlay absolute w-full h-full bg-[#111111] opacity-50 top-0 left-0" />
                  <div className="relative z-10 text-white">
                    <div className="text-4xl font-bold text-orange-400 mb-4">
                      03
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
                    <p className="text-white mt-2 text-lg leading-7  mb-4">
                      Our agents are commited to getting your products to you
                      quickly and conveniently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComingSoon;
