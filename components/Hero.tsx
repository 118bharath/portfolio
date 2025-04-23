"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { IconCloudDemo } from "./ui/IconCloud";
import MagicButton from './ui/MagicButton';

export default function Hero() {
  return (
    <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-6 md:p-8 max-w-full mx-auto relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="md:w-1/2 lg:w-3/5 text-left pb-8 md:pb-0 flex flex-col items-center md:items-start"> {/* Center align text content on mobile */}
          <h1 className="mt-8 md:mt-0 pr-0 md:pr-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight text-center md:text-left">
            Transforming <br className="hidden md:block" /> Ideas into Digital Experiences
          </h1>
          <p className="mt-4 font-normal text-sm md:text-base text-neutral-300 max-w-lg text-center md:text-left">
            Hi, I'm Sai Bharath Vemula a CS Graduate Driving Innovation Through Scalable Web Development
          </p>
          <div className="mt-6">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <MagicButton className="mx-auto md:mx-0" /> {/* Center align button on mobile */}
            </a>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 lg:w-3/5 flex justify-center items-center"> {/* Reduced top margin on mobile */}
          <div className="max-w-md md:max-w-lg lg:max-w-xl w-full"> {/* Make IconCloudDemo container take full width */}
            <IconCloudDemo className="scale-75 md:scale-90 lg:scale-100 w-full" /> {/* Make IconCloudDemo take full width */}
          </div>
        </div>
      </div>
    </div>
  );
}