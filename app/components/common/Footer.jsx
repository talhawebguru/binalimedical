import React from "react";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";
import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="bg-primary">
        <Container>
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
                  <IconBrandFacebook size={32}  />
                  <IconBrandLinkedin size={32} />
                  <IconBrandWhatsapp size={32} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-secondary py-2.5">
        <Container>
          <p className="font-primary font-normal text-base leading-6 text-white">
            © {currentYear} Binali Medical Supplies | All Rights Reserved |
            Terms of Services | Privacy
          </p>
        </Container>
      </section>
    </>
  );
};

export default Footer;