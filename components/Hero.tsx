import React from 'react'
import { Spotlight } from './ui/spotlight-new'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
    <div>
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full w-[50vw] h-screen" fill="purple" />
      <Spotlight className="top-28 left-80  h-screen w-[50vw]" fill="blue" />
    </div>
    <div className='text-red-800'>
        <h1>Hello I am a developer</h1>
    </div>
    </div>
  )
}

export default Hero
