import React from "react";
import * as motion from "motion/react-client"
import Image from "next/image";
import CareerBg from "@/public/images/career.jpg";
import Container from "../components/common/Container";

export const metadata = {
  title: "Careers | Bin Ali Medical Supplies",
  description: "Build your career with Bin Ali Medical Supplies. Join our team and explore exciting career opportunities in the medical supplies industry. Apply for jobs today.",
  keywords: "careers, jobs, medical careers, binali careers, medical supplies jobs, healthcare careers"
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

  return (
    <section className="bg-[rgb(227,242,255)] py-10">
      <Container>
        <motion.h1
          className="font-primary text-3xl font-medium text-[rgb(40,54,85)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          Careers
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <Image src={CareerBg} alt="Career" />
            <p className="font-primary text-base font-normal text-[rgb(40,54,85)] mt-4 md:w-[90%]">
              <b>Build your Career with Us.</b> Our career not only brings a
              smile to your face but also commands respect and handsome
              earnings. Learn more about the exciting career options we have.
              Build your Career with Us. Our career not only brings a smile to
              your face but also commands respect and handsome earnings. Learn
              more about the exciting career options we have.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="font-primary font-medium text-[rgb(40,54,85)] text-xl">
              Apply for Job
            </h2>
            <hr className="border border-[rgba(0,0,0,0.1)] mt-2" />
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
                  className="w-full xl:w-8/12 p-4 rounded-lg font-primary text-base bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(0,125,223)] focus:border-transparent hover:shadow-md placeholder-gray-400"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full xl:w-8/12 p-4 rounded-lg font-primary text-base bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(0,125,223)] focus:border-transparent hover:shadow-md placeholder-gray-400"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className="w-full xl:w-8/12 p-4 rounded-lg font-primary text-base bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(0,125,223)] focus:border-transparent hover:shadow-md placeholder-gray-400"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.textarea
                  name="message"
                  id="message"
                  placeholder="Write Your Cover Letter"
                  rows="4"
                  className="w-full xl:w-8/12 p-4 rounded-lg font-primary text-base bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(0,125,223)] focus:border-transparent hover:shadow-md placeholder-gray-400 resize-vertical min-h-[100px]"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="xl:w-8/12">
                <motion.label 
                  htmlFor="addDocs" 
                  className="block text-[rgb(40,54,85)] font-primary font-medium mb-2 cursor-pointer"
                  whileHover={{ color: "rgb(0,125,223)" }}
                  transition={{ duration: 0.2 }}
                >
                  Add Resume (Use doc | docx | pdf | xls | xlsx filetypes only)
                </motion.label>
                <motion.input
                  type="file"
                  name="addDocs"
                  id="addDocs"
                  accept=".doc,.docx,.pdf,.xls,.xlsx"
                  className="w-full p-3 rounded-lg font-primary text-base bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[rgb(0,125,223)] focus:border-transparent hover:shadow-md cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[rgb(0,125,223)] file:text-white hover:file:bg-opacity-90 file:transition-all file:duration-300"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="bg-[rgb(0,125,223)] cursor-pointer text-white mt-2 font-primary font-medium text-base py-4 xl:w-8/12 w-full rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[rgb(0,125,223)] focus:ring-opacity-50"
                  whileHover={{ scale: 1.02, y: -0.1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default page;