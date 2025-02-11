import React from "react";
import ProductCard from "../components/product/ProductCard";

const page = () => {
  return (
    <>
      <div className="bg-[rgb(227,242,255)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10">
          <h1 className="text-[rgb(40,54,85)] font-primary font-medium text-3xl ">
            Our Products
          </h1>
          <p className="text-[rgb(40,54,85)] font-primary font-normal text-base ">
            BAMS offers a wide range of high quality products in healthcare. We
            would like to name some of our major companies which we distribute
            in the U.A.E market.
          </p>
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default page;
