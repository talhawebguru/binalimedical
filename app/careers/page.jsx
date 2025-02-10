import React from "react";
import * as motion from "motion/react-client"
import Image from "next/image";
import CareerBg from "@/public/images/career.jpg";

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
    <div className="bg-[rgb(227,242,255)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10">
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
            <form action="" className="mt-4 flex flex-col gap-5">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="p-2 rounded-md font-primary text-base xl:w-8/12"
                required
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 rounded-md font-primary text-base xl:w-8/12"
                required
              />
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                className="p-2 rounded-md font-primary text-base xl:w-8/12"
                required
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your Cover Letter"
                className="p-2 rounded-md font-primary text-base xl:w-8/12"
              ></textarea>
              <label htmlFor="addDocs" className="cursor-pointer">
                Add Resume (Use doc | docx | pdf | xls | xlsx filetypes only)
              </label>
              <input
                type="file"
                name="addDocs"
                id="addDocs"
                className="cursor-pointer"
              />
              <button
                type="submit"
                className="bg-[rgb(0,125,223)] text-white mt-2 font-primary font-medium text-base py-2 xl:w-8/12 rounded-md"
              >
                Apply Now
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;