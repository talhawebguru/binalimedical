import React from "react";
import * as motion from "motion/react-client";
import { CiLocationOn } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";


const page = () => {
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

  return (
    <>
      <div className="bg-[rgb(227,242,255)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10">
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
                variants={itemVariants}
              >
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="p-2 rounded-md font-primary text-base"
                  required
                  aria-label="Enter Your Name"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="p-2 rounded-md font-primary text-base"
                  required
                  aria-label="Enter Your Email"
                />
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className="p-2 rounded-md font-primary text-base"
                  required
                  aria-label="Enter Your Phone Number"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your Message"
                  className="p-2 rounded-md font-primary text-base"
                  aria-label="Write Your Message"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[rgb(0,125,223)] text-white mt-2 font-primary font-medium text-base py-2 xl:w-8/12 rounded-md"
                >
                  Submit Now
                </button>
              </motion.form>
            </motion.div>
            <motion.div
              className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={itemVariants}>
                <CiLocationOn size={38} className="text-[rgb(0,125,223)]" />
                <div className="flex items-center gap-2 text-[rgb(0,125,223)] mt-2">
                  <FaCaretRight size={24} className="w-8" />
                  <p className="font-primary text-base text-[rgb(40,54,85)]">
                    OFFICE - 601, MAZYAD MALL TOWER1, MUHAMMED BIN ZAYED CITY,
                    MUSAFFAH, ABU DHABI
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[rgb(0,125,223)] mt-2">
                  <FaCaretRight size={24} />
                  <p className="font-primary text-base text-[rgb(40,54,85)]">
                    SUITE NO 806, SHOBA IVORY 1 BUSINESS BAY, Dubai
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[rgb(0,125,223)] mt-2">
                  <FaCaretRight size={24} />
                  <p className="font-primary text-base text-[rgb(40,54,85)]">
                    AL-HARAIR STREET NO-57 SHARIKAT, AL-AIN
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <FaPhone size={38} className="text-[rgb(0,125,223)]" />
                <div className="flex items-center gap-2 text-[rgb(0,125,223)] mt-2">
                  <FaCaretRight size={24} />
                  <p className="font-primary text-base text-[rgb(40,54,85)]">
                    Abu Dhabi +971- 2- 6760555
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[rgb(0,125,223)] mt-2">
                  <FaCaretRight size={24} />
                  <p className="font-primary text-base text-[rgb(40,54,85)]">
                    Dubai +971 -4- 452002
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[rgb(0,125,223)] mt-2">
                  <FaCaretRight size={24} />
                  <p className="font-primary text-base text-[rgb(40,54,85)]">
                    Alain +971- 3- 7824596
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <MdEmail size={38} className="text-[rgb(0,125,223)]" />
                <div className="flex items-center gap-2 text-[rgb(0,125,223)] mt-2">
                  <FaCaretRight size={24} />
                  <p className="font-primary text-base text-[rgb(40,54,85)]">
                    info@binalimed.com
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <TbDeviceLandlinePhone size={38} className="text-[rgb(0,125,223)]" />
                <div className="flex items-center gap-2 text-[rgb(0,125,223)] mt-2">
                  <FaCaretRight size={24} />
                  <p className="font-primary text-base text-[rgb(40,54,85)]">
                  +971- 2- 6760888
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[rgb(0,125,223)] mt-2">
                  <FaCaretRight size={24} />
                  <p className="font-primary text-base text-[rgb(40,54,85)]">
                  +971-4-4423503
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[rgb(0,125,223)] mt-2">
                  <FaCaretRight size={24} />
                  <p className="font-primary text-base text-[rgb(40,54,85)]">
                  +971- 3- 7824597
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="mt-32">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6112.030161823449!2d54.53345673475885!3d24.373131333256012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665db8946d1b%3A0x82f45d899860c37e!2sBin%20Ali%20Medical%20Supplies!5e0!3m2!1sen!2s!4v1739252686980!5m2!1sen!2s"
              width="100%"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Bin Ali Medical Supplies Location"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
