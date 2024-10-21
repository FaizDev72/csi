import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className=" pt-14 sm:pt-20 flex flex-col items-center justify-center bg-white ">
      {/* Title */}
      <div className="text-center mb-10 relative flex items-center justify-center w-full ">
        {/* Left line */}
        <div className="hidden sm:block w-2/5 h-[4px] bg-tertiary absolute left-0 top-1/2 transform -translate-y-1/2"></div>

        {/* Text */}
        <div className="relative flex flex-col items-center">
          <h2 className="text-6xl sm:text-8xl font-black font-sans text-primary absolute top-10 left-1/2 transform -translate-x-1/2 z-10 tracking-tight">US</h2>
          <h2 className="text-6xl sm:text-8xl font-black font-sans text-[#C3DAFC] relative z-0 tracking-tight">ABOUT</h2>
        </div>

        {/* Right line */}
        <div className="hidden sm:block w-2/5  h-[4px] bg-tertiary absolute right-0 top-1/2 transform -translate-y-1/2"></div>
      </div>

      {/* Description */}
      <div className="max-w-6xl px-8  mt-14 sm:mt-20">
        <p className=" text-xl sm:text-2xl font-normal sm:font-medium text-justify font-sans text-black">
          The Computer Society Of India is a non-profit professional body that meets to exchange views and
          information to learn and share ideas. Being a national level committee, we work together to discuss
          technology with like-minded people. CSI is known for conducting a plethora of events ranging from
          seminars, workshops, games, and interactions with professionals from industry. These events aim to
          create a conductive environment for geeks and computer enthusiasts by hosting events and other fun
          activities to promote learning and contribute to real-life skills of attendees. CSI aims to infuse education
          with fun to bring the process of learning to a culmination and to light all budding engineers with a
          passion to push their skills beyond limits.
        </p>
      </div>
    </section>
  );
}
