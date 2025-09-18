"use client"
import React from "react";
import { motion } from "motion/react";
import Container from "../components/common/Container";
import ProductCard from "../components/product/ProductCard";

const page = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    }
  }

  return (
    <section className="bg-[rgb(227,242,255)]">
      <Container>
        <div className="py-10">
          <motion.h1 
            className="text-[rgb(40,54,85)] font-primary font-medium text-3xl"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Our Products
          </motion.h1>
          <motion.p 
            className="text-[rgb(40,54,85)] font-primary font-normal text-base mt-4"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            BAMS offers a wide range of high quality products in healthcare. We
            would like to name some of our major companies which we distribute
            in the U.A.E market.
          </motion.p>
          <ProductCard />
        </div>
      </Container>
    </section>
  );
};

export default page;
