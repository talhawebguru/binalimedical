import React from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client"
import slide1 from "@/public/images/binaliProducts/anika.jpg"
import slide2 from "@/public/images/binaliProducts/assutSutures.jpg"
import slide3 from "@/public/images/binaliProducts/astar.jpg"
import slide4 from "@/public/images/binaliProducts/barray.jpg"
import slide5 from "@/public/images/binaliProducts/biomet.jpg"
import slide6 from "@/public/images/binaliProducts/bloodcare.jpg"
import slide7 from "@/public/images/binaliProducts/bloodstop2.jpg"
import slide8 from "@/public/images/binaliProducts/citotest.jpg"
import slide9 from "@/public/images/binaliProducts/cvMedia-r.png"
import slide10 from "@/public/images/binaliProducts/darco.jpg"
import slide11 from "@/public/images/binaliProducts/eihf.jpg"
import slide12 from "@/public/images/binaliProducts/gd.jpg"
import slide13 from "@/public/images/binaliProducts/gobiz.jpg"
import slide14 from "@/public/images/binaliProducts/herniamesh.jpg"
import slide15 from "@/public/images/binaliProducts/hyalo.jpg"
import slide16 from "@/public/images/binaliProducts/interster.jpg"
import slide17 from "@/public/images/binaliProducts/lifeline.jpg"
import slide18 from "@/public/images/binaliProducts/lifeSciencePlus.png"
import slide19 from "@/public/images/binaliProducts/lockdown1.jpg"
import slide20 from "@/public/images/binaliProducts/metrex.jpg"
import slide21 from "@/public/images/binaliProducts/microbar.jpg"
import slide22 from "@/public/images/binaliProducts/mirion.jpg"
import slide23 from "@/public/images/binaliProducts/pirrone.jpg"
import slide24 from "@/public/images/binaliProducts/yoorimCorp.jpg"

const images = [
  { src: slide1, alt: "Anika" },
  { src: slide2, alt: "Assut Sutures" },
  { src: slide3, alt: "Astar" },
  { src: slide4, alt: "Barrat" },
  { src: slide5, alt: "Biomet" },
  { src: slide6, alt: "Bloodcare" },
  { src: slide7, alt: "Bloodstop2" },
  { src: slide8, alt: "Citotest" },
  { src: slide9, alt: "CV Media-R" },
  { src: slide10, alt: "Darco" },
  { src: slide11, alt: "Eihf" },
  { src: slide12, alt: "GD" },
  { src: slide13, alt: "Gobiz" },
  { src: slide14, alt: "Herniamesh" },
  { src: slide15, alt: "Hyalo" },
  { src: slide16, alt: "Interster" },
  { src: slide17, alt: "Lifeline" },
  { src: slide18, alt: "LifeSciencePlus" },
  { src: slide19, alt: "Lockdown1" },
  { src: slide20, alt: "Metrex" },
  { src: slide21, alt: "Microbar" },
  { src: slide22, alt: "Mirion" },
  { src: slide23, alt: "Pirrone" },
  { src: slide24, alt: "Yoorim Corp" }
];

const OurProducts = () => {
  return (
    <>
      <h2 className='font-primary text-3xl text-[rgb(40,54,85)] text-center font-medium leading-8 py-4'>Our Products</h2>
      <div className='pb-20'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden">
          <hr />
          <motion.div
            className='flex items-center gap-5'
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {images.concat(images).map((image, index) => (
              <Image key={index} src={image.src} alt={image.alt} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default OurProducts