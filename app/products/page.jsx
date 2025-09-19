"use client"
import React from "react";
import { motion } from "motion/react";
import Container from "../components/common/Container";
import ProductCard from "../components/product/ProductCard";

const page = () => {
  return (
    <section className="bg-[rgb(227,242,255)] overflow-x-hidden">
      <Container>
        <div className="py-10">
          <motion.h1 
            className="text-[rgb(40,54,85)] font-primary font-medium text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h1>
          <motion.p 
            className="text-[rgb(40,54,85)] font-primary font-normal text-base mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
