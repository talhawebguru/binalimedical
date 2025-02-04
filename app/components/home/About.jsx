import React from "react";
import * as motion from "motion/react-client"
import { FaArrowRightLong } from "react-icons/fa6";


const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="pt-20 pb-32">
          <motion.h2
            className="text-[rgb(17,22,56)] text-4xl font-normal font-tertiary"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <br />
            <span className="text-primary">Bin Ali Medical Supplies LLC</span>
          </motion.h2>
          <hr className="my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
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
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
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
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;