"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effects";
export function GobalBlog() {
  const words = [
    {
      text: "Gobal ",
    },
    {
      text: "Blogs",
    },
    {
      text: " will coming",
    },
    {
      text: "soon",
    },
    {
      text: "on मांनद Times   .",
      className: "text-white"
    },
  ];
  return (
    <div className="flex flex-col lg:mt-3  items-center justify-center h-[40rem]  ">
        <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 lg:mb-3   dark:text-neutral-200 text-xs sm:text-base  ">
      आज की खबरें, कल के विचार—हर कदम पर आपका साथ।
      </p>
    
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
