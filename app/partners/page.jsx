"use client";
import React, { useState, useEffect } from "react";
import Container from "../components/common/Container";
import PartnerCard from "../components/partners/PartnerCard";
import { motion } from "motion/react";

// Import all partner logos (same as OurPartners component)
import Logo1 from "@/public/images/binalilogo/dr.reddy.png";
import Logo2 from "@/public/images/binalilogo/descarga-3-1024x207-1.png";
import Logo3 from "@/public/images/binalilogo/Group1171275306.png";
import Logo4 from "@/public/images/binalilogo/Group 1171275307.png";
import Logo5 from "@/public/images/binalilogo/Group 1171275308.png";
import Logo6 from "@/public/images/binalilogo/Group 1171275309.png";
import Logo7 from "@/public/images/binalilogo/Group 1171275310.png";
import Logo8 from "@/public/images/binalilogo/Group 1171275311.png";
import Logo9 from "@/public/images/binalilogo/Group 1171275312.png";
import Logo10 from "@/public/images/binalilogo/Group 1171275313.png";
import Logo11 from "@/public/images/binalilogo/Group 1171275314.png";
import Logo12 from "@/public/images/binalilogo/Group 1171275315.png";
import Logo13 from "@/public/images/binalilogo/Group 1171275316.png";
import Logo14 from "@/public/images/binalilogo/Group 1171275317.png";
import Logo15 from "@/public/images/binalilogo/Group 1171275318.png";
import Logo16 from "@/public/images/binalilogo/Group 1171275319.png";
import Logo17 from "@/public/images/binalilogo/Group 1171275320.png";
import Logo18 from "@/public/images/binalilogo/Group 1171275321.png";
import Logo19 from "@/public/images/binalilogo/Group 1171275322.png";
import Logo20 from "@/public/images/binalilogo/Group 1171275323.png";
import Logo21 from "@/public/images/binalilogo/image 305.png";
import Logo22 from "@/public/images/binalilogo/image 306.png";
import Logo23 from "@/public/images/binalilogo/image 307.png";
import Logo24 from "@/public/images/binalilogo/image 308.png";
import Logo25 from "@/public/images/binalilogo/image 309.png";
import Logo26 from "@/public/images/binalilogo/image 310.png";
import Logo27 from "@/public/images/binalilogo/image 311.png";
import Logo28 from "@/public/images/binalilogo/image 313.png";
import Logo29 from "@/public/images/binalilogo/image 314.png";
import Logo30 from "@/public/images/binalilogo/image 315.png";
import Logo31 from "@/public/images/binalilogo/image 316.png";
import Logo32 from "@/public/images/binalilogo/image 317.png";
import Logo33 from "@/public/images/binalilogo/image 318.png";
import Logo34 from "@/public/images/binalilogo/image 319.png";
import Logo35 from "@/public/images/binalilogo/image 320.png";
import Logo36 from "@/public/images/binalilogo/image 321.png";
import Logo37 from "@/public/images/binalilogo/image 322.png";
import Logo38 from "@/public/images/binalilogo/image 323.png";
import Logo39 from "@/public/images/binalilogo/innate-1218x426 1.png";
import Logo40 from "@/public/images/binalilogo/istem-logo-son 1.png";
import Logo41 from "@/public/images/binalilogo/meritorganics-comp255367 1.png";
import Logo42 from "@/public/images/binalilogo/Mindray_logo.png";
import Logo43 from "@/public/images/binalilogo/primed-logo_n 1.png";
import Logo44 from "@/public/images/binalilogo/rendition-1-1024x197 1.png";
import Link from "next/link";

