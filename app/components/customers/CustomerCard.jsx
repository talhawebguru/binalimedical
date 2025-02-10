import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import customer1 from "@/public/images/customersImages/ministryOfHealth.jpg";
import customer2 from "@/public/images/customersImages/cornicheHospital.jpg";
import customer3 from "@/public/images/customersImages/tawamHospital2.jpg";
import customer4 from "@/public/images/customersImages/healthAuthority.jpg";
import customer5 from "@/public/images/customersImages/sheikhKhalifaMedi.jpg";
import customer6 from "@/public/images/customersImages/alnoorHospital.jpg";
import customer7 from "@/public/images/customersImages/departmentOfHealthDubai.jpg";
import customer8 from "@/public/images/customersImages/alainHospital.jpg";
import customer9 from "@/public/images/customersImages/nmc.jpg";
import customer10 from "@/public/images/customersImages/centerOfAmbulance.jpg";
import customer11 from "@/public/images/customersImages/abudhabiCityMunicipality.jpg";
import customer12 from "@/public/images/customersImages/almafraq.jpg";
import customer13 from "@/public/images/customersImages/ambulatoryHealth.jpg";
import customer14 from "@/public/images/customersImages/americanHospital.jpg";
import customer15 from "@/public/images/customersImages/abudhabiDistributionCo.jpg";
import customer16 from "@/public/images/customersImages/alrahhbaHospital.jpg";
import customer17 from "@/public/images/customersImages/ghqArmedForces.jpg";

const customers = [
  { src: customer1, alt: "Customer 1", name: "Ministry of Health" },
  { src: customer2, alt: "Customer 2", name: "Corniche Hospital" },
  { src: customer3, alt: "Customer 3", name: "Tawam Hospital, Al Ain" },
  { src: customer4, alt: "Customer 4", name: "General Health Authority" },
  { src: customer5, alt: "Customer 5", name: "Shaikh Khalifa Medical City" },
  { src: customer6, alt: "Customer 6", name: "Al Noor Hospital" },
  { src: customer7, alt: "Customer 7", name: "Department of Health Dubai" },
  { src: customer8, alt: "Customer 8", name: "Al Ain Hospital" },
  { src: customer9, alt: "Customer 9", name: "NMC Hospital" },
  { src: customer10, alt: "Customer 10", name: "Centre of Ambulance , Dubai" },
  { src: customer11, alt: "Customer 11", name: "Abu Dhabi Municipality" },
  { src: customer12, alt: "Customer 12", name: "Al Mafraq Hospital" },
  {
    src: customer13,
    alt: "Customer 13",
    name: "Ambulatory Healthcare Services, Abu Dhabi",
  },
  {
    src: customer14,
    alt: "Customer 14",
    name: "American Hospital ADNOC (Supplier Code :903831)",
  },
  { src: customer15, alt: "Customer 15", name: "Abu Dhabi Distribution Co" },
  { src: customer16, alt: "Customer 16", name: "Al Rahba Hospital" },
  {
    src: customer17,
    alt: "Customer 17",
    name: "G.H.Q. Armed Forces. GHQ Police, Ambulance & Rescue, Abu Dhabi",
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

const CustomerCard = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-5 shadow-md flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              <Image
                src={customer.src}
                alt={customer.alt}
                width={200}
                height={200}
              />
              <h2 className="text-base font-bold font-primary text-[rgb(3,37,76)] text-center">
                {customer.name}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerCard;
