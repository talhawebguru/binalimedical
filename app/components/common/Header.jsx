import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="border-b border-primary absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-1">
          <div className="flex items-center justify-between py-2.5">
            <div>
              <Image src={Logo} alt="Bin Ali Medical Logo" className="w-[130px] h-[60px]" width={130} height={60} />{" "}
            </div>
            <div className="flex items-center space-x-10">
              <nav>
                <ul className="flex items-center space-x-6 font-primary text-base font-normal leading-6 text-white cursor-pointer">
                  <li>Home</li>
                  <li>About</li>
                  <li>Our Products</li>
                  <li>Customers</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </nav>
              <Link
                href={
                  "http://binalimain.qnoddns.org.cn:9090/BAMS/CustomerLogin"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primary flex justify-center items-center text-white font-primary text-base font-normal leading-6 py-1.5 px-3 rounded-full">Web Store</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