const partners = [
  {
    src: Logo1,
    alt: "Dr. Reddy's",
    name: "Dr. Reddy's Laboratories",
    category: "Pharmaceutical",
  },
  {
    src: Logo2,
    alt: "Descarga",
    name: "Descarga Medical",
    category: "Medical Equipment",
  },
  {
    src: Logo3,
    alt: "Group Partner 1",
    name: "Medical Solutions Inc.",
    category: "Healthcare",
  },
  {
    src: Logo4,
    alt: "Group Partner 2",
    name: "Healthcare Innovations",
    category: "Medical Technology",
  },
  {
    src: Logo5,
    alt: "Group Partner 3",
    name: "Bio Medical Corp",
    category: "Biotechnology",
  },
  {
    src: Logo6,
    alt: "Group Partner 4",
    name: "Advanced Diagnostics",
    category: "Diagnostics",
  },
  {
    src: Logo7,
    alt: "Group Partner 5",
    name: "Surgical Instruments Ltd",
    category: "Surgical Equipment",
  },
  {
    src: Logo8,
    alt: "Group Partner 6",
    name: "MedTech Solutions",
    category: "Medical Technology",
  },
  {
    src: Logo9,
    alt: "Group Partner 7",
    name: "Healthcare Systems",
    category: "Healthcare",
  },
  {
    src: Logo10,
    alt: "Group Partner 8",
    name: "Bio Innovations",
    category: "Biotechnology",
  },
  {
    src: Logo11,
    alt: "Group Partner 9",
    name: "Medical Devices Inc",
    category: "Medical Devices",
  },
  {
    src: Logo12,
    alt: "Group Partner 10",
    name: "Pharma Solutions",
    category: "Pharmaceutical",
  },
  {
    src: Logo13,
    alt: "Group Partner 11",
    name: "Diagnostic Tools",
    category: "Diagnostics",
  },
  {
    src: Logo14,
    alt: "Group Partner 12",
    name: "Surgical Tech",
    category: "Surgical Equipment",
  },
  {
    src: Logo15,
    alt: "Group Partner 13",
    name: "Health Innovations",
    category: "Healthcare",
  },
  {
    src: Logo16,
    alt: "Group Partner 14",
    name: "Medical Research",
    category: "Research",
  },
  {
    src: Logo17,
    alt: "Group Partner 15",
    name: "Bio Tech Solutions",
    category: "Biotechnology",
  },
  {
    src: Logo18,
    alt: "Group Partner 16",
    name: "Healthcare Products",
    category: "Healthcare",
  },
  {
    src: Logo19,
    alt: "Group Partner 17",
    name: "Medical Equipment Co",
    category: "Medical Equipment",
  },
  {
    src: Logo20,
    alt: "Group Partner 18",
    name: "Pharma Tech",
    category: "Pharmaceutical",
  },
  {
    src: Logo21,
    alt: "Medical Partner 305",
    name: "Advanced Medical",
    category: "Medical Equipment",
  },
  {
    src: Logo22,
    alt: "Medical Partner 306",
    name: "Healthcare Plus",
    category: "Healthcare",
  },
  {
    src: Logo23,
    alt: "Medical Partner 307",
    name: "Bio Medical Tech",
    category: "Biotechnology",
  },
  {
    src: Logo24,
    alt: "Medical Partner 308",
    name: "Diagnostic Solutions",
    category: "Diagnostics",
  },
  {
    src: Logo25,
    alt: "Medical Partner 309",
    name: "Surgical Systems",
    category: "Surgical Equipment",
  },
  {
    src: Logo26,
    alt: "Medical Partner 310",
    name: "Med Innovations",
    category: "Medical Technology",
  },
  {
    src: Logo27,
    alt: "Medical Partner 311",
    name: "Health Systems",
    category: "Healthcare",
  },
  {
    src: Logo28,
    alt: "Medical Partner 313",
    name: "Bio Solutions",
    category: "Biotechnology",
  },
  {
    src: Logo29,
    alt: "Medical Partner 314",
    name: "Medical Devices",
    category: "Medical Devices",
  },
  {
    src: Logo30,
    alt: "Medical Partner 315",
    name: "Pharma Innovations",
    category: "Pharmaceutical",
  },
  {
    src: Logo31,
    alt: "Medical Partner 316",
    name: "Diagnostic Tech",
    category: "Diagnostics",
  },
  {
    src: Logo32,
    alt: "Medical Partner 317",
    name: "Surgical Solutions",
    category: "Surgical Equipment",
  },
  {
    src: Logo33,
    alt: "Medical Partner 318",
    name: "Healthcare Tech",
    category: "Healthcare",
  },
  {
    src: Logo34,
    alt: "Medical Partner 319",
    name: "Medical Research",
    category: "Research",
  },
  {
    src: Logo35,
    alt: "Medical Partner 320",
    name: "Bio Technology",
    category: "Biotechnology",
  },
  {
    src: Logo36,
    alt: "Medical Partner 321",
    name: "Health Products",
    category: "Healthcare",
  },
  {
    src: Logo37,
    alt: "Medical Partner 322",
    name: "Medical Equipment",
    category: "Medical Equipment",
  },
  {
    src: Logo38,
    alt: "Medical Partner 323",
    name: "Pharma Systems",
    category: "Pharmaceutical",
  },
  {
    src: Logo39,
    alt: "Innate",
    name: "Innate Medical",
    category: "Medical Technology",
  },
  {
    src: Logo40,
    alt: "Istem",
    name: "Istem Healthcare",
    category: "Healthcare",
  },
  {
    src: Logo41,
    alt: "Merit Organics",
    name: "Merit Organics",
    category: "Biotechnology",
  },
  {
    src: Logo42,
    alt: "Mindray",
    name: "Mindray Medical",
    category: "Medical Equipment",
  },
  {
    src: Logo43,
    alt: "Primed",
    name: "Primed Solutions",
    category: "Medical Technology",
  },
  {
    src: Logo44,
    alt: "Rendition",
    name: "Rendition Medical",
    category: "Healthcare",
  },
];

const PartnersPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Fallback animation trigger for mobile
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isMobile && isVisible ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ 
            once: true, 
            amount: isMobile ? 0.05 : 0.3,
            margin: "-30px"
          }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={titleVariants}
            className="text-4xl md:text-5xl font-primary font-bold text-[rgb(31,43,118)] mb-6"
          >
            Our Trusted Partners
          </motion.h1>
          <motion.p
            variants={subtitleVariants}
            className="text-lg text-[rgb(40,54,85)] font-primary max-w-3xl mx-auto leading-relaxed"
          >
            We collaborate with leading healthcare companies worldwide to
            deliver excellence in medical supplies and solutions. Our
            partnerships enable us to provide cutting-edge technology and
            innovative healthcare products.
          </motion.p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isMobile && isVisible ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ 
            once: true, 
            amount: isMobile ? 0.05 : 0.1,
            margin: "-50px"
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-16 bg-[rgb(0,125,223)] rounded-2xl p-8 text-white"
        >
          <motion.h3
            className="text-2xl font-primary font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
          >
            Interested in Partnership?
          </motion.h3>
          <motion.p
            className="text-lg mb-6 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
          >
            Join our network of trusted partners and help us deliver exceptional
            healthcare solutions.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="bg-white cursor-pointer text-[rgb(0,125,223)] px-8 py-3 rounded-full font-primary font-semibold transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1,
              }}
            >
              Contact Us for Partnership
            </motion.button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default PartnersPage;
