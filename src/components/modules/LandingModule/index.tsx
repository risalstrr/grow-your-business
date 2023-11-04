import React from 'react'
import Hero from './Hero'
import About from './About'
import Service from './Services'
import { FaqModule } from '@modules'
import { IncubationModule } from '../IncubationModule'

export const LandingModule: React.FC = () => {
  return (
    <>
      <div className="relative w-full lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <Hero />
        <About />
        <Service />
        <IncubationModule />
        <FaqModule />
      </div>
    </>
  )
}
