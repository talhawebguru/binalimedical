import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-12 pb-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-white font-primary font-bold text-2xl leading-7">
                Bin Ali
              </h2>
              <p className="text-white font-primary font-normal text-base leading-6">
                Bin Ali Medical Supplies LLC is a reputed Medical Supplies Dubai
                company built on a distinct vision. Since early 2000, BAMS has
                grown to be a leading supplier of a wide range of excellent
                products.
              </p>
            </div>
            <div className="sm:place-items-center">
              <div className="flex flex-col gap-2 ">
                <h2 className="text-white font-primary font-bold text-2xl leading-7 ">
                  MOH
                </h2>
                <p className="text-white font-primary font-normal text-base leading-6">
                  APPROVAL NUMBER :<br /> 8AEVFQ0O-281024 <br /> DATE :
                  27/10/2024 TO 27/10/2025
                </p>
              </div>
            </div>
            <div className="lg:place-items-center">
              <div className="flex flex-col gap-2">
                <h2 className="text-white font-primary font-bold text-2xl leading-7">
                  BRANCH OFFICES
                </h2>
                <p className="text-white font-primary font-normal text-base leading-6">
                  Dubai - +971-4–4520022
                  <br /> Al Ain - +971-3-7824596
                  <br /> AbuDhabi - +971-3-7824596
                </p>
              </div>
            </div>
            <div className="sm:place-items-center">
              <div className="flex flex-col gap-2 ">
                <h2 className="text-white font-primary font-bold text-2xl leading-7">
                  KEEP IN TOUCH
                </h2>
                <div className="text-white flex gap-4 items-center">
                  <FaFacebook size={32} />
                  <FaLinkedin size={32} />
                  <RiWhatsappFill size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary py-2.5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <p className="font-primary font-normal text-base leading-6 text-white">
              © {currentYear} Binali Medical Supplies | All Rights Reserved |
              Terms of Services | Privacy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
