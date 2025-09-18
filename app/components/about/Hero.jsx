import React from "react";
import * as motion from "motion/react-client";
import Container from "../common/Container";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[linear-gradient(173.07deg,rgba(227,242,255,0.78)_24.32%,hsla(0,0%,100%,0)_91.12%)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 xl:gap-36 md:gap-20">
          <motion.div
            className="border border-[rgb(7,135,253)] bg-white rounded-2xl p-4 h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-[rgb(0,125,223)] font-primary text-2xl"
              variants={itemVariants}
            >
              WHO WE ARE{" "}
            </motion.h1>
            <motion.p
              className="text-[rgb(17,22,56)] font-primary text-base leading-6 mt-2"
              variants={itemVariants}
            >
              Bin Ali Medical Supplies LLC was established in January 2002 with
              its headquarters in Abu Dhabi and two branches in Dubai and
              Al-Ain. The Company soon grew from a promising business enterprise
              to the favored supplier of affordable and excellent quality
              medical products to the regionals medical and scientific
              community. Thanks to our unique business philosophy and amazing
              customers’ support, today, Bin Ali stands tall as the leading
              supplier chain of international-quality healthcare products in the
              UAE. Bin Ali Medical Supplies is built on certain values and core
              principles that make us much more than a business concern. A
              socially committed and responsible team of professionals, we fully
              realise the importance of having to deliver the very best of
              products so that our customers would stand to benefit from it. The
              reason why we are the preferred partner of many major Government
              and private hospitals, clinics, and pharmacies across Middle East,
              is no secret. It is the result of our honest approach and
              transparent deals, with no compromise whatsoever in quality.
            </motion.p>
            <motion.h2
              className="text-[rgb(0,125,223)] font-primary text-2xl mt-4"
              variants={itemVariants}
            >
              OUR VISION
            </motion.h2>
            <motion.p
              className="text-[rgb(17,22,56)] font-primary text-base leading-6 mt-2"
              variants={itemVariants}
            >
              Aspire to become the global industry leader by providing
              innovative, practical and affordable healthcare solutions that
              would significantly improve people's life across the world.
            </motion.p>
          </motion.div>
          <motion.div
            className="border border-[rgb(7,135,253)] bg-white rounded-2xl p-4 h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ height: "100%" }}
          >
            <motion.h2
              className="text-[rgb(0,125,223)] font-primary text-2xl"
              variants={itemVariants}
            >
              OUR MISSION
            </motion.h2>
            <motion.p
              className="text-[rgb(17,22,56)] font-primary text-base leading-6 mt-2"
              variants={itemVariants}
            >
              Persistently try hard to make BAMS a globally recognised
              healthcare company by focusing stringently on the core values on
              which our foundation is built. Not just fulfill, but excel
              customer expectations by endowing unparalleled customer support.
              Deploy state-of-the-art and superior technologies, always. Uphold
              the ethical values that make our business sector special.
              Safeguard the rights and privileges of our investors and
              employees. Remain responsive to societal and environmental
              concerns by concentrating on sustainable growth.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
