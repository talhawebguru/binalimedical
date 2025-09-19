"use client"
import React from "react";
import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import HeroBg from "@/public/images/sales.jpg";
import Container from "../common/Container";

const OurMarketeting = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="bg-[rgba(7,135,253,0.11)] py-10 overflow-x-hidden">
      <Container>
        <motion.h2
          className="text-center text-[rgb(40,54,85)] font-primary text-2xl font-medium py-8 lg:py-10"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          OUR MARKETING & SALES TEAM
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 s sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div variants={textVariants}>
              <motion.p 
                className="text-justify mb-8 font-primary text-base text-[rgb(40,54,85)] mt-5"
                variants={textVariants}
              >
                The team is lead by Aji Mohammed Master in commerce with the
                support of 22 sales staff and 6 Marketing staff all of them are
                experienced and trained in their fields, with the product
                specialist Dr. Jaya Thomas masters in pharmacy degree having
                practical experience of 16 years. And with enough logistic staff
                and support.
              </motion.p>
              <motion.div variants={listVariants}>
                <motion.div 
                  className="flex items-center gap-3 mb-2"
                  variants={listItemVariants}
                >
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Installation of Equipment & Filing of documents.
                  </p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 mb-2"
                  variants={listItemVariants}
                >
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Equipment inventory Register (both soft copy & hard copy)
                  </p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 mb-2"
                  variants={listItemVariants}
                >
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Electrical Safety Analyzer Testing
                  </p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 mb-2"
                  variants={listItemVariants}
                >
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Vital Sign Simulation & Calibration Breakdown Service.
                  </p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 mb-2"
                  variants={listItemVariants}
                >
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Daily Checking of critical Equipment & its document filing.
                  </p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 mb-2"
                  variants={listItemVariants}
                >
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    Maintenance Contracts follow up. (AMC & CMC)
                  </p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 mb-2"
                  variants={listItemVariants}
                >
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    PM Scheduling.
                  </p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 mb-2"
                  variants={listItemVariants}
                >
                  <div className="bg-primary flex items-center justify-center w-6 h-6 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-[rgb(17,22,66)] font-normal">
                    PM to be performed as per the standard procedure
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="place-self-center" variants={imageVariants}>
              <Image src={HeroBg} alt="sales team image" />
            </motion.div>
          </motion.div>
      </Container>
    </section>
  );
};

export default OurMarketeting;
