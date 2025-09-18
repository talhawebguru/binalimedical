"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const PartnerCard = ({ partner, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.05,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    initial: {
      scale: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const glowVariants = {
    hover: {
      boxShadow: "0 20px 40px rgba(0, 125, 223, 0.2), 0 0 0 1px rgba(0, 125, 223, 0.1)",
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    initial: {
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <motion.div
        variants={glowVariants}
        animate={isHovered ? "hover" : "initial"}
        className="bg-white rounded-2xl p-6 h-full border border-gray-100 overflow-hidden relative"
      >
        {/* Background gradient that appears on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-[rgb(0,125,223)] to-[rgb(31,43,118)] rounded-2xl"
        />

        {/* Logo container */}
        <div className="relative h-32 mb-4 flex items-center justify-center overflow-hidden">
          <motion.div
            variants={imageVariants}
            animate={isHovered ? "hover" : "initial"}
            className="relative w-full h-full"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
              className="object-contain filter transition-all duration-300 group-hover:brightness-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </motion.div>
        </div>

        {/* Partner info */}
        <div className="relative z-10">
          <motion.h3
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
            className="font-primary font-semibold text-lg text-[rgb(31,43,118)] mb-2 line-clamp-2"
          >
            {partner.name}
          </motion.h3>
          
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            className="mb-3"
          >
            <span className="inline-block bg-[rgb(0,125,223)] text-white text-xs px-3 py-1 rounded-full font-primary font-medium">
              {partner.category}
            </span>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ width: "20%" }}
            animate={{ width: isHovered ? "100%" : "20%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-[rgb(0,125,223)] to-[rgb(31,43,118)] rounded-full"
          />
        </div>

        {/* Hover effect particles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isHovered ? [0, 1, 0] : 0,
            scale: isHovered ? [0, 1, 1.5] : 0
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-4 right-4 w-2 h-2 bg-[rgb(0,125,223)] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isHovered ? [0, 1, 0] : 0,
            scale: isHovered ? [0, 1, 1.2] : 0
          }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[rgb(31,43,118)] rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default PartnerCard;