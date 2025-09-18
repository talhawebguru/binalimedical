import React from "react";
import * as motion from "motion/react-client"
import Container from "../common/Container";

const OurValues = () => {
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
    <section>
      <Container>
        <motion.h2
          className="text-center text-[rgb(31,43,118)] font-primary text-2xl font-medium my-12 lg:my-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          OUR VALUES & PRINCIPLES
        </motion.h2>
        <div className="py-1 mb-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:grid-cols-2 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <h3 className="text-[rgb(0,125,223)] font-primary text-xl font-medium mb-5">
              Customers
            </h3>
            <p className="text-[rgb(17,22,56)] text-base text-center">
              Our customers come first. They deserve the best of what we can
              offer.
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <h3 className="text-[rgb(0,125,223)] font-primary text-xl font-medium mb-5">
              Market
            </h3>
            <p className="text-[rgb(17,22,56)] text-base text-center">
              We are dedicated to achieving enduring success as a global player
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <h3 className="text-[rgb(0,125,223)] font-primary text-xl font-medium mb-5">
              Philosophy
            </h3>
            <p className="text-[rgb(17,22,56)] text-base text-center">
              Our leadership is dedicated to the philosophy that holds values and principles above profit.
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <h3 className="text-[rgb(0,125,223)] font-primary text-xl font-medium mb-5">
              Technology
            </h3>
            <p className="text-[rgb(17,22,56)] text-base text-center">
              We will continuously strive to harness the best available technologies to achieve our goals
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <h3 className="text-[rgb(0,125,223)] font-primary text-xl font-medium mb-5">
              Products & Services
            </h3>
            <p className="text-[rgb(17,22,56)] text-base text-center">
              We operate to find/ produce the best medical products and to provide dedicated service to society to ensure their health and life protection
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <h3 className="text-[rgb(0,125,223)] font-primary text-xl font-medium mb-5 text-center">
              Corporate Social Responsibility
            </h3>
            <p className="text-[rgb(17,22,56)] text-base text-center">
              We are committed to contributing to the society and the environment by being a considerate and responsible corporate citizen
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <h3 className="text-[rgb(0,125,223)] font-primary text-xl font-medium mb-5">
              Standards Of Conduct
            </h3>
            <p className="text-[rgb(17,22,56)] text-base text-center">
              We expect our employees to show the highest degree of ethics in all aspects of our business. We greatly value and respect personnel and professional integrity.
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <h3 className="text-[rgb(0,125,223)] font-primary text-xl font-medium mb-5">
              Growth & Profitability
            </h3>
            <p className="text-[rgb(17,22,56)] text-base text-center">
              We will conduct our business ethically and prudently to fulfill our stakeholder’s expectations
            </p>
          </motion.div>
        </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default OurValues;