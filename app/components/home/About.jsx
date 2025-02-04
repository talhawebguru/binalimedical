import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="pt-20 pb-32">
            <h2 className="text-[rgb(17,22,56)] text-4xl font-normal font-tertiary ">
              Welcome to <br />
              <span className="text-primary">Bin Ali Medical Supplies LLC</span>
            </h2>
            <hr className="my-4 " />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
              <div>
                <p className="text-[rgb(17,22,56)] text-base leading-7 font-normal font-quaternary">
                  Being the leading supplier of healthcare products in the
                  region, Bin Ali Medical Supplies LLC deals with an extensive
                  range of high-value products for the benefit of our loyal
                  customer base. Surgical Products, Nursing Consumables,
                  Anesthesia and Respiratory Products, Incontinence & Urology
                  Products, Sterilization Products CSSD Products, Infection
                  Control Products, Orthopedic Products, Emergency & First Aid
                  Products, Laboratory Consumables, Wound Care Products,
                  Radiology Products, Dental Consumables, IV Solutions, Linen,
                  Uniforms & Shoes, Medical Furniture, Medical Equipments,
                  Surgical & Dental Instruments – so goes the list.
                </p>
              </div>
              <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center  gap-3">
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                      Market Share
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                      Inventory System
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                      Financial Position
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                      Product Quality
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                    Customer loyalty
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                    Organizational structure
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                    Production/Distribution capacity
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                    Customer Service
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                    Global/regional expansion
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex items-center justify-center w-6 h-5 rounded-full">
                      <FaArrowRightLong className="text-white" />
                    </div>
                    <p className="font-quaternary text-base text-[rgb(17,22,56)] font-normal">
                    Management Expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
