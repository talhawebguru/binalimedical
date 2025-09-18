"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <section
      className={`border-b border-primary top-0 left-0 w-full z-20 ${
        isHomePage ? "absolute" : "relative"
      }`}
    >
      <div>
        <Container className="py-1">
        <div className="flex items-center justify-between py-3">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Bin Ali Medical Logo"
              width={130}
              height={60}
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            <nav>
              <ul
                className={`flex items-center space-x-6 font-primary text-base font-normal leading-6 ${
                  isHomePage ? "text-white" : "text-[rgb(31,43,118)]"
                }`}
              >
                <Link href={"/"}>
                  <li className="cursor-pointer hover:text-primary transition">
                    Home
                  </li>
                </Link>
                <Link href={"/about"}>
                  <li className="cursor-pointer hover:text-primary transition">
                    About
                  </li>
                </Link>
                <Link href={"/products"}>
                  <li className="cursor-pointer hover:text-primary transition">
                    Our Products
                  </li>
                </Link>
                <Link href={"/partners"}>
                  <li className="cursor-pointer hover:text-primary transition">
                    Our Partners
                  </li>
                </Link>
                <Link href={"/customers"}>
                  <li className="cursor-pointer hover:text-primary transition">
                    Customers
                  </li>
                </Link>
                <Link href={"/careers"}>
                  <li className="cursor-pointer hover:text-primary transition">
                    Careers
                  </li>
                </Link>
                <Link href={"/contact"}>
                  <li className="cursor-pointer hover:text-primary transition">
                    Contact
                  </li>
                </Link>
              </ul>
            </nav>
            <Link
              href="http://binalimain.qnoddns.org.cn:9090/BAMS/CustomerLogin"
              target="_blank"
              aria-label="Web Store"
              className="cursor-pointer"
            >
              <button aria-label="Web Store" className="bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition">
                Web Store
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden"
            aria-label="Open Menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <IconMenu2
              className={`h-7 w-7 ${
                isHomePage ? "text-white" : "text-gray-900"
              }`}
            />
          </button>
        </div>
        </Container>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 w-3/4 max-w-[280px] h-full bg-white shadow-lg z-40 flex flex-col items-center py-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-4 right-4 text-gray-800"
              aria-label="Close Menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <IconX className="h-6 w-6" />
            </button>

            <nav className="mt-10">
              <ul className="flex flex-col space-y-6 text-lg font-medium text-gray-900">
                     <Link href={"/"} onClick={() => setIsMobileMenuOpen(false)}>
                     <li className="cursor-pointer hover:text-primary transition">
                       Home
                     </li>
                   </Link>
                   <Link href={"/about"} onClick={() => setIsMobileMenuOpen(false)}>
                     <li className="cursor-pointer hover:text-primary transition">
                       About
                     </li>
                   </Link>
                   <Link href={"/products"} onClick={() => setIsMobileMenuOpen(false)}>
                     <li className="cursor-pointer hover:text-primary transition">
                       Our Products
                     </li>
                   </Link>
                   <Link href={"/partners"} onClick={() => setIsMobileMenuOpen(false)}>
                     <li className="cursor-pointer hover:text-primary transition">
                       Partners
                     </li>
                   </Link>
                   <Link href={"/customers"} onClick={() => setIsMobileMenuOpen(false)}>
                     <li className="cursor-pointer hover:text-primary transition">
                       Customers
                     </li>
                   </Link>
                   <Link href={"/careers"} onClick={() => setIsMobileMenuOpen(false)}>
                     <li className="cursor-pointer hover:text-primary transition">
                       Careers
                     </li>
                   </Link>
                   <Link href={"/contact"} onClick={() => setIsMobileMenuOpen(false)}>
                     <li className="cursor-pointer hover:text-primary transition">
                       Contact
                     </li>
                   </Link>
              </ul>
            </nav>
            <Link
              href="http://binalimain.qnoddns.org.cn:9090/BAMS/CustomerLogin"
              target="_blank"
            >
              <button className="mt-6 bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition">
                Web Store
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Header;
