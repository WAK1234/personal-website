import React from 'react'
import Hero from '../../components/main/Hero'
import Feauters from '../../components/main/Feauters'
import Testimonials from '../../components/main/Testimonials'
import Banner from '../../components/main/Banner'
import CtaSection from '../../components/main/CtaSection'

const Home = () => {
  return (
    <main>
      <Hero />
      <Feauters />
      <Testimonials />
      <Banner />
      <CtaSection />
    </main>
  )
}

export default Home