"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import Container from "../common/Container";
import Logo1 from "@/public/images/binalilogo/dr.reddy.png";
import Logo2 from "@/public/images/binalilogo/descarga-3-1024x207-1.png";
import Logo3 from "@/public/images/binalilogo/Group1171275306.png";
import Logo4 from "@/public/images/binalilogo/Group 1171275307.png";
import Logo5 from "@/public/images/binalilogo/Group 1171275308.png";
import Logo6 from "@/public/images/binalilogo/Group 1171275309.png";
import Logo7 from "@/public/images/binalilogo/Group 1171275310.png";
import Logo8 from "@/public/images/binalilogo/Group 1171275311.png";
import Logo9 from "@/public/images/binalilogo/Group 1171275312.png";
import Logo10 from "@/public/images/binalilogo/Group 1171275313.png";
import Logo11 from "@/public/images/binalilogo/Group 1171275314.png";
import Logo12 from "@/public/images/binalilogo/Group 1171275315.png";
import Logo13 from "@/public/images/binalilogo/Group 1171275316.png";
import Logo14 from "@/public/images/binalilogo/Group 1171275317.png";
import Logo15 from "@/public/images/binalilogo/Group 1171275318.png";
import Logo16 from "@/public/images/binalilogo/Group 1171275319.png";
import Logo17 from "@/public/images/binalilogo/Group 1171275320.png";
import Logo18 from "@/public/images/binalilogo/Group 1171275321.png";
import Logo19 from "@/public/images/binalilogo/Group 1171275322.png";
import Logo20 from "@/public/images/binalilogo/Group 1171275323.png";
import Logo21 from "@/public/images/binalilogo/image 305.png";
import Logo22 from "@/public/images/binalilogo/image 306.png";
import Logo23 from "@/public/images/binalilogo/image 307.png";
import Logo24 from "@/public/images/binalilogo/image 308.png";
import Logo25 from "@/public/images/binalilogo/image 309.png";
import Logo26 from "@/public/images/binalilogo/image 310.png";
import Logo27 from "@/public/images/binalilogo/image 311.png";
import Logo28 from "@/public/images/binalilogo/image 313.png";
import Logo29 from "@/public/images/binalilogo/image 314.png";
import Logo30 from "@/public/images/binalilogo/image 315.png";
import Logo31 from "@/public/images/binalilogo/image 316.png";
import Logo32 from "@/public/images/binalilogo/image 317.png";
import Logo33 from "@/public/images/binalilogo/image 318.png";
import Logo34 from "@/public/images/binalilogo/image 319.png";
import Logo35 from "@/public/images/binalilogo/image 320.png";
import Logo36 from "@/public/images/binalilogo/image 321.png";
import Logo37 from "@/public/images/binalilogo/image 322.png";
import Logo38 from "@/public/images/binalilogo/image 323.png";
import Logo39 from "@/public/images/binalilogo/innate-1218x426 1.png";
import Logo40 from "@/public/images/binalilogo/istem-logo-son 1.png";
import Logo41 from "@/public/images/binalilogo/meritorganics-comp255367 1.png";
import Logo42 from "@/public/images/binalilogo/Mindray_logo.png";
import Logo43 from "@/public/images/binalilogo/primed-logo_n 1.png";
import Logo44 from "@/public/images/binalilogo/rendition-1-1024x197 1.png";

// Import dental logos
import DentalLogo1 from "@/public/images/dentallogo/bensan.jpg";
import DentalLogo2 from "@/public/images/dentallogo/bti.jpg";
import DentalLogo3 from "@/public/images/dentallogo/citage.png";
import DentalLogo4 from "@/public/images/dentallogo/defendix.png";
import DentalLogo5 from "@/public/images/dentallogo/denfiz.jpg";
import DentalLogo6 from "@/public/images/dentallogo/detax.png";
import DentalLogo7 from "@/public/images/dentallogo/dia-dent.png";
import DentalLogo8 from "@/public/images/dentallogo/envisam.jpg";
import DentalLogo9 from "@/public/images/dentallogo/henry.jpg";
import DentalLogo10 from "@/public/images/dentallogo/kide-e-dental.jpg";
import DentalLogo11 from "@/public/images/dentallogo/major.png";
import DentalLogo12 from "@/public/images/dentallogo/nanda-scanner.png";
import DentalLogo13 from "@/public/images/dentallogo/primadental.jpg";
import DentalLogo14 from "@/public/images/dentallogo/pulpdent.png";
import DentalLogo15 from "@/public/images/dentallogo/safecare-medical.png";
import DentalLogo16 from "@/public/images/dentallogo/voco.png";
import DentalLogo17 from "@/public/images/dentallogo/young.png";


const images = [
  { src: Logo1, alt: "Binalilogo" },
  { src: Logo2, alt: "Descarga" },
  { src: Logo3, alt: "Group 1" },
  { src: Logo4, alt: "Group 2" },
  { src: Logo5, alt: "Group 3" },
  { src: Logo6, alt: "Group 4" },
  { src: Logo7, alt: "Group 5" },
  { src: Logo8, alt: "Group 6" },
  { src: Logo9, alt: "Group 7" },
  { src: Logo10, alt: "Group 8" },
  { src: Logo11, alt: "Group 9" },
  { src: Logo12, alt: "Group 10" },
  { src: Logo13, alt: "Group 11" },
  { src: Logo14, alt: "Group 12" },
  { src: Logo15, alt: "Group 13" },
  { src: Logo16, alt: "Group 14" },
  { src: Logo17, alt: "Group 15" },
  { src: Logo18, alt: "Group 16" },
  { src: Logo19, alt: "Group 17" },
  { src: Logo20, alt: "Group 18" },
  { src: Logo21, alt: "Image 305" },
  { src: Logo22, alt: "Image 306" },
  { src: Logo23, alt: "Image 307" },
  { src: Logo24, alt: "Image 308" },
  { src: Logo25, alt: "Image 309" },
  { src: Logo26, alt: "Image 310" },
  { src: Logo27, alt: "Image 311" },
  { src: Logo28, alt: "Image 313" },
  { src: Logo29, alt: "Image 314" },
  { src: Logo30, alt: "Image 315" },
  { src: Logo31, alt: "Image 316" },
  { src: Logo32, alt: "Image 317" },
  { src: Logo33, alt: "Image 318" },
  { src: Logo34, alt: "Image 319" },
  { src: Logo35, alt: "Image 320" },
  { src: Logo36, alt: "Image 321" },
  { src: Logo37, alt: "Image 322" },
  { src: Logo38, alt: "Image 323" },
  { src: Logo39, alt: "Innate" },
  { src: Logo40, alt: "Istem" },
  { src: Logo41, alt: "Merit Organics" },
  { src: Logo42, alt: "Mindray" },
  { src: Logo43, alt: "Primed" },
  { src: Logo44, alt: "Rendition" },
  // Dental logos
  { src: DentalLogo1, alt: "Bensan" },
  { src: DentalLogo2, alt: "BTI" },
  { src: DentalLogo3, alt: "Citage" },
  { src: DentalLogo4, alt: "Defendix" },
  { src: DentalLogo5, alt: "Denfiz" },
  { src: DentalLogo6, alt: "Detax" },
  { src: DentalLogo7, alt: "Dia-Dent" },
  { src: DentalLogo8, alt: "Envisam" },
  { src: DentalLogo9, alt: "Henry" },
  { src: DentalLogo10, alt: "Kide-e-Dental" },
  { src: DentalLogo11, alt: "Major" },
  { src: DentalLogo12, alt: "Nanda Scanner" },
  { src: DentalLogo13, alt: "Primadental" },
  { src: DentalLogo14, alt: "Pulpdent" },
  { src: DentalLogo15, alt: "Safecare Medical" },
  { src: DentalLogo16, alt: "Voco" },
  { src: DentalLogo17, alt: "Young" }
];

const OurPartners = () => {
  const containerRef = React.useRef(null);
  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  // Split images into two rows
  const firstRowImages = images.slice(0, 22);
  const secondRowImages = images.slice(22);

  // Duplicate images for continuous scrolling
  const duplicatedFirstRow = [...firstRowImages, ...firstRowImages];
  const duplicatedSecondRow = [...secondRowImages, ...secondRowImages];
  
  const imgWidth = 200; // Width of each image container
  const firstRowWidth = duplicatedFirstRow.length * imgWidth;
  const secondRowWidth = duplicatedSecondRow.length * imgWidth;
  
  // Adjust speeds for each row
  const firstRowDuration = firstRowWidth / 100;
  const secondRowDuration = secondRowWidth / 80; // Slightly different speed for visual interest



  const duplicatedImages = [...images, ...images];
  const totalImageWidth = duplicatedImages.length * 200; // Assuming each image is 200px wide
  const duration = totalImageWidth / 50; // Adjust the divisor to control the speed

  return (
    <section>
      <Container>
        <h2 className='font-primary text-3xl text-[rgb(40,54,85)] text-center font-medium leading-8 py-4'>Our Partners</h2>
        <div className='pb-20'>
          <div className="overflow-hidden">
            <hr />
            <div className="relative w-full overflow-hidden" ref={containerRef}>
           {/* First Row */}
           <motion.div
              className='flex items-center gap-6 mt-5'
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: firstRowDuration, ease: 'linear' }}
              style={{width: `${firstRowWidth}px`}}
            >
              {duplicatedFirstRow.map((image, index) => (
                <Image 
                  key={`row1-${index}`} 
                  src={image.src} 
                  alt={image.alt} 
                  className='h-[100px] w-auto object-contain'
                  width={imgWidth}
                  height={100}
                />
              ))}
            </motion.div>
            
            {/* Second Row - Moving in opposite direction */}
            <motion.div
              className='flex items-center gap-6 mt-8'
              animate={{ x: ['-50%', '0%'] }}
              transition={{ repeat: Infinity, duration: secondRowDuration, ease: 'linear' }}
              style={{width: `${secondRowWidth}px`}}
            >
              {duplicatedSecondRow.map((image, index) => (
                <Image 
                  key={`row2-${index}`} 
                  src={image.src} 
                  alt={image.alt} 
                  className='h-[100px] w-auto object-contain'
                  width={imgWidth}
                  height={100}
                />
              ))}
            </motion.div>
          </div>
        </div>
        </div>
      </Container>
    </section>
  )
}

export default OurPartners
