import React from 'react'
import Hero from '../components/about/Hero'
import OurValues from '../components/about/OurValues'
import OurMarketeting from '../components/about/OurMarketeting'
import BioMedical from '../components/about/BioMedical'

const page = () => {
  return (
    <>
        <Hero/>
        <OurValues/>
        <OurMarketeting/>
        <BioMedical/>
    </>
  )
}

export default page