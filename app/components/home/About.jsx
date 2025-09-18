import React from "react";
import * as motion from "motion/react-client";
import { IconArrowRight } from "@tabler/icons-react";
import Container from "../common/Container";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      x: 10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section>
      <Container>
        <motion.div 
          className="pt-20 pb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-[rgb(17,22,56)] text-4xl font-normal font-tertiary"
            variants={titleVariants}
          >
            Welcome to <br />
            <motion.span 
              className="text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "backOut" }}
            >
              Bin Ali Medical Supplies LLC
            </motion.span>
          </motion.h2>
          
          <motion.hr 
            className="my-4"
            variants={itemVariants}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-10">
            <motion.div variants={itemVariants}>
              <p className="text-[rgb(17,22,56)] text-base leading-7 font-normal font-quaternary">
                Being the leading supplier of healthcare products in the region,
                Bin Ali Medical Supplies LLC deals with an extensive range of
                high-value products for the benefit of our loyal customer base.
                Surgical Products, Nursing Consumables, Anesthesia and
                Respiratory Products, Incontinence & Urology Products,
                Sterilization Products CSSD Products, Infection Control
                Products, Orthopedic Products, Emergency & First Aid Products,
                Laboratory Consumables, Wound Care Products, Radiology Products,
                Dental Consumables, IV Solutions, Linen, Uniforms & Shoes,
                Medical Furniture, Medical Equipments, Surgical & Dental
                Instruments – so goes the list.
              </p>
            </motion.div>
            <motion.div
              className=""
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  "Market Share",
                  "Inventory System",
                  "Financial Position",
                  "Product Quality",
                  "Customer loyalty",
                  "Organizational structure",
                  "Production/Distribution capacity",
                  "Customer Service",
                  "Global/regional expansion",
                  "Management Expertise",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <IconArrowRight className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;