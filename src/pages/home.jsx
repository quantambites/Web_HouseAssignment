import React from 'react'
import Hero from "@/component/pageComponent/Hero"
import Services from "@/component/pageComponent/Services"
import Featured from "@/component/pageComponent/Featured"
import BuyForm from "@/component/pageComponent/BuyForm"
import About from "@/component/pageComponent/About"
import PropertyListing from "@/component/pageComponent/PropertyListing"

const home = () => {
  return (
    <div className='min-h-screen '>
      <Hero />
      <Services />
      <Featured />
      <BuyForm />
      <PropertyListing />
      <About />
    </div>
  )
}

export default home
