"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { IconCloudDemo } from "./ui/IconCloud";

export default function Hero() {
  return (
    <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="pr-10 text-3xl md:text-6xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Transforming <br /> Ideas into Digital Experiences
        </h1>
        <p className="mt-4 font-normal text-sm text-neutral-300 max-w-lg text-left">
          Hi, I'm Sai Bharath Vemula a CS Graduate Driving Innovation Through Scalable Web Development
        </p>
            </div>
            <div className="pr-[150px] scale-150">
              <IconCloudDemo/>
            </div>
    </div>
  );
}
