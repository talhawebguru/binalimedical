"use client";
import React from "react";
import Container from "../components/common/Container";
import PartnerCard from "../components/partners/PartnerCard";
import { motion } from "motion/react";
import Link from "next/link";

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

// Import dental logos
import DentalLogo1 from "@/public/images/dentallogo/bensan.jpg";
import DentalLogo2 from "@/public/images/dentallogo/bti.jpg";
import DentalLogo3 from "@/public/images/dentallogo/citage.png";
import DentalLogo4 from "@/public/images/dentallogo/defendix.png";
import DentalLogo5 from "@/public/images/dentallogo/denfiz.jpg";
import DentalLogo6 from "@/public/images/dentallogo/detax.png";
import DentalLogo7 from "@/public/images/dentallogo/dia-dent.png";
import DentalLogo8 from "@/public/images/dentallogo/envisam.jpg";
import DentalLogo9 from "@/public/images/dentallogo/henry.jpg";
import DentalLogo10 from "@/public/images/dentallogo/kide-e-dental.jpg";
import DentalLogo11 from "@/public/images/dentallogo/major.png";
import DentalLogo12 from "@/public/images/dentallogo/nanda-scanner.png";
import DentalLogo13 from "@/public/images/dentallogo/primadental.jpg";
import DentalLogo14 from "@/public/images/dentallogo/pulpdent.png";
import DentalLogo15 from "@/public/images/dentallogo/safecare-medical.png";
import DentalLogo16 from "@/public/images/dentallogo/voco.png";
import DentalLogo17 from "@/public/images/dentallogo/young.png";

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
  // Dental Partners
  {
    src: DentalLogo1,
    alt: "Bensan",
    name: "Bensan Dental",
    category: "Dental Equipment",
  },
  {
    src: DentalLogo2,
    alt: "BTI",
    name: "BTI Biotechnology Institute",
    category: "Dental Implants",
  },
  {
    src: DentalLogo3,
    alt: "Citage",
    name: "Citage Dental",
    category: "Dental Technology",
  },
  {
    src: DentalLogo4,
    alt: "Defendix",
    name: "Defendix Dental",
    category: "Dental Care",
  },
  {
    src: DentalLogo5,
    alt: "Denfiz",
    name: "Denfiz Dental Solutions",
    category: "Dental Equipment",
  },
  {
    src: DentalLogo6,
    alt: "Detax",
    name: "Detax Dental",
    category: "Dental Materials",
  },
  {
    src: DentalLogo7,
    alt: "Dia-Dent",
    name: "Dia-Dent Dental",
    category: "Dental Instruments",
  },
  {
    src: DentalLogo8,
    alt: "Envisam",
    name: "Envisam",
    category: "Dental Instruments",
  },
  {
    src: DentalLogo9,
    alt: "Henry",
    name: "Henry Schein Dental",
    category: "Dental Supplies",
  },
  {
    src: DentalLogo10,
    alt: "Kide-E-Dental",
    name: "Kide-E-Dental",
    category: "Dental Equipment",
  },
  {
    src: DentalLogo11,
    alt: "Major",
    name: "Major Dental",
    category: "Dental Instruments",
  },
  {
    src: DentalLogo12,
    alt: "Nanda Scanner",
    name: "Nanda Scanner",
    category: "Dental Imaging",
  },
  {
    src: DentalLogo13,
    alt: "Prima Dental",
    name: "Prima Dental",
    category: "Dental Solutions",
  },
  {
    src: DentalLogo14,
    alt: "Pulpdent",
    name: "Pulpdent Corporation",
    category: "Dental Materials",
  },
  {
    src: DentalLogo15,
    alt: "SafeCare Medical",
    name: "SafeCare Medical",
    category: "Medical Dental",
  },
  {
    src: DentalLogo16,
    alt: "Voco",
    name: "Voco Dental",
    category: "Dental Materials",
  },
  {
    src: DentalLogo17,
    alt: "Young",
    name: "Young Dental",
    category: "Dental Equipment",
  },
];

const PartnersPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.03
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white overflow-x-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-primary font-bold text-[rgb(31,43,118)] mb-6">
            Our Trusted Partners
          </h1>
          <p className="text-lg text-[rgb(40,54,85)] font-primary max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading healthcare companies worldwide to
            deliver excellence in medical supplies and solutions. Our
            partnerships enable us to provide cutting-edge technology and
            innovative healthcare products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 bg-[rgb(0,125,223)] rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-primary font-bold mb-4">
            Interested in Partnership?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join our network of trusted partners and help us deliver exceptional
            healthcare solutions.
          </p>
          <Link href="/contact">
            <button className="bg-white cursor-pointer text-[rgb(0,125,223)] px-8 py-3 rounded-full font-primary font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Contact Us for Partnership
            </button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default PartnersPage;
