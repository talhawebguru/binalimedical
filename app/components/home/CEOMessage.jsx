import React from "react";
import * as motion from "motion/react-client"

const CEOMessage = () => {
  return (
    <div className="bg-[url(/images/bg-ceo.png)] bg-cover bg-center bg-no-repeat py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <motion.h2
          className="font-quaternary text-3xl font-medium text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CEO'S MESSAGE
        </motion.h2>
        <motion.p
          className="font-quaternary text-base font-medium text-white leading-8 mt-5 lg:w-[820px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Dear Visitor ,
          <br />
          <br />
          Bin Ali Medical Supplies LLC is a reputed Medical Supplies Company
          based in United Arab Emirates built on a distinct vision . It is
          driven by a set of great values, which is amply reflected in every
          aspect of our business. Since its inception in the early 2000, BAMS
          has grown to be a leading supplier of a wide range of excellent
          products. Its powerful presence in the market is supported by a
          loyal customer base. Our commitment to care and excellence is
          reflected in our core values and beliefs. They give us the impetus
          to strive for excellence. They are the driving force behind
          everything we do. We continuously endeavor to provide better
          products and service. We envisage BAMS as an enduring world-class
          company engaged in manufacturing and distribution of superb quality
          Medical Supplies Dubai and healthcare products that will be
          affordable to everyone who seeks a quality-value balance. We will
          continually endeavor to be a socially responsible company. <br /><br /> Thank you
          for your interest in Bin Ali Medical Supplies Dubai. We look forward
          to the opportunity to serve you.
          <br />
          <br />
          <span className="text-3xl">OMAR ALI</span> <br />
          Bin Ali Medical Supplies LLC
        </motion.p>
      </div>
    </div>
  );
};

export default CEOMessage;