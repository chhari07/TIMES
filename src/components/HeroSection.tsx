import React from 'react';
import { Spotlight } from './ui/Spotlight';

const HeroSection = () => {
  return (
    <div className="bg-black h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="text-3xl mt-28 lg:mt-1 md:text-7xl font-bold dark:text-white text-center">
        मांनद Times
      </div>
      <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        &quot;आज की खबरें, कल के विचार—हर कदम पर आपका साथ।&quot;
      </div>
    </div>
  );
};

export default HeroSection;
