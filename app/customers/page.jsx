import React from "react";
import CustomerCard from "../components/customers/CustomerCard";

const page = () => {
  return (
    <>
      <div className="bg-[rgb(227,242,255)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10">
          <h1 className="font-primary text-3xl font-medium text-[rgb(40,54,85)]">
            OUR CUSTOMERS AND MARKETING
          </h1>
          <p className="font-primary text-base font-normal text-[rgb(40,54,85)] mt-4">
            Our product line is backed by a dedicated team of sales
            professionals who are ever ready to attend to the maximum needs of
            our customers. Deliveries are carefully scheduled to fulfill
            customer needs satisfactorily. We have a well maintained fleet of
            vehicles and experienced drivers to support the logistic functions.
            <br />
            Our marketing team is equipped to provide comprehensive information
            to customers to help them select the right products. Our on-line
            store is equipped to conveniently select and buy products.
          </p>
        </div>
        <CustomerCard />
      </div>
    </>
  );
};

export default page;
