import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)]">
        <div className="h-screen bg-[url('/images/hero-bg.jpg')] bg-cover  flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <h1 className="font-secondary text-5xl font-semibold text-white md:w-[650px] leading-[60px]">
              One of the Leading Medical Suppliers in{" "}
              <span className="text-secondary font-bold">UAE</span>
            </h1>
            <p className="font-secondary text-base text-white font-normal mt-5 md:w-[650px]">
              Being the leading supplier of healthcare products in the region,
              Bin Ali Medical Supplies LLC deals with an extensive range of
              high-value products for the benefit of our loyal customer base.
            </p>
            <button className="bg-primary mt-10 flex justify-center items-center text-white font-primary text-base font-normal leading-6 py-1.5 px-3 rounded-full">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
