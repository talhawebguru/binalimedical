import React from "react";
import * as motion from "motion/react-client";
import Container from "../common/Container";

const Hero = () => {
  return (
    <section className="top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)]">
      <div className="h-screen bg-[url('/images/hero-bg.jpg')] bg-cover flex items-center">
        <Container>
          <motion.h1
            className="font-secondary text-3xl sm:text-5xl font-semibold text-white w-[85%]  md:w-[650px] md:leading-[60px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            One of the Leading Medical Suppliers in{" "}
            <span className="text-secondary font-bold">UAE</span>
          </motion.h1>
          <motion.p
            className="font-secondary text-base text-white font-normal mt-5 md:w-[650px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Being the leading supplier of healthcare products in the region,
            Bin Ali Medical Supplies LLC deals with an extensive range of
            high-value products for the benefit of our loyal customer base.
          </motion.p>
          <motion.button
            className="bg-primary mt-10 flex justify-center items-center text-white font-primary text-base font-normal leading-6 py-1.5 px-3 rounded-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Read More
          </motion.button>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
