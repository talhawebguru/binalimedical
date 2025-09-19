import * as motion from "motion/react-client";
import Container from "../common/Container";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom bezier for smooth motion
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <>
      <section className="top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)]">
        <div className="h-screen bg-[url('/images/hero-bg.jpg')] bg-cover flex items-center">
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.h1
                className="font-secondary text-3xl sm:text-5xl font-semibold text-white w-[85%] md:w-[650px] md:leading-[60px]"
                variants={itemVariants}
              >
                One of the Leading Medical Suppliers in{" "}
                <motion.span
                  className="text-secondary font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
                >
                  UAE
                </motion.span>
              </motion.h1>

              <motion.p
                className="font-secondary text-base text-white font-normal md:w-[650px]"
                variants={itemVariants}
              >
                Being the leading supplier of healthcare products in the region,
                Bin Ali Medical Supplies LLC deals with an extensive range of
                high-value products for the benefit of our loyal customer base.
              </motion.p>

              <Link href="/about">
                <motion.button
                  className="bg-primary cursor-pointer mt-4 flex justify-center items-center text-white font-primary text-base font-normal leading-6 py-3 px-6 rounded-full shadow-lg"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Read More
                </motion.button>
              </Link>
            </motion.div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Hero;
