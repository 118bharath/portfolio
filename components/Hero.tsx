import React from 'react'
import { Spotlight } from './ui/spotlight-new'
import { TextGenerateEffect } from './ui/text-generate-effect'
import clsx from 'clsx'


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      
      <div>
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full w-[50vw] h-screen" fill="purple" />
      <Spotlight className="top-28 left-80 h-screen w-[50vw]" fill="blue" />
      </div>
      <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={clsx(
        "absolute inset-0",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 flex flex-col items-center">
        <p className="text-md text-black dark:text-blue-400 sm:text-4xl">
          Hi, I'm Sai Bharath
        </p>
        <p className="text-4xl font-bold text-black dark:text-white sm:text-7xl">
          Software Developer
        </p>
        <TextGenerateEffect
          className="text-2xl text-white dark:text-white"
          words="Crafting Digital Experiences"
        />
      </div>
      </div>
    </div>
  )
}

export default Hero
