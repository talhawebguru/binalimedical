import React from "react";
import * as motion from "motion/react-client"
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import HeroBg from "@/public/images/sales.jpg";
import Container from "../common/Container";

const OurMarketeting = () => {

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
    <section className="bg-[rgba(7,135,253,0.11)] py-10">
      <motion.h2
        className="text-center text-[rgb(40,54,85)] font-primary text-2xl font-medium py-8 lg:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        OUR MARKETING & SALES TEAM
      </motion.h2>
      <Container>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 s sm:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-justify mb-8 font-primary text-base text-[rgb(40,54,85)] mt-5">
                The team is lead by Aji Mohammed Master in commerce with the
                support of 22 sales staff and 6 Marketing staff all of them are
                experienced and trained in their fields, with the product
                specialist Dr. Jaya Thomas masters in pharmacy degree having
                practical experience of 16 years. And with enough logistic staff
                and support.
              </p>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Installation of Equipment & Filing of documents.
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Equipment inventory Register (both soft copy & hard copy)
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Electrical Safety Analyzer Testing
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Vital Sign Simulation & Calibration Breakdown Service.
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Daily Checking of critical Equipment & its document filing.
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Maintenance Contracts follow up. (AMC & CMC)
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    PM Scheduling.
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    PM to be performed as per the standard procedure
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div className="place-self-center" variants={itemVariants}>
              <Image src={HeroBg} alt="sales team image" />
            </motion.div>
          </motion.div>
      </Container>
    </section>
  );
};

export default OurMarketeting;
