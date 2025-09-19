"use client"
import React from "react";
import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import Container from "../common/Container";

const BioMedical = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
        delayChildren: 0.2
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="bg-[url('/images/bio-bg.jpg')] bg-cover bg-center bg-no-repeat py-14 overflow-x-hidden">
      <Container>
          <motion.h2
            className="text-white font-primary text-2xl font-medium text-center"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            OUR BIOMEDICAL TEAM
          </motion.h2>
          <motion.p
            className="text-justify text-white mb-8 font-primary text-base mt-5"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            The team is lead by Vineeth Nair Senior Biomedical Engineer with the
            support of 2 Biomedical Technicians all of them are experienced and
            trained in handling Critical Care Equipment, Operation Theatre
            Equipment & Lab Equipment. The main activities of the BME department
            includes
          </motion.p>
          <div className="sm:px-5">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                "Installation of Equipment & Filing of documents.",
                "PM Scheduling.",
                "Equipment inventory Register (both soft copy & hard copy)",
                "PM to be performed as per the standard procedure",
                "Electrical Safety Analyzer Testing",
                "Training of Paramedic Staffs.",
                "Vital Sign Simulation & Calibration Breakdown Service.",
                "Condemnation of Equipment.",
                "Daily Checking of critical Equipment & its document filing.",
                "Stocking of Spares & Accessories.",
                "Maintenance Contracts follow up. (AMC & CMC)",
              ].map((item, index) => (
                <motion.div className="flex items-center gap-3" key={index} variants={itemVariants}>
                  <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                    <IconArrowRight className="text-white" />
                  </div>
                  <p className="font-primary text-base text-white font-normal">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
      </Container>
    </section>
  );
};

export default BioMedical;
