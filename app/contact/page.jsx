import React from "react";
import * as motion from "motion/react-client";
import { IconMapPin, IconChevronRight, IconMail, IconPhone, IconPhone as IconDeviceLandlinePhone } from "@tabler/icons-react";
import Container from "../components/common/Container";

export const metadata = {
  title: "Contact Us | Bin Ali Medical Supplies",
  description: "Get in touch with Bin Ali Medical Supplies. Contact our offices in Abu Dhabi, Dubai, and Al Ain. Find our phone numbers, email addresses, and office locations.",
  keywords: "contact binali, medical supplies contact, binali offices, abu dhabi medical supplies, dubai medical supplies"
};


const page = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut"
      },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="bg-[rgb(227,242,255)] py-10">
      <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div
              className="md:col-span-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h1
                className="font-primary font-medium text-[rgb(40,54,85)] text-xl"
                variants={itemVariants}
              >
                DROP US A LINE
              </motion.h1>
              <motion.hr
                className="border border-[rgba(0,0,0,0.1)] mt-2"
                variants={itemVariants}
              />
              <motion.form
                action=""
                className="mt-4 flex flex-col gap-5"
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div variants={itemVariants}>
                  <motion.input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full p-4 rounded-lg font-primary text-base bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(0,125,223)] focus:border-transparent hover:shadow-md placeholder-gray-400"
                    required
                    aria-label="Enter Your Name"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full p-4 rounded-lg font-primary text-base bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(0,125,223)] focus:border-transparent hover:shadow-md placeholder-gray-400"
                    required
                    aria-label="Enter Your Email"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.input
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    className="w-full p-4 rounded-lg font-primary text-base bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(0,125,223)] focus:border-transparent hover:shadow-md placeholder-gray-400"
                    required
                    aria-label="Enter Your Phone Number"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.textarea
                    name="message"
                    id="message"
                    placeholder="Write Your Message"
                    rows="4"
                    className="w-full p-4 rounded-lg font-primary text-base bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(0,125,223)] focus:border-transparent hover:shadow-md placeholder-gray-400 resize-vertical min-h-[100px]"
                    aria-label="Write Your Message"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="bg-[rgb(0,125,223)] cursor-pointer text-white mt-2 font-primary font-medium text-base py-4 xl:w-8/12 w-full rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[rgb(0,125,223)] focus:ring-opacity-50"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    Submit Now
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
            <motion.div
              className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMapPin size={38} className="text-[rgb(0,125,223)]" />
                  <h3 className="ml-3 font-primary font-semibold text-lg text-[rgb(40,54,85)]">Office Locations</h3>
                </motion.div>
                
                <motion.div className="space-y-3">
                  <motion.div 
                    className="flex items-start gap-3"
                    variants={contactInfoVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconChevronRight size={20} className="text-[rgb(0,125,223)] mt-1 flex-shrink-0" />
                    <p className="font-primary text-sm text-[rgb(40,54,85)] leading-relaxed">
                      OFFICE - 601, MAZYAD MALL TOWER1, MUHAMMED BIN ZAYED CITY,
                      MUSAFFAH, ABU DHABI
                    </p>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-3"
                    variants={contactInfoVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconChevronRight size={20} className="text-[rgb(0,125,223)] mt-1 flex-shrink-0" />
                    <p className="font-primary text-sm text-[rgb(40,54,85)] leading-relaxed">
                      SUITE NO 806, SHOBA IVORY 1 BUSINESS BAY, Dubai
                    </p>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-3"
                    variants={contactInfoVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconChevronRight size={20} className="text-[rgb(0,125,223)] mt-1 flex-shrink-0" />
                    <p className="font-primary text-sm text-[rgb(40,54,85)] leading-relaxed">
                      AL-HARAIR STREET NO-57 SHARIKAT, AL-AIN
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconPhone size={38} className="text-[rgb(0,125,223)]" />
                  <h3 className="ml-3 font-primary font-semibold text-lg text-[rgb(40,54,85)]">Phone Numbers</h3>
                </motion.div>
                
                <motion.div className="space-y-3">
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={contactInfoVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconChevronRight size={20} className="text-[rgb(0,125,223)] flex-shrink-0" />
                    <p className="font-primary text-sm text-[rgb(40,54,85)]">
                      Abu Dhabi +971- 2- 6760555
                    </p>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={contactInfoVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconChevronRight size={20} className="text-[rgb(0,125,223)] flex-shrink-0" />
                    <p className="font-primary text-sm text-[rgb(40,54,85)]">
                      Dubai +971 -4- 452002
                    </p>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={contactInfoVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconChevronRight size={20} className="text-[rgb(0,125,223)] flex-shrink-0" />
                    <p className="font-primary text-sm text-[rgb(40,54,85)]">
                      Alain +971- 3- 7824596
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMail size={38} className="text-[rgb(0,125,223)]" />
                  <h3 className="ml-3 font-primary font-semibold text-lg text-[rgb(40,54,85)]">Email Address</h3>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  variants={contactInfoVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconChevronRight size={20} className="text-[rgb(0,125,223)] flex-shrink-0" />
                  <p className="font-primary text-sm text-[rgb(40,54,85)]">
                    info@binalimed.com
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconDeviceLandlinePhone size={38} className="text-[rgb(0,125,223)]" />
                  <h3 className="ml-3 font-primary font-semibold text-lg text-[rgb(40,54,85)]">Fax Numbers</h3>
                </motion.div>
                
                <motion.div className="space-y-3">
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={contactInfoVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconChevronRight size={20} className="text-[rgb(0,125,223)] flex-shrink-0" />
                    <p className="font-primary text-sm text-[rgb(40,54,85)]">
                    +971- 2- 6760888
                    </p>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={contactInfoVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconChevronRight size={20} className="text-[rgb(0,125,223)] flex-shrink-0" />
                    <p className="font-primary text-sm text-[rgb(40,54,85)]">
                    +971-4-4423503
                    </p>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={contactInfoVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconChevronRight size={20} className="text-[rgb(0,125,223)] flex-shrink-0" />
                    <p className="font-primary text-sm text-[rgb(40,54,85)]">
                    +971- 3- 7824597
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-2xl font-primary font-semibold text-[rgb(40,54,85)] mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find Us on Map
            </motion.h2>
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6112.030161823449!2d54.53345673475885!3d24.373131333256012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665db8946d1b%3A0x82f45d899860c37e!2sBin%20Ali%20Medical%20Supplies!5e0!3m2!1sen!2s!4v1739252686980!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Bin Ali Medical Supplies Location"
              />
            </motion.div>
          </motion.div>
      </Container>
    </section>
  );
};

export default page;
