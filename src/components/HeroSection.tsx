"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function HeroSection() {
  const words = [
    {
      text: "Hii 👋🏻",
    },
    {
      text: "I'm",
    },
    {
      text: "Lokesh",
    },
    {
      text: "Kumawat",
    },
    {
      text: "CS Engineer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Crafting innovative solutions, one project at a time.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Follow
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Resume
        </button>
      </div>
    </div>
  );
}

export default HeroSection