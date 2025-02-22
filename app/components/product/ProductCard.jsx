import React from "react";
import * as motion from "motion/react-client"
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
  },
  {
    image: medicalEquipments,
    title: "MEDICAL EQUIPMENTS",
  },
  {
    image: woundCareProducts,
    title: "WOUND CARE PRODUCTS",
  },
  {
    image: linenUniformsAndShoes,
    title: "LINEN, UNIFORMS AND SHOES",
  },
  {
    image: emergencyAndFirstAid,
    title: "EMERGENCY AND FIRST AID",
  },
  {
    image: orthopedicProducts,
    title: "ORTHOPEDIC PRODUCTS",
  },
  {
    image: radiologyProducts,
    title: "RADIOLOGY PRODUCTS",
  },
  {
    image: medicalFurnitures,
    title: "MEDICAL FURNITURES",
  },
  {
    image: anesthesiaAndRespiratory,
    title: "ANESTHESIA AND RESPIRATORY",
  },
  {
    image: dentalConsumables,
    title: "DENTAL CONSUMABLES",
  },
  {
    image: surgicalProducts,
    title: "SURGICAL PRODUCTS",
  },
  {
    image: nursingConsumables,
    title: "NURSING CONSUMABLES",
  },
  {
    image: incontinenceAndUrology,
    title: "IN CONTINENCE AND UROLOGY PRODUCTS",
  },
  {
    image: surgicalAndDentalInstruments,
    title: "SURGICAL & DENTAL INSTRUMENTS",
  },
  {
    image: sterilizationProducts,
    title: "STERILIZATION PRODUCTS",
  },
  {
    image: infectionControlProducts,
    title: "INFECTION CONTROL PRODUCTS",
  },
  {
    image: kaweProducts,
    title: "KAWE PRODUCTS",
  },
  {
    image: lockdownMedical,
    title: "LOCKDOWN MEDICAL",
  },
];

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

const ProductCard = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 sm:px-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-full h-64">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-base font-primary font-bold text-[rgb(3,37,76)]">
              {item.title}
            </h3>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-2xl hover:bg-blue-600 transition">
              Download Brochure
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductCard;