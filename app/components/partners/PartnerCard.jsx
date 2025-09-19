"use client"
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const PartnerCard = ({ partner, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.02
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Logo container */}
        <div className="relative h-32 mb-4 flex items-center justify-center overflow-hidden">
          <Image
            src={partner.src}
            alt={partner.alt}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Partner info */}
        <div className="text-center">
          <h3 className="font-primary font-semibold text-lg text-[rgb(31,43,118)] mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {partner.name}
          </h3>
          
          <span className="inline-block bg-[rgb(0,125,223)] text-white text-xs px-3 py-1 rounded-full font-primary font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            {partner.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerCard;