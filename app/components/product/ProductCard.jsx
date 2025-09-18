"use client"
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import laboratoryConsumables from "@/public/images/ourProducts/laboratoryConsumables.jpg";
import medicalEquipments from "@/public/images/ourProducts/medicalEquipment.jpg";
import woundCareProducts from "@/public/images/ourProducts/woundCare.jpg";
import linenUniformsAndShoes from "@/public/images/ourProducts/uniform.jpg";
import emergencyAndFirstAid from "@/public/images/ourProducts/firstAid.jpg";
import orthopedicProducts from "@/public/images/ourProducts/arturo.jpg";
import radiologyProducts from "@/public/images/ourProducts/radio.jpg";
import medicalFurnitures from "@/public/images/ourProducts/medicalFurniture.jpg";
import anesthesiaAndRespiratory from "@/public/images/ourProducts/anesthesia1.jpg";
import dentalConsumables from "@/public/images/ourProducts/dentalC.jpg";
import surgicalProducts from "@/public/images/ourProducts/surgDe.jpg";
import nursingConsumables from "@/public/images/ourProducts/nurss.jpg";
import incontinenceAndUrology from "@/public/images/ourProducts/urology.jpg";
import surgicalAndDentalInstruments from "@/public/images/ourProducts/surgDe.jpg";
import sterilizationProducts from "@/public/images/ourProducts/sterialization.jpg";
import infectionControlProducts from "@/public/images/ourProducts/covic1.jpg";
import kaweProducts from "@/public/images/ourProducts/KaWe.jpg";
import lockdownMedical from "@/public/images/ourProducts/lockdown.jpg";

const products = [
  {
    image: laboratoryConsumables,
    title: "LABORATORY CONSUMABLES",
    link: "https://jurhy.com/category/labortaory/29/",
  },
  {
    image: medicalEquipments,
    title: "MEDICAL EQUIPMENTS",
    link: "https://jurhy.com/category/medical-equipments/1/",
  },
  {
    image: woundCareProducts,
    title: "WOUND CARE PRODUCTS",
    link: "https://jurhy.com/category/wound-care/55/",
  },
  {
    image: linenUniformsAndShoes,
    title: "LINEN, UNIFORMS AND SHOES",
    link: "https://jurhy.com/category/orthopedic/40/cast-boot/1106/",
  },
  {
    image: emergencyAndFirstAid,
    title: "EMERGENCY AND FIRST AID",
    link: "https://jurhy.com/category/emergency-and-first-aid/59/",
  },
  {
    image: orthopedicProducts,
    title: "ORTHOPEDIC PRODUCTS",
    link: "https://jurhy.com/category/orthopedic/40/",
  },
  {
    image: radiologyProducts,
    title: "RADIOLOGY PRODUCTS",
    link: "https://jurhy.com/category/radiology/45/",
  },
  {
    image: medicalFurnitures,
    title: "MEDICAL FURNITURES",
    link: "https://jurhy.com/category/medical-equipments/1/furniture/4/",
  },
  {
    image: anesthesiaAndRespiratory,
    title: "ANESTHESIA AND RESPIRATORY",
    link: "https://jurhy.com/category/respiratory/47/",
  },
  {
    image: dentalConsumables,
    title: "DENTAL CONSUMABLES",
    link: "https://jurhy.com/category/dental/6/",
  },
  {
    image: surgicalProducts,
    title: "SURGICAL PRODUCTS",
    link: "https://jurhy.com/category/surgery/49/",
  },
  {
    image: nursingConsumables,
    title: "NURSING CONSUMABLES",
    link: "https://jurhy.com/category/nursing-material/57/nursing-consumables/1403/",
  },
  {
    image: incontinenceAndUrology,
    title: "IN CONTINENCE AND UROLOGY PRODUCTS",
    link: "https://jurhy.com/category/urology/52/",
  },
  {
    image: surgicalAndDentalInstruments,
    title: "SURGICAL & DENTAL INSTRUMENTS",
    link: "https://jurhy.com/category/dental/6/dental-instruments/1388/",
  },
  {
    image: sterilizationProducts,
    title: "STERILIZATION PRODUCTS",
    link: "#",
  },
  {
    image: infectionControlProducts,
    title: "INFECTION CONTROL PRODUCTS",
    link: "https://jurhy.com/category/hygiene-and-disinfections/26/",
  },
  {
    image: kaweProducts,
    title: "KAWE PRODUCTS",
    link: "https://jurhy.com/brandlist.php",
  },
  {
    image: lockdownMedical,
    title: "LOCKDOWN MEDICAL",
    link: "#",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const hoverVariants = {
  hover: {
    scale: 1.05,
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const ProductCard = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 sm:px-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {products.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer group"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          custom={hoverVariants}
        >
          <div className="relative w-full h-64 overflow-hidden">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300"
              />
            </motion.div>
          </div>
          <motion.div 
            className="p-4 text-center"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-base font-primary font-bold text-[rgb(3,37,76)] mb-4"
              whileHover={{ color: "rgb(7,135,253)" }}
              transition={{ duration: 0.3 }}
            >
             <a href={item.link} target="_blank">{item.title}</a>
            </motion.h3>
            <motion.button 
              className="mt-4 px-4 py-2 cursor-pointer bg-blue-500 text-white font-medium rounded-2xl transition-all duration-300"
              whileHover={{ 
                backgroundColor: "rgb(7,135,253)",
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(7,135,253,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Download Brochure
            </motion.button>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductCard;